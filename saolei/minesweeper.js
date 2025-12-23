class Minesweeper {
    constructor() {
        this.board = [];
        this.gameBoard = document.getElementById('gameBoard');
        this.mineCountEl = document.getElementById('mineCount');
        this.timerEl = document.getElementById('timer');
        this.statusEl = document.getElementById('gameStatus');
        this.gameOverModal = document.getElementById('gameOverModal');
        this.gameOverTitle = document.getElementById('gameOverTitle');
        this.gameOverMessage = document.getElementById('gameOverMessage');

        this.difficulties = {
            easy: { rows: 9, cols: 9, mines: 10 },
            medium: { rows: 16, cols: 16, mines: 40 },
            hard: { rows: 16, cols: 30, mines: 99 }
        };

        this.currentDifficulty = 'easy';
        this.rows = 9;
        this.cols = 9;
        this.mines = 10;
        this.flags = 0;
        this.revealed = 0;
        this.gameStarted = false;
        this.gameOver = false;
        this.timer = 0;
        this.timerInterval = null;
        this.firstClick = true;

        this.initEventListeners();
        this.newGame();
    }

    initEventListeners() {
        document.getElementById('newGame').addEventListener('click', () => this.newGame());
        document.getElementById('restartGame').addEventListener('click', () => this.newGame());
        document.getElementById('difficulty').addEventListener('change', (e) => this.changeDifficulty(e.target.value));

        // 自定义难度输入监听
        ['rows', 'cols', 'mines'].forEach(id => {
            document.getElementById(id).addEventListener('input', () => {
                if (this.currentDifficulty === 'custom') {
                    this.updateCustomDifficulty();
                }
            });
        });

        // 防止右键菜单
        document.addEventListener('contextmenu', e => e.preventDefault());
    }

    changeDifficulty(difficulty) {
        this.currentDifficulty = difficulty;
        const customControls = document.getElementById('customControls');

        if (difficulty === 'custom') {
            customControls.style.display = 'flex';
            this.updateCustomDifficulty();
        } else {
            customControls.style.display = 'none';
            const config = this.difficulties[difficulty];
            this.rows = config.rows;
            this.cols = config.cols;
            this.mines = config.mines;
        }

        this.newGame();
    }

    updateCustomDifficulty() {
        const rows = parseInt(document.getElementById('rows').value) || 9;
        const cols = parseInt(document.getElementById('cols').value) || 9;
        const mines = parseInt(document.getElementById('mines').value) || 10;

        // 验证输入
        const maxMines = rows * cols - 1;
        if (mines > maxMines) {
            document.getElementById('mines').value = maxMines;
        }

        this.rows = Math.max(5, Math.min(30, rows));
        this.cols = Math.max(5, Math.min(50, cols));
        this.mines = Math.max(1, Math.min(maxMines, mines));
    }

    newGame() {
        this.flags = 0;
        this.revealed = 0;
        this.gameStarted = false;
        this.gameOver = false;
        this.timer = 0;
        this.firstClick = true;

        clearInterval(this.timerInterval);
        this.updateMineCount();
        this.updateTimer();
        this.updateStatus('准备开始');

        this.gameOverModal.classList.remove('show', 'win', 'lose');

        this.createBoard();
        this.renderBoard();
    }

    createBoard() {
        // 初始化空板
        this.board = Array(this.rows).fill(null).map(() =>
            Array(this.cols).fill(null).map(() => ({
                isMine: false,
                isRevealed: false,
                isFlag: false,
                neighborMines: 0
            }))
        );
    }

    placeMines(excludeRow, excludeCol) {
        let minesPlaced = 0;

        while (minesPlaced < this.mines) {
            const row = Math.floor(Math.random() * this.rows);
            const col = Math.floor(Math.random() * this.cols);

            // 确保不在第一次点击的位置和相邻位置放雷
            if (!this.board[row][col].isMine &&
                !(row === excludeRow && col === excludeCol) &&
                !this.isAdjacent(row, col, excludeRow, excludeCol)) {
                this.board[row][col].isMine = true;
                minesPlaced++;
            }
        }

        // 计算每个格子的相邻雷数
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if (!this.board[row][col].isMine) {
                    this.board[row][col].neighborMines = this.countAdjacentMines(row, col);
                }
            }
        }
    }

    isAdjacent(row1, col1, row2, col2) {
        return Math.abs(row1 - row2) <= 1 && Math.abs(col1 - col2) <= 1 && !(row1 === row2 && col1 === col2);
    }

    countAdjacentMines(row, col) {
        let count = 0;

        for (let r = row - 1; r <= row + 1; r++) {
            for (let c = col - 1; c <= col + 1; c++) {
                if (this.isValidCell(r, c) && this.board[r][c].isMine) {
                    count++;
                }
            }
        }

        return count;
    }

    isValidCell(row, col) {
        return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
    }

    renderBoard() {
        this.gameBoard.innerHTML = '';
        this.gameBoard.style.gridTemplateColumns = `repeat(${this.cols}, 1fr)`;

        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = document.createElement('button');
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.className = 'cell';

                cell.addEventListener('click', () => this.handleCellClick(row, col));
                cell.addEventListener('contextmenu', (e) => this.handleCellRightClick(e, row, col));

                this.gameBoard.appendChild(cell);
                this.updateCell(row, col);
            }
        }
    }

    updateCell(row, col) {
        const cell = this.gameBoard.children[row * this.cols + col];
        const cellData = this.board[row][col];

        cell.className = 'cell';
        cell.textContent = '';

        if (cellData.isFlag) {
            cell.classList.add('flag');
            cell.textContent = '🚩';
        } else if (cellData.isRevealed) {
            cell.classList.add('revealed');

            if (this.gameOver && cellData.isMine) {
                cell.classList.add('mine');
            } else if (cellData.isMine) {
                cell.textContent = '💣';
            } else if (cellData.neighborMines > 0) {
                cell.textContent = cellData.neighborMines;
                cell.classList.add(`number-${cellData.neighborMines}`);
            }
        }

        if (this.gameOver) {
            cell.classList.add('game-over');
        }
    }

    handleCellClick(row, col) {
        if (this.gameOver) return;

        // 第一次点击时不放雷
        if (this.firstClick) {
            this.placeMines(row, col);
            this.firstClick = false;
        }

        // 开始计时
        if (!this.gameStarted) {
            this.gameStarted = true;
            this.startTimer();
            this.updateStatus('游戏进行中');
        }

        const cellData = this.board[row][col];

        // 如果已标记，不能点击
        if (cellData.isFlag) return;

        // 如果已揭示，跳过
        if (cellData.isRevealed) return;

        // 揭示格子
        this.revealCell(row, col);

        // 检查游戏状态
        this.checkGameState();
    }

    handleCellRightClick(event, row, col) {
        event.preventDefault();

        if (this.gameOver) return;

        const cellData = this.board[row][col];

        // 如果已揭示，不能标记
        if (cellData.isRevealed) return;

        // 切换标记状态
        cellData.isFlag = !cellData.isFlag;

        // 更新标记计数
        if (cellData.isFlag) {
            this.flags++;
        } else {
            this.flags--;
        }

        this.updateMineCount();
        this.updateCell(row, col);
        this.checkGameState();
    }

    revealCell(row, col) {
        const cellData = this.board[row][col];

        if (cellData.isRevealed || cellData.isFlag) return;

        cellData.isRevealed = true;
        this.revealed++;

        if (cellData.isMine) {
            this.gameOver = true;
            this.endGame(false);
        } else if (cellData.neighborMines === 0) {
            // 自动揭示相邻的空格子
            for (let r = row - 1; r <= row + 1; r++) {
                for (let c = col - 1; c <= col + 1; c++) {
                    if (this.isValidCell(r, c) && !(r === row && c === col)) {
                        this.revealCell(r, c);
                    }
                }
            }
        }

        this.updateCell(row, col);
    }

    checkGameState() {
        // 检查是否踩雷
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                const cell = this.board[row][col];
                if (cell.isMine && cell.isRevealed) {
                    this.endGame(false);
                    return;
                }
            }
        }

        // 检查是否获胜
        const totalCells = this.rows * this.cols;
        const nonMineCells = totalCells - this.mines;

        if (this.revealed === nonMineCells) {
            this.endGame(true);
        }
    }

    endGame(won) {
        this.gameOver = true;
        clearInterval(this.timerInterval);

        if (won) {
            this.updateStatus('恭喜获胜！');
            this.gameOverTitle.textContent = '游戏胜利！';
            this.gameOverMessage.textContent = `用时 ${this.timer} 秒`;
            this.gameOverModal.classList.add('show', 'win');
        } else {
            this.updateStatus('游戏失败！');
            this.gameOverTitle.textContent = '游戏失败！';
            this.gameOverMessage.textContent = '踩到地雷了，再试一次吧！';
            this.gameOverModal.classList.add('show', 'lose');
        }
    }

    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timer++;
            this.updateTimer();
        }, 1000);
    }

    updateMineCount() {
        this.mineCountEl.textContent = this.mines - this.flags;
    }

    updateTimer() {
        this.timerEl.textContent = this.timer;
    }

    updateStatus(status) {
        this.statusEl.textContent = status;
    }
}

// 初始化游戏
document.addEventListener('DOMContentLoaded', () => {
    new Minesweeper();
});