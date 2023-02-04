


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


// old new toggle click

$(function(){
	$('div.old-new-toggle').click(function(){
		$(this).toggleClass('old');
		
	});
});