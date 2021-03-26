


// layout component loader

$(function(){
	$("header").load("layout/header.html"); 
	$("footer").load("layout/footer.html"); 
	$("nav").load("layout/nav.html"); 
});

// hide play prototype button when clicked

$(function(){
	$('div.play-trigger').click(function(){
		$(this).fadeOut();
		$(this).siblings( ".video").get(0).play();
	});

	$('video').on('ended',function(){
		$('div.play-trigger').fadeIn();
	});
});

$(function(){
	$('a.play-trigger').click(function(){
		$(this).fadeOut();
	});
});

// fix navbar on smaller screens


$( document ).ready(function() { 
	$(function(){
		var navHeight = $(".nav-contents").height();
		console.log(navHeight);
	});
});







//var nav-height = $(".nav-contents").height();




//if ($(window).height() < navHeight) {
//   alert('Less than 960');
//}



//var div = $(".nav-contents").height();
//var win = $(window).height();
//
//if (div > win ) {
//	alert('Less than 960');
//    //$("div").css( "background-color", "yellow" );
//}