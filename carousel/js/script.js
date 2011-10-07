/* Author: 

*/
$(function(){
	var slides = $("#slider-ul li").length;
	console.log(slides);

	$("#slider-ul li").css("position", "absolute")
	.css("top", "0")
	.css("left", "0")
	.css("z-index", "0");
	
	$(".active").css("z-index", slides);
	//setInterval(moveSlide, 3000);
		
})






















