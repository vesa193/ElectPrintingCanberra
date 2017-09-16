/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click

$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active') {
    $('.navbar-toggle:visible').click();
  }

// Google Maps Scripts
var map = null;
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);
google.maps.event.addDomListener(window, 'resize', function() {
    map.setCenter(new google.maps.LatLng(40.6700, -73.9400));
});

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.6700, -73.9400), // New York

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(40.6700, -73.9400);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}


//This is for navbar-toggle
document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
  this.classList.toggle( "active" );
});


// Counters statistics setting
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


//Setting for sidebar-menu


$(document).ready(function() {
    $(".fa-times").click(function() {
        $(".sidebar-menu").addClass("hide-menu");
        $(".toggle-menu").addClass("opacity-one");
    });

     $(".toggle-menu").click(function() {
        $(".sidebar-menu").removeClass("hide-menu");
        $(".toggle-menu").removeClass("opacity-one");
    });    
});


//Setting for products

$(function() {

  "use strict"
  
  var init = "Cart is empty!";
  var counter = 0;

  // Initial Cart
  $(".counter").html(init);
  
  // Add Items To Basket
  function addToBasket() {
    $(".cart_list").append("<li class='animated bounceInRight'><div class='product_title'>Product Title</div><div class='product_price'>Product Price</div><div class='remove_cart'><i class='fa fa-times'></i></div></li>");
    $(".alert-product-add").fadeIn().delay(3000).fadeOut(3000);
    counter++;
    if (counter == 1) {
      $(".counter").html(counter + ' item');
    } else {
    $(".counter").html(counter + ' items').animate({
      'opacity' : '0',
      'font-size' : '10px'
    },300, function() {
      $(".counter").delay(300).animate({
        'opacity' : '1',
      'font-size' : '16px'
      });
    });
  }
}
  

  // Add To Basket Animation
  
  $(".cart_btn").on("click", function() {
    addToBasket();
    $(this).parent().parent().find(".product_overlay").css({
      'transform': ' translateY(0px)',
      'opacity': '1',
      'transition': 'all ease-in-out .45s'
    }).delay(1500).queue(function() {
      $(this).css({
        'transform': 'translateY(-500px)',
        'opacity': '0',
        'transition': 'all ease-in-out .45s'
      }).dequeue();
    });
  });
  
  
  
  
});

$(".shopping_cart").on("click", function() {
    $(this).hide();

    $(".cart").show();
    $(".cart").animate({
        'right': '0px'
    }, 400);

    setTimeout(function() {
        $(".cart").animate({
            'right': '-300px'
        }, 400);
        $(".shopping_cart").show();
    }, 75000); 
});

$(".close_cart_btn").on("click", function() {
    $(".shopping_cart").show();

    $(".cart").animate({
        'right': '-300px'
    }, 400);
});

// thumbnails.carousel.js jQuery plugin
;(function(window, $, undefined) {

    var conf = {
        center: true,
        backgroundControl: false
    };

    var cache = {
        $carouselContainer: $('.thumbnails-carousel').parent(),
        $thumbnailsLi: $('.thumbnails-carousel li'),
        $controls: $('.thumbnails-carousel').parent().find('.carousel-control')
    };

    function init() {
        cache.$carouselContainer.find('ol.carousel-indicators').addClass('indicators-fix');
        cache.$thumbnailsLi.first().addClass('active-thumbnail');

        if(!conf.backgroundControl) {
            cache.$carouselContainer.find('.carousel-control').addClass('controls-background-reset');
        }
        else {
            cache.$controls.height(cache.$carouselContainer.find('.carousel-inner').height());
        }

        if(conf.center) {
            cache.$thumbnailsLi.wrapAll("<div class='center clearfix'></div>");
        }
    }

    function refreshOpacities(domEl) {
        cache.$thumbnailsLi.removeClass('active-thumbnail');
        cache.$thumbnailsLi.eq($(domEl).index()).addClass('active-thumbnail');
    }   

    function bindUiActions() {
        cache.$carouselContainer.on('slide.bs.carousel', function(e) {
            refreshOpacities(e.relatedTarget);
        });

        cache.$thumbnailsLi.click(function(){
            cache.$carouselContainer.carousel($(this).index());
        });
    }

    $.fn.thumbnailsCarousel = function(options) {
        conf = $.extend(conf, options);

        init();
        bindUiActions();

        return this;
    }

})(window, jQuery);

$('.thumbnails-carousel').thumbnailsCarousel();



$( ".login_button" ).click(function() {
  $( ".login" ).toggle();
});

$(function() {
  var output = document.querySelectorAll('output')[0];
  
  $(document).on('input', 'input[type="range"]', function(e) {
        output.innerHTML = parseInt(e.currentTarget.value);
    if (output.innerHTML == "27") {
      $("#signup_btn").show();
    } else {
      $("#signup_btn").hide();
    }
  });
  
  $('input[type=range]').rangeslider({
    polyfill: false
  });
});
});

//Setting for countersUp

$(document).ready(function() {
    // jQuery Smooth Scroll
    $('.page-scroll').on('click', function(event) {
        var $anchor = $(this),
            headerH = '55';
        $('html , body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px",
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    // Counter JS
    $('.our-stats-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function() {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 3500,
                    decimals: 1,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).off('inview');
        }
    });
});


//Setting for Arrow
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
