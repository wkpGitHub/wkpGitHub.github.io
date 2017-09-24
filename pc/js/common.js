$(function(){
	$(".show_span").click(function(e) {
        if($(".nav_bot").is(":hidden")){
			$(this).addClass("show_span_ac")
			$(".nav").addClass("nav_ac")
			$(".nav_bot").slideDown()
			}
		else{
			$(this).removeClass("show_span_ac")
			$(".nav").removeClass("nav_ac")
			$(".nav_bot").slideUp()
			}	
		return false	
    });
	
	$(window).resize(function(e) {
		var docuWidth=document.body.clientWidth ||document.documentElement.clientWidth
        if(docuWidth >768){
			$(".show_span").removeClass("show_span_ac")
			$(".nav").removeClass("nav_ac")
			$(".nav_bot").hide()
			}
		if(docuWidth<=768){
			var wh=function(){
			var Fheight=$("#banner_tabs").height()
			var Fwidth=$("#banner_tabs").width()
			Fheight=parseInt(Fwidth*500/768)
			Fwidth=parseInt(Fwidth)
			$("#banner_tabs").height(Fheight)
			}
			wh()
			}
		else{
			wh=null
			$("#banner_tabs").css("width","100%")
			$("#banner_tabs").css("height","700px")
			
			}	
    }).resize()
	

	$("#footer_con").hover(function(){
		if(!$("#footer_con").is(":animated")){
		$("#footer_con .footer_con_bot").css("display","none")
		$(this).stop().animate({bottom:"-50px"},300)}
		},function(){
			$("#footer_con .footer_con_bot").css({"display":"block","opacity":"0"})
			$(this).stop().animate({bottom:"-320px"},300,function(){
				$("#footer_con .footer_con_bot").animate({opacity:"0.7"},300)
				})

			})

	})