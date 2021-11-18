var Main = (function ($) {
    var pub = {
        winWidth: $(window).width(),
        winHeight: $(window).height(),
        windowResize: function () {
            this.winWidth = $(window).width();
            this.winHeight = $(window).height();
        },
        menuMobile: function (){
            $(".navbar-toggle").on("click", function (){
                $(".header__menu").slideToggle();
                $(this).toggleClass("active")
            })
        },
        productSlider: function (){
            var swiper = new Swiper(".productSlider", {
                slidesPerView: 4,
                spaceBetween: 20,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                slidesPerGroup: 1,
                breakpoints: {
                    0: {
                        slidesPerView: 'auto',
                        spaceBetween: 10,
                    },
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                },
            });
        },
        ratings: function (){
            $(".rating").on('click', function (){
                var allElements = [
                    ...$(this).siblings(),
                    $(this)[0]
                ];
                var prevElements = [
                    ...$(this).prevAll(),
                    $(this)[0]
                ];
                for (let i=0;i<allElements.length; i++){
                    $(allElements[i]).removeClass("active")
                }
                for (let i=0;i<prevElements.length; i++){
                    $(prevElements[i]).addClass("active")
                }
            })
        },
        header: function (){
            var header = $(".page__header");
            var firstHeaderScroll = $(".ad-sale") ? $(".ad-sale").outerHeight() : 0
            if ($(document).scrollTop() > firstHeaderScroll) {
                header.addClass("fixed-menu")
                $(".page__body").css("margin-top", header.outerHeight())
            }else {
                header.removeClass("fixed-menu")
                $(".page__body").css("margin-top", 0)
            }
        },
        init: function () {
            var self = this;
            self.menuMobile();
            self.productSlider();
            self.ratings();
            self.header();


            $(window).on('scroll', function() {
                self.header();
            })
            $(window).on('resize', function (e) {
                self.windowResize();
            });
        }
    };
    return pub;
})(jQuery);
