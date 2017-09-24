var wkp={
	font_size:function(){document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px"}
	}
wkp.font_size();
window.onresize=wkp.font_size;
window.onload=function(){	
//没有订单情况下，判断显示（没有订单板块）	
	var per_main=document.getElementById("per_main");
	var bottom_de=document.getElementById("bottom_de");
	var no_order=document.getElementById("no_order");
	var waiter=document.getElementById("waiter");
	if(!per_main){
		no_order.style.display="block"
		bottom_de.style.display="none"
		waiter.style.display="none"
		}
	}
	

	
