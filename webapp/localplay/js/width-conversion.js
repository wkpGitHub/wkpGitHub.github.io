(function(){
  function getFontSize(){
    var $html=document.documentElement;
    var $windowWidth=$html.clientWidth;
    $html.style.fontSize=$windowWidth/7.5+'px'; 
  }
  document.addEventListener("DOMContentLoaded", function(){
    getFontSize()
  },false)
  window.addEventListener("resize", function(){
    getFontSize()
  },false)
})() 