

jQuery(document).ready(function() {


jQuery( ".navbar-toggler" ).click(function() {
  jQuery( this ).toggleClass( "active" );
  jQuery( this ).parent().parent().parent().toggleClass( "active" );
});

/* Home Page Banner Slider Start */
 jQuery('.banner-slider-text').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: true,
        autoplay: false,
		mouseDrag: false,
		touchDrag: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

jQuery('.banner-text').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: false,
        mouseDrag: true,
        touchDrag: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


/* Home Page Banner Slider End */

jQuery('.count').each(function () {
    jQuery(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            jQuery(this).text(Math.ceil(now));
        }
    });
});

jQuery(".count-images").hover(function(){
		var x = $(this).find("svg")
		$svg = x.drawsvg({
		 });
		
		function animate() {
		  $svg.drawsvg('animate');  
		}
		
		animate();
});


setTimeout(function() {
    jQuery('body').removeClass('loading');
},1000);

 

});