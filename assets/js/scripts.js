/***************** Waypoints ******************/

$(document).ready(function () {

    $('.wp1').waypoint(function () {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
            offset: '75%'
        });
    $('.wp2').waypoint(function () {
        $('.wp2').addClass('animated fadeInUp');
    }, {
            offset: '75%'
        });
    $('.wp3').waypoint(function () {
        $('.wp3').addClass('animated fadeInDown');
    }, {
            offset: '55%'
        });
    $('.wp4').waypoint(function () {
        $('.wp4').addClass('animated fadeInDown');
    }, {
            offset: '75%'
        });
    $('.wp5').waypoint(function () {
        $('.wp5').addClass('animated fadeInUp');
    }, {
            offset: '75%'
        });
    $('.wp6').waypoint(function () {
        $('.wp6').addClass('animated fadeInDown');
    }, {
            offset: '75%'
        });

});

/***************** Navigation ******************/

/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {

    'use strict';

    // class helper functions from bonzo https://github.com/ded/bonzo

    function classReg(className) {
        return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
    }

    // classList support for class management
    // altho to be fair, the api sucks because it won't accept multiple classes at once
    var hasClass, addClass, removeClass;

    if ('classList' in document.documentElement) {
        hasClass = function (elem, c) {
            return elem.classList.contains(c);
        };
        addClass = function (elem, c) {
            elem.classList.add(c);
        };
        removeClass = function (elem, c) {
            elem.classList.remove(c);
        };
    }
    else {
        hasClass = function (elem, c) {
            return classReg(c).test(elem.className);
        };
        addClass = function (elem, c) {
            if (!hasClass(elem, c)) {
                elem.className = elem.className + ' ' + c;
            }
        };
        removeClass = function (elem, c) {
            elem.className = elem.className.replace(classReg(c), ' ');
        };
    }

    function toggleClass(elem, c) {
        var fn = hasClass(elem, c) ? removeClass : addClass;
        fn(elem, c);
    }

    var classie = {
        // full names
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass,
        toggleClass: toggleClass,
        // short names
        has: hasClass,
        add: addClass,
        remove: removeClass,
        toggle: toggleClass
    };

    // transport
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(classie);
    } else {
        // browser global
        window.classie = classie;
    }

})(window);

/**
 * menu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function () {

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    // from http://stackoverflow.com/a/11381730/989439
    function mobilecheck() {
        var check = false;
        (function (a) { if (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    }

    var docElem = window.document.documentElement,
        // support transitions
        support = Modernizr.csstransitions,
        // transition end event name
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        docscroll = 0,
        // click event (if mobile use touchstart)
        clickevent = mobilecheck() ? 'touchstart' : 'click';

    function init() {
        var showMenu = document.getElementById('nav-toggle'),
            perspectiveWrapper = document.getElementById('perspective'),
            container = perspectiveWrapper.querySelector('.nav-container'),
            contentWrapper = container.querySelector('.nav-wrapper');

        showMenu.addEventListener(clickevent, function (ev) {
            ev.stopPropagation();
            ev.preventDefault();
            docscroll = scrollY();
            // change top of contentWrapper
            contentWrapper.style.top = docscroll * -1 + 'px';
            // mac chrome issue:
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            // add modalview class
            classie.add(perspectiveWrapper, 'modalview');
            // animate..
            setTimeout(function () { classie.add(perspectiveWrapper, 'animate'); }, 25);
        });

        container.addEventListener(clickevent, function (ev) {
            if (classie.has(perspectiveWrapper, 'animate')) {
                var onEndTransFn = function (ev) {
                    if (support && (ev.target.className !== 'nav-container' || ev.propertyName.indexOf('transform') == -1)) return;
                    this.removeEventListener(transEndEventName, onEndTransFn);
                    classie.remove(perspectiveWrapper, 'modalview');
                    // mac chrome issue:
                    document.body.scrollTop = document.documentElement.scrollTop = docscroll;
                    // change top of contentWrapper
                    contentWrapper.style.top = '0px';
                };
                if (support) {
                    perspectiveWrapper.addEventListener(transEndEventName, onEndTransFn);
                }
                else {
                    onEndTransFn.call();
                }
                classie.remove(perspectiveWrapper, 'animate');
            }
        });

        perspectiveWrapper.addEventListener(clickevent, function (ev) { return false; });
    }

    init();

})();

/***************** Homepage-only "Build it _____" loading bar  ******************/

if ($('.cd-intro')) {
    $(document).ready(function ($) {
        //set animation timing
        var headline = $('.cd-headline'),
            barAnimationDelay = 3800,
            barWaiting = barAnimationDelay - 3000; //3000 is the duration of the transition on the loading bar - set in the scss/css file
    
        function takeNext($word) {
            return (!$word.is(':last-child')) ? $word.next() : $word.parent().children().eq(0);
        }

        function switchWord($oldWord, $newWord) {
            $oldWord.removeClass('is-visible').addClass('is-hidden');
            $newWord.removeClass('is-hidden').addClass('is-visible');
        }

        function hideWord($word) {
            var nextWord = takeNext($word);
            $word.parents('.cd-words-wrapper').removeClass('is-loading');
            switchWord($word, nextWord);
            setTimeout(function () { hideWord(nextWord) }, barAnimationDelay);
            setTimeout(function () { $word.parents('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
        }
    
        //trigger animation
        setTimeout(function () { headline.find('.cd-words-wrapper').addClass('is-loading') }, barWaiting);
        setTimeout(function () { hideWord(headline.find('.is-visible').eq(0)) }, barAnimationDelay);
    });
}

/***************** Work With Us Page  ******************/

if ($('.work-with-us-form')) {
    $(document).ready(function () {
        $("#url").prop("disabled", true);
        $(".form-label#url-label").css("color", "#ababab");
        $("#new-product").click(function () {
            $("#url").prop("disabled", true);
            $(".form-label#url-label").css("color", "#ababab");
        });
        $("#redesign").click(function () {
            $("#url").prop("disabled", false);
            $(".form-label#url-label").css("color", "#333");
        });
        $("span.input-file").click(function () {
            $(this).parent().find("input:file").trigger("click");
        });
        $(".respond input:file").change(function () {
            $(".input-file:after").css("display", "none");
            $(".respond .input-file").html($(this).val()).css("color", "#33c5f2").addClass("blue-phone");
        });
        if ($(window).width() < 767) {
        }
    });

    function sendWorkWithUsEmail() {
        $.ajax({
            type: "POST",
            url: "https://api.sendgrid.com/api/mail.send.json",
            data: {
                api_user : "azure_b4edc61f555abf403fdf2228dea11679@azure.com",
                api_key: "Infinit1",
                to: "max@agia.io",
                subject: "New 'Work With Us' submission!",
                text: "New user submitted a work with us form. Here's the info:",
                from: "noreply@agia.io"
            },
            success: "",
            dataType: "json"
        });
    }
}

/***************** Our Projects Page  ******************/

if ($('.projects-wrapper')) {
    $(document).ready(function () {
        $(".projects ul li.li-first a").hover(
            function () {
                $("#phone1").css({ opacity: 100 }, 2000);
            }, function () {
                $("#phone1").css({ opacity: 0 }, 2000);
            }
            );
        $(".projects ul li.li-second a").hover(
            function () {
                $("#phone2").css({ opacity: 100 }, 2000);
            }, function () {
                $("#phone2").css({ opacity: 0 }, 2000);
            }
            );
        $(".projects ul li.li-third a").hover(
            function () {
                $("#phone3").css({ opacity: 100 }, 2000);
            }, function () {
                $("#phone3").css({ opacity: 0 }, 2000);
            }
            );
        $(".projects ul li.li-fourth a").hover(
            function () {
                $("#phone4").css({ opacity: 100 }, 2000);
            }, function () {
                $("#phone4").css({ opacity: 0 }, 2000);
            }
            );
        $(".projects ul li.li-fifth a").hover(
            function () {
                $("#phone5").css({ opacity: 100 }, 2000);
            }, function () {
                $("#phone5").css({ opacity: 0 }, 2000);
            }
            );
    });
}

/***************** Smooth Scrolling ******************/

$(function () {
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 2000);
                return false;
            }
        }
    });
});

/***************** Overlays ******************/

$(document).ready(function () {
    if (Modernizr.touch) {
        // show the close overlay button
        $(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        $(".img").click(function (e) {
            if (!$(this).hasClass("hover")) {
                $(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        $(".close-overlay").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(this).closest(".img").hasClass("hover")) {
                $(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        $(".img").mouseenter(function () {
            $(this).addClass("hover");
        })
        // handle the mouseleave functionality
            .mouseleave(function () {
                $(this).removeClass("hover");
            });
    }
});

/***************** Flexsliders ******************/

$(window).load(function () {

    $('#portfolioSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: false,
        pauseOnHover: true,
        start: function () {
            $.waypoints('refresh');
        }
    });

    $('#servicesSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function () {
            $.waypoints('refresh');
        }
    });

    $('#teamSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,
        start: function () {
            $.waypoints('refresh');
        }
    });

});