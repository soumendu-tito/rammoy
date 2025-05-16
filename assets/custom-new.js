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


  // typeing text

  //  const fullText = "Made by a Mom,<br>for Moms";
  // let index = 0;

  // function typeNextChar() {
  //   if (index < fullText.length) {
  //     const currentChar = fullText.charAt(index);

  //     if (currentChar === '<' && fullText.substr(index, 4) === '<br>') {
  //       $('#typingText').append('<br>');
  //       index += 4; // Skip the entire "<br>"
  //     } else {
  //       $('#typingText').append(currentChar);
  //       index++;
  //     }

  //     setTimeout(typeNextChar, 100);
  //   }
  // }

  // typeNextChar(); // Start typing
});