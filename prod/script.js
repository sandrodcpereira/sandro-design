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


// old vs. new toggle click

$(function(){
	$('div.old-new-toggle').click(function(){
		$(this).toggleClass('old');
		
	});
});


// old vs. new number highlight

document.addEventListener("mouseover", function(event) {
  let target = event.target;
  if (target.classList.contains("before-after")) {
    let classes = target.className.split(" ");
    let lastClass = classes[classes.length - 1];
    let dot = document.querySelector(`.dot.${lastClass}`);
    dot.classList.add("highlight");
  }
});

$(function(){
	$('p.before-after').mouseleave(function(){
		$('.dot').removeClass('highlight');
	});
});

