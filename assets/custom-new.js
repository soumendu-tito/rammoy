$(document).ready(function(){


    // partnr slider

    $('.partnr_slider').owlCarousel({
        loop:true,
        margin:52,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    });


  // expart card slider

      $('.expart_slider').owlCarousel({
        loop:true,
        margin:42,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


  // bestseller slider

    $('.bestslr-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        dots:true,
        navText: [
            "<span></span>",
            "<span></span>"
          ],
        responsive:{
            0:{
                items:1.5
            },
            600:{
                items:2.1
            },
            1000:{
                items:4.2
            }
        }
    });
});