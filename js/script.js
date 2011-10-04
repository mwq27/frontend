/* Author: 

*/
$(function(){
	var slid = $("#slider-ul li");
	slid.click(function(){
		var path = "img/" + $(this).data("name");
		$("#container").fadeOut(300, function(){
			$(this).css("background","url("+path+")").fadeIn(300);
		});
		
		$(this).children("img")
		.slideUp(300);
		$(this)
		.children("p")
		.fadeIn(300);
		
			
	});
	
		
})






















