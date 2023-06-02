const opts = {
  svg: { width: 1000, height: 800, background: '#fff' },
  zoom: { disabled: false }
}

// this.transform = d3.event.transform; // {x,y,k} x坐标偏移量，y坐标偏移量, k缩放比例
// this.linkGroup = this.container.append('g').classed('links', true)
// this.relationGroup = this.container.append('g').classed('texts', true)
// this.nodeGroup = this.container.append('g').classed('nodes', true)


class CForce {
  constructor({ el, data, insertTag }) {
    this._el = el
    this._data = data || {}
    this.createSvg()
    insertTag(this.svg)
  }

  createSvg () {
    const { width = 1000, height = 800, background = "#fff" } = this._data.svgAttrs || {}
    this.svg = d3.select(this._el).append('svg').attr('width', width).attr('height', height).style('background', background)
    const { disabled } = this._data.zoom || {}
    if (!disabled) {
      this.svg.call(d3.zoom().on('zoom', function () {
        this.transform = d3.event.transform; // {x,y,k} x坐标偏移量，y坐标偏移量, k缩放比例
        this.container.attr("transform", "translate("
          + transform.x + "," + transform.y
          + ")scale(" + transform.k + ")");
      }))
    }
    this.container = this.svg.append('g')
    this.linkGroup = this.container.append('g').classed('link-group', true)
    this.relationGroup = this.container.append('g').classed('relation-group', true)
    this.nodeGroup = this.container.append('g').classed('node-group', true)
  }

  init (data) {
    var root = d3.hierarchy(data); // <-A
    this.nodes = root.descendants(); // <-B
    this.links = root.links().map((item, index) => {
      item.index = index
      return item
    });

    this.simulation = d3.forceSimulation(nodes).alphaDecay(0.05)
    this.simulation.force("center", d3.forceCenter(w / 2, h / 2));
    this.simulation.force('manbody', d3.forceManyBody().strength(-100))
    this.simulation.force('link', d3.forceLink(links).distance(40))
    this.simulation.force("collide", d3.forceCollide(30));

    simulation.on('tick', () => {
      this.updateLinks(this.links)
      this.updateRelations(this.links)
      this.updateNodes(this.nodes)
    })
  }

  updateNodes (nodes) {
    var updateSelections = gNodes.selectAll('g.node-group').data(nodes)
    var enterSelections = updateSelections.enter().append('g').classed('node-group', true)
    enterSelections.append('circle').classed('circle', true).attr('fill', d => {
      return  d.children ? '#83fef7':'#377cf9'
    }).attr('r', d => d.r || 10)
    enterSelections.append('text').classed('node-text', true).attr('dy', 22).attr('fill-opacity', d => {
      return d.depth > 2 ? '0.2' : '0.8'
    }).text(d => d.data.name)
    updateSelections.merge(enterSelections).attr('transform', d => `translate(${d.x},${d.y})`)
    .on('click', function(d) {
      if (this.hasAttribute('selected')) return false
      this.setAttribute('selected', true)
      d3.select(this).append('path').attr('id', 'selectPath').attr('d', drawOutLine()).attr('fill', '#fff').attr('fill-opacity', 0.8).on('mousedown', function() {
        const e = d3.event
        e.stopPropagation()
        const transform = container.transform || { x: 0, y: 0, k: 1 }
        let x = d.x * transform.k + transform.x
        let y = d.y * transform.k + transform.y
        drawLine({ parent: d3.select('svg'), startx: x, starty: y, source: d })
      })
    })
    .on('mouseover', function () {
      const d = d3.select(this).data()[0]
      console.log(d)
      links.forEach(item => {
        if (item.source.index === d.index) {
          item.isSource = true
        }
        if (item.target.index === d.index) {
          item.isTarget = true
        }
      })
      updateLinks(links)
    })
    .on('mouseout', function (d) {
      links.forEach(item => {
        delete item.isSource
        delete item.isTarget
      })
      updateLinks(links)
    })
    .call(bindDrag ())

    updateSelections.exit().remove()
  }

  bindDrag () {
    function started (d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0.1).restart();//设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
      }
      d.fx = d.x;
      d.fy = d.y;
    }
    function dragged (d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
    function ended (d) {
      if (!d3.event.active) {
        simulation.alphaTarget(0);
      }
      d.fx = null;
      d.fy = null;
    }
    return d3.drag().on("start", started).on("drag", dragged).on("end", ended)
  }
}

function rgbtohsv(r,g,b){
	r=r/255;
	g=g/255;
	b=b/255;
	var h,s,v;
	var min=Math.min(r,g,b);
	var max=v=Math.max(r,g,b);
	var l=(min+max)/2;
	var difference = max-min;
	
	if(max==min){
		h=0;
	}else{
		switch(max){
			case r: h=(g-b)/difference+(g < b ? 6 : 0);break;
			case g: h=2.0+(b-r)/difference;break;
			case b: h=4.0+(r-g)/difference;break;
		}
		h=Math.round(h*60);
	}
	if(max==0){
		s=0;
	}else{
		s=1-min/max;
	}
	s=Math.round(s*100);
	v=Math.round(v*100);
	return [h,s,v];
}

function hsvtorgb(h,s,v){
	var s=s/100;
	var v=v/100;
	var h1=Math.floor(h/60) % 6;
	var f=h/60-h1;
	var p=v*(1-s);
	var q=v*(1-f*s);
	var t=v*(1-(1-f)*s);
	var r,g,b;
	switch(h1){
		case 0:
			r=v;
			g=t;
			b=p;
			break;
		case 1:
			r=q;
			g=v;
			b=p;
			break;
		case 2:
			r=p;
			g=v;
			b=t;
			break;
		case 3:
			r=p;
			g=q;
			b=v;
			break;
		case 4:
			r=t;
			g=p;
			b=v;
			break;
		case 5:
			r=v;
			g=p;
			b=q;
			break;
	}
	return [Math.round(r*255),Math.round(g*255),Math.round(b*255)];
}

function set16ToRgb(str){
  var reg = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/
  if(!reg.test(str)){return;}
  let newStr = (str.toLowerCase()).replace(/\#/g,'')
  let len = newStr.length;
  if(len == 3){
      let t = ''
      for(var i=0;i<len;i++){
          t += newStr.slice(i,i+1).concat(newStr.slice(i,i+1))
      }
      newStr = t
  }
  let arr = []; //将字符串分隔，两个两个的分隔
  for(var i =0;i<6;i=i+2){
      let s = newStr.slice(i,i+2)
      arr.push(parseInt("0x" + s))
  }
  const [r,g,b] = arr
  const [h,s,v] = rgbtohsv(r,g,b)
  const rgb1 = hsvtorgb(h,s,v*0.7)
  const rgb2 = hsvtorgb(h,s,v*0.3)
  return {
    innerFill: `rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})`,
    innerStroke: str,
    outerFill: `rgb(${rgb2[0]}, ${rgb2[1]}, ${rgb2[2]})`,
    outerStroke: `rgb(${rgb1[0]}, ${rgb1[1]}, ${rgb1[2]})`
  }
}

function createFeiLine({defs, container, pathSelection, maskRadius, stroke, strokeWidth, duration}) {
  var radialGradient = defs.select('#fei-radial')
  if (!radialGradient.size()) {
    radialGradient = defs.append('radialGradient').attr('id', 'fei-radial')
    radialGradient.append('stop').attr('offset', '0%').attr('stop-color', '#fff').attr('stop-opacity', '1')
    radialGradient.append('stop').attr('offset', '100%').attr('stop-color', '#fff').attr('stop-opacity', '0')
  }
  var feiMask = defs.select('#fei-mask')
  if (!feiMask.size()) {
    feiMask = defs.append('mask').attr('id', 'fei-mask')
  }
  var feiCircle = feiMask.append('circle').attr('r', maskRadius).attr('fill', 'url(#fei-radial)')

  container.append('path')
  .attr('stroke', stroke)
  .attr('fill', 'none')
  .attr('stroke-width', strokeWidth)
  // .attr('marker-end', 'url(#arrow-marker)')
  .attr('mask', "url(#fei-mask)")
  .transition()
  .duration(duration)
  .attrTween('d', function(d) {
    const coord = pathSelection.attr('d').replace(/(M|Q)/g, ',').match(/((\-|\d|\.)+)/g)
    const pathline = pathSelection.node()
    const len = pathline.getTotalLength()

    var x1 = +coord[0], y1 = +coord[1], // 起点
        x2 = +coord[2], y2 = +coord[3], // 控制点
        x3 = +coord[4], y3 = +coord[5]; // 终点
    return function(t) {
      const p = pathline.getPointAtLength(t * len)  
      const x = (1 - t) * x1 + t * x2
      const y = (1 - t) * y1 + t * y2
      feiCircle.attr('cx', p.x).attr('cy', p.y)
      if (t === 1) {
        feiCircle.remove()
        d3.select(this).remove()
        // createFeiLine({defs, container, pathSelection, maskRadius, stroke, strokeWidth, duration})
      }
      return `M${x1}, ${y1} Q${x},${y} ${p.x}, ${p.y}`
    }
  })
}


// var q = d3.quadtree().extent([[0, 0], [width, height]])
// var root = q.x(d => d.x).y(d => d.y).addAll(nodes);

// nodes.forEach(node => q.visit(collide(node)))
// var n = 0, d = 0;
function collide (node) {
  const n_x0 = node.textCoors.x0,
    n_y0 = node.textCoors.y0,
    n_x1 = node.textCoors.x1,
    n_y1 = node.textCoors.y1;
  return function (rect, x0, y0, x1, y1) {
    const {id, textCoors, nodeTextWidth} = rect?.data || {}
    if (!rect.length && id !== node.id) {//是叶子节点且不是当前节点
      const rect_x0 = textCoors.x0,
            rect_y0 = textCoors.y0,
            rect_x1 = textCoors.x1,
            rect_y1 = textCoors.y1;
      const total_w = node.nodeTextWidth + nodeTextWidth
      const total_h = 16 * 2 // 16是行高
      const diff_x = Math.max(n_x0, n_x1, rect_x0, rect_x1) - Math.min(n_x0, n_x1, rect_x0, rect_x1)
      const diff_y =  Math.max(n_y0, n_y1, rect_y0, rect_y1) - Math.min(n_y0, n_y1, rect_y0, rect_y1)
      if (diff_x < total_w + 36 && diff_y < total_h + 30) {
        node.textOpacity = true
      }
    }
    // 如果当前节点的text完全在rect里面，需要继续对rect子节点进行遍历
    return !(n_x0 > x0 && n_x1 < x1 && n_y0 > y0 && n_y1 < y1)
  };
}

function do_throttle_debounce(fn, times) {
  let flag = true, timer = null;
  if (flag) {
    flag = false
    fn()
    setTimeout(() => {
      flag = true
    }, times)
  }
  clearTimeout(timer)
  timer = setTimeout(() => {
    fn()
  }, times)
}


function throttle_debounce(fn, times) {
  let flag = true, timer = null;
  return function (...args) {
    // if (flag) {
    //   flag = false
    //   fn.apply(this, args)
    //   setTimeout(() => {
    //     flag = true
    //   }, times)
    // }
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, times)
  }
}

var updateOpc = throttle_debounce((nodes, mergeSelections) => {
  var testIds = []
  var allTextCoors = nodes.map(node => node.textCoors)
  var minX = allTextCoors.sort((a, b) => a.x0 - b.x0)[0].x0
  var maxX = allTextCoors.sort((a, b) => b.x1 - a.x1)[0].x1
  var minY = allTextCoors.sort((a, b) => a.y0 - b.y0)[0].y0
  var maxY = allTextCoors.sort((a, b) => b.y1 - a.y1)[0].y1

  var myTree = new Quadtree({
    x: minX,
    y: minY,
    width: maxX - minX,
    height: maxY - minY
  })
  // 生成四叉树
  nodes.forEach(node => {
    node.textOpacity = false
    const {textCoors, id} = node
    myTree.insert({
      x : textCoors.x0,
      y : textCoors.y0,
      width : textCoors.x1 - textCoors.x0,
      height : textCoors.y1 - textCoors.y0,
      node
    })
  })
  // 开始寻找可能会发生碰撞的点位
  nodes.forEach(node => {
    const {textCoors, id} = node
    // 用来计算过重叠的元素，不需要隐藏; 用来计算的文字，是最先渲染的文字，就是在上面的文字
    testIds.push(id)
    const nodeList = myTree.retrieve({
      x: textCoors.x0,
      y: textCoors.y0,
      width : textCoors.x1 - textCoors.x0,
      height : textCoors.y1 - textCoors.y0
    })
    nodeList.forEach(n => {
      // 排除自己
      if (node.id !== n.node.id) {
        tryDie(node, n.node, testIds)
      }
    })
  })
  mergeSelections.select('.node-text').attr('fill-opacity', d => {
    const light = d.hasOwnProperty('hidden') && d.hidden === false
    return (d.textOpacity && !light) ? '0.2' : '1'
  })
}, 200)


function tryDie(currentNode, node, testIds) {
  const n_x0 = currentNode.textCoors.x0,
    n_y0 = currentNode.textCoors.y0,
    n_x1 = currentNode.textCoors.x1,
    n_y1 = currentNode.textCoors.y1;
    const rect_x0 = node.textCoors.x0,
      rect_y0 = node.textCoors.y0,
      rect_x1 = node.textCoors.x1,
      rect_y1 = node.textCoors.y1;
    const total_w = currentNode.nodeTextWidth + node.nodeTextWidth
    const total_h = 16 * 2 // 16是行高
    const diff_x = Math.max(n_x0, n_x1, rect_x0, rect_x1) - Math.min(n_x0, n_x1, rect_x0, rect_x1)
    const diff_y =  Math.max(n_y0, n_y1, rect_y0, rect_y1) - Math.min(n_y0, n_y1, rect_y0, rect_y1)
    if (diff_x < total_w && diff_y < total_h) {
      if (testIds.includes(node.id)) {
        node.textOpacity = true
      }
    }
}
