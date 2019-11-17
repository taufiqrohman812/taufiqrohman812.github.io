//navbar
$(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 555) { 
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });
});

// event pada saat link di klik
$('.page-scroll').on('click', function(e){

	e.preventDefault();


	// ambil isi href
	var position =
		$($(this).attr("href")).offset().top;
	
	//pindahkan scroll
	$('body, html').animate({
		scrollTop: position - 80
	}, 1250, 'easeInOutExpo');

	

});

//jumbotron
$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ wScroll/6 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ wScroll +'%)'
	});


	//portfolio
	if(wScroll > $('.portfolio').offset().top - 250 ){
		$('.portfolio .thumbnail').each(function(i){
			setTimeout(function(){
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 500 * (i+1));

		});	
	}
});


//jumbotron img
$(window).on("load", function(){
	$(".jumbotron img").css({
		"transform" : "scale(1)",
		"opacity" : 1
	})

	setTimeout(function(){
		$(".jumbotron h1").css({
			"transform" : "translate(0,0)",
			"opacity" : 1
		})

		$(".jumbotron p").css({
			"transform" : "translate(0,0)",
			"opacity" : 1
		})		
	}, 1000)
})

// quotes
$(document).ready(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() > $('.quote').offset().top - 200){
			$(".quote h1").css({
				"transform" : "translate(0,0)",
				"opacity" : 1
			})

			$(".quote hr").css({
				"transform" : "translate(0,0)",
				"opacity" : 1
			})

			$(".quote .atas").css({
				"transform" : "translate(0,0)",
				"opacity" : 1
			})

			$(".quote .bawah").css({
				"transform" : "translate(0,0)",
				"opacity" : 1
			})

		}
	})
});
