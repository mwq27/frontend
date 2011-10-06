/* Author: 

*/
$(function(){
	var slid = $("#slider-ul li");
	slid.click(function(){
		var path = "img/" + $(this).data("name");
		$("#container").fadeOut(300, function(){
			$(this).css("background","url("+path+")").fadeIn(300);
		});
		
		/*$(this).children("img")
		.slideUp(300);
		$(this)
		.children("p")
		.fadeIn(300);
		
			*/
	});
		
	$("#showSide").live("click", function(){
		$("#sidebar").animate({
			left: "0px"
		}, 300);
		
		$("#container, footer").animate({
			left:"300px"
		}, 300);
		
		
		$(this).attr("id", "closeSide").html("Close Sidebar");
		
	});
	
	$("#closeSide").live("click", function(){
		$("#sidebar").animate({
			left: "-300px"
		}, 300);
		
		$("#container, footer").animate({
			left:"0px"
		}, 300);
		
		$(this).attr("id", "showSide").html("Show Sidebar");
	})
		
})






















