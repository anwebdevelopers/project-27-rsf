$(function() {

    var $header = $('.header'),
        $header__nav = $('.header__nav'),
        $header__slider = $('.header__slider'),
        $registration = $('.registration'),
        $about = $('.about'),
        $about__slider = $('.about__slider'),
        $participants = $('.participants'),
        $participants__slider = $('.participants__slider'),
        $result = $('.result'),
        $reviews = $('.reviews'),
        $reviews__slider = $('.reviews__slider'),
        $formats = $('.formats'),
        $leading = $('.leading'),
        $questions = $('.questions'),
        $programm__box = $('.programm__box'),
        $speakers__box = $('.speakers__box'),
        $speakers__item = $('.speakers__item');

    //Меню
    $('.header__nav-btn').click(function() {
        var $this = $(this);
        if ($this.hasClass('active') == false) {
            $this.addClass('active');
            $header__nav.fadeIn(500);
        } else {
            $this.removeClass('active');
            $header__nav.fadeOut(500);
        }
    });
    $('.header__nav a').click(function() {
        $('.header__nav-btn').removeClass('active');
        $header__nav.fadeOut(500);
    });


    //Адаптивный слайдер в шапке
    $header__slider.owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 1200,
        autoplay: true
    });

    //Parallax
    $(window).scroll(function() {
        var st = $(this).scrollTop(),
            wh = $(window).height();

        //Отключение автоплея в шапке
        if (st > $header.offset().top - wh && st < ($header.offset().top) + $header.height()) {
            $header__slider.trigger('play.owl.autoplay', [100, 5000]);
        } else {
            $header__slider.trigger('stop.owl.autoplay', [100]);
        }

        //блок регистрации
        if (st > $registration.offset().top - wh && st < ($registration.offset().top) + $registration.height()) {
            $registration.css({
                'background-position': 'center ' + (st / 20) + '%'
            });
        }

        //Отключение автоплея в блоке о форуме
        if (st > $about.offset().top - wh && st < ($about.offset().top) + $about.height()) {
            $about__slider.trigger('play.owl.autoplay', [100, 10000]);
        } else {
            $about__slider.trigger('stop.owl.autoplay', [100]);
        }

        //Отключение автоплея в блоке о участников
        if (st > $participants.offset().top - wh && st < ($participants.offset().top) + $participants.height()) {
            $participants__slider.trigger('play.owl.autoplay', [100, 3000]);
        } else {
            $participants__slider.trigger('stop.owl.autoplay', [100]);
        }

        //блок участия
        if (st > $result.offset().top - wh && st < ($result.offset().top) + $result.height()) {
            if (!$speakers__box.hasClass('close')) {
                var sbh = $speakers__box.height();
                $result.css({
                    'background': 'url(img/parallax1.png) 20% ' + (180 - ((st - sbh) / 28)) + '% / 44px 45px no-repeat,'
                    + ' url(img/parallax2.png) 10% ' + (-100 + ((st - sbh) / 20)) + '% / 61px 61px no-repeat,'
                    + ' url(img/parallax1.png) 36% ' + (-190 + ((st - sbh) / 13)) + '% / 80px 80px no-repeat,'
                    + ' url(img/parallax2.png) 66% ' + (-100 + ((st - sbh) / 26)) + '% / 74px 74px no-repeat,'
                    + ' url(img/parallax2.png) 52% ' + (160 - ((st - sbh) / 28)) + '% / 35px 35px no-repeat,'
                    + ' url(img/parallax1.png) 80% ' + (-260 + ((st - sbh) / 10)) + '% / 26px 26px no-repeat,'
                    + ' url(img/bg-result.png) center 0 / 840px 650px no-repeat'
                });
            } else {
                $result.css({
                    'background': 'url(img/parallax1.png) 20% ' + (180 - (st / 28)) + '% / 44px 45px no-repeat,'
                    + ' url(img/parallax2.png) 10% ' + (-100 + (st / 20)) + '% / 61px 61px no-repeat,'
                    + ' url(img/parallax1.png) 36% ' + (-190 + (st / 13)) + '% / 80px 80px no-repeat,'
                    + ' url(img/parallax2.png) 66% ' + (-100 + (st / 26)) + '% / 74px 74px no-repeat,'
                    + ' url(img/parallax2.png) 52% ' + (160 - (st / 28)) + '% / 35px 35px no-repeat,'
                    + ' url(img/parallax1.png) 80% ' + (-260 + (st / 10)) + '% / 26px 26px no-repeat,'
                    + ' url(img/bg-result.png) center 0 / 840px 650px no-repeat'
                });
            }
        }

        //Отключение автоплея в блоке о участников
        if (st > $reviews.offset().top - wh && st < ($reviews.offset().top) + $reviews.height()) {
            $reviews__slider.trigger('play.owl.autoplay', [100, 10000]);
        } else {
            $reviews__slider.trigger('stop.owl.autoplay', [100]);
        }

        //блок форматов
        if (st > $formats.offset().top - wh && st < ($formats.offset().top) + $formats.height()) {
            if (!$speakers__box.hasClass('close')) {
                var sbh = $speakers__box.height();
                $formats.css({
                    'background': 'url(img/parallax0.png) 20% ' + (180 - ((st - sbh) / 56)) + '% / 132px 135px no-repeat,'
                    + ' url(img/parallax1.png) 10% ' + (-100 + ((st - sbh) / 40)) + '% / 61px 61px no-repeat,'
                    + ' url(img/parallax1.png) 36% ' + (-190 + ((st - sbh) / 26)) + '% / 80px 80px no-repeat,'
                    + ' url(img/parallax0.png) 66% ' + (-100 + ((st - sbh) / 52)) + '% / 74px 74px no-repeat,'
                    + ' url(img/parallax1.png) 52% ' + (160 - ((st - sbh) / 56)) + '% / 35px 35px no-repeat,'
                    + ' url(img/parallax0.png) 80% ' + (-260 + ((st - sbh) / 20)) + '% / 26px 26px no-repeat,'
                    + ' url(img/bg-formats.jpg) center ' + (-(st - sbh) / 4) + '% / 1946px 1196px repeat-y'
                });
            } else if (!$programm__box.hasClass('close')) {
                var pbh = $programm__box.height();
                $formats.css({
                    'background': 'url(img/parallax0.png) 20% ' + (180 - ((st - pbh) / 56)) + '% / 132px 135px no-repeat,'
                    + ' url(img/parallax1.png) 10% ' + (-100 + ((st - pbh) / 40)) + '% / 61px 61px no-repeat,'
                    + ' url(img/parallax1.png) 36% ' + (-190 + ((st - pbh) / 26)) + '% / 80px 80px no-repeat,'
                    + ' url(img/parallax0.png) 66% ' + (-100 + ((st - pbh) / 52)) + '% / 74px 74px no-repeat,'
                    + ' url(img/parallax1.png) 52% ' + (160 - ((st - pbh) / 56)) + '% / 35px 35px no-repeat,'
                    + ' url(img/parallax0.png) 80% ' + (-260 + ((st - pbh) / 20)) + '% / 26px 26px no-repeat,'
                    + ' url(img/bg-formats.jpg) center ' + (-(st - pbh) / 4) + '% / 1946px 1196px repeat-y'
                });
            } else if ((!$programm__box.hasClass('close')) && (!$speakers__box.hasClass('close'))) {
                var sbh = $speakers__box.height();
                var pbh = $programm__box.height();
                $formats.css({
                    'background': 'url(img/parallax0.png) 20% ' + (180 - ((st - sbh - pbh) / 56)) + '% / 132px 135px no-repeat,'
                    + ' url(img/parallax1.png) 10% ' + (-100 + ((st - sbh - pbh) / 40)) + '% / 61px 61px no-repeat,'
                    + ' url(img/parallax1.png) 36% ' + (-190 + ((st - sbh - pbh) / 26)) + '% / 80px 80px no-repeat,'
                    + ' url(img/parallax0.png) 66% ' + (-100 + ((st - sbh - pbh) / 52)) + '% / 74px 74px no-repeat,'
                    + ' url(img/parallax1.png) 52% ' + (160 - ((st - sbh - pbh) / 56)) + '% / 35px 35px no-repeat,'
                    + ' url(img/parallax0.png) 80% ' + (-260 + ((st - sbh - pbh) / 20)) + '% / 26px 26px no-repeat,'
                    + ' url(img/bg-formats.jpg) center ' + (-(st - sbh - pbh) / 4) + '% / 1946px 1196px repeat-y'
                });
            } else {
                $formats.css({
                    'background': 'url(img/parallax0.png) 20% ' + (180 - (st / 56)) + '% / 132px 135px no-repeat,'
                    + ' url(img/parallax1.png) 10% ' + (-100 + (st / 40)) + '% / 61px 61px no-repeat,'
                    + ' url(img/parallax1.png) 36% ' + (-190 + (st / 26)) + '% / 80px 80px no-repeat,'
                    + ' url(img/parallax0.png) 66% ' + (-100 + (st / 52)) + '% / 74px 74px no-repeat,'
                    + ' url(img/parallax1.png) 52% ' + (160 - (st / 56)) + '% / 35px 35px no-repeat,'
                    + ' url(img/parallax0.png) 80% ' + (-260 + (st / 20)) + '% / 26px 26px no-repeat,'
                    + ' url(img/bg-formats.jpg) center ' + (-st / 4) + '% / 1946px 1196px repeat-y'
                });
            }
        }

        //блок регистрации
        if (st > $leading.offset().top - wh && st < ($leading.offset().top) + $leading.height()) {
            $leading.css({
                'background-position': 'center ' + (st / 20) + '%'
            });
        }

        //блок вопросы
        if (st > $questions.offset().top - wh && st < ($questions.offset().top) + $questions.height()) {
            $questions.css({
                'background-position': 'center ' + (st / 20) + '%'
            });
        }
    });

    //Сокрытие спикеров
    (function() {
        var heightBox = $speakers__box.height();
        var heightItem = $speakers__item.height();

        $speakers__box.addClass('close').css({
            'max-height': heightItem
        });

        $(window).resize(function() {
            if($speakers__box.hasClass('close')) {
                heightItem = $speakers__item.height();
                $speakers__box.removeAttr('style');
                heightBox = $speakers__box.height();
                $speakers__box.css({
                    'max-height': heightItem
                });
            } else {
                heightItem = $speakers__item.height();
                $speakers__box.removeAttr('style');
                heightBox = $speakers__box.height();
                $speakers__box.css({
                    'max-height': heightBox
                });
            }
            return heightItem, heightBox
        });

        $('.speakers__button-show').click(function() {
            if ($speakers__box.hasClass('close')) {
                $(this).text('Скрыть всех');
                $speakers__box.animate({
                    'max-height': heightBox
                }, heightBox * 0.1 + 600).removeClass('close');
            } else {
                $(this).text('Показать всех');
                $speakers__box.animate({
                    'max-height': heightItem
                }, heightBox * 0.1 + 600).addClass('close');
                $('html, body').animate({scrollTop: $juryBox.offset().top }, heightBox * 0.1 + 600, 'swing');
            }
        });
    })();


    //popup

    $('.popup-with-move-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });



    //Подсчет итемов в слайдере о форуме и вывод на страницу
    $('.about__slider-item').each(function() {
        $(this).find('.about__slider-text-box').append('<div class="about__slider-numeral"><span class="about__slider-numeral-number">' + ($(this).index() + 1) + '</span><span class="about__slider-numeral-quantity">' + $('.about__slider-item').length + '</span></div>');
    });

    //Адаптивный слайдер о форуме
    $about__slider.owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        items: 1,
        autoplayTimeout: 10000,
        smartSpeed: 1200,
        autoHeight: true,
        autoplay: true
    });


    //Слайдер участников форума
    $participants__slider.owlCarousel({
        loop: true,
        responsiveClass: true,
        autoplayTimeout: 3000,
        autoplay: true,
        smartSpeed: 1200,
        responsive: {
            0: {
                items: 2
            },
            481: {
                items: 3
            },
            769: {
                items: 4
            },
            993: {
                items: 5
            }
        }
    });

    //Подсчет итемов в слайдере отзывов и вывод на страницу
    $('.reviews__slider-item').each(function() {
        $(this).find('.reviews__slider-text-box').append('<div class="reviews__slider-numeral"><span class="reviews__slider-numeral-number">' + ($(this).index() + 1) + '</span><span class="reviews__slider-numeral-quantity">' + $('.reviews__slider-item').length + '</span></div>');
    });

    //Адаптивный слайдер отзывов
    $reviews__slider.owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        items: 1,
        autoplayTimeout: 10000,
        autoplay: true,
        smartSpeed: 1200,
        autoHeight: true
    });


    //Сокрытие программы форума

    (function() {
        var heightProgrammBox = $programm__box.height();

        $programm__box.addClass('close').css({
            'max-height': '500px'
        });

        $('.programm__button-show').click(function() {
            if ($programm__box.hasClass('close')) {
                $(this).css({
                    '-webkit-transform': 'rotate(180deg)',
                    '-moz-transform': 'rotate(180deg)',
                    '-ms-transform': 'rotate(180deg)',
                    '-o-transform': 'rotate(180deg)',
                    'transform': 'rotate(180deg)',
                });
                $programm__box.removeAttr('style');

                heightProgrammBox = $programm__box.height();

                $programm__box.addClass('close').css({
                    'max-height': '500px'
                }).animate({
                    'max-height': heightProgrammBox
                }, 1000).removeClass('close');
            } else {
                $(this).css({
                    '-webkit-transform': 'rotate(0)',
                    '-moz-transform': 'rotate(0)',
                    '-ms-transform': 'rotate(0)',
                    '-o-transform': 'rotate(0)',
                    'transform': 'rotate(0)',
                });
                $programm__box.animate({
                    'max-height': '500px'
                }, 1000).addClass('close');
            }
        });
    })();


    //Табы программы форума
    $('.programm__tab-buttons').on('click', '.programm__tab-button-item:not(.active)', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $('.programm__tab-container').find('.programm__tab-section').removeClass('active').eq($(this).index()).addClass('active');
        $programm__box.removeAttr('style');

        $('.programm__button-show').css({
            '-webkit-transform': 'rotate(180deg)',
            '-moz-transform': 'rotate(180deg)',
            '-ms-transform': 'rotate(180deg)',
            '-o-transform': 'rotate(180deg)',
            'transform': 'rotate(180deg)',
        });

        heightProgrammBox = $programm__box.height();

        $programm__box.addClass('close').css({
            'max-height': '500px'
        }).animate({
            'max-height': heightProgrammBox
        }, 1000).removeClass('close');
    });


    //Видеоотчет
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //Яндекс карта
    ymaps.ready(function() {
        var myMap = new ymaps.Map('map', {
            center: [55.8331531, 37.4849170],
            zoom: 16,
            controls: ['zoomControl'],
            behaviors: ["drag", "dblClickZoom", "rightMouseButtonMagnifier", "multiTouch"]
        }, {
            searchControlProvider: 'yandex#search'
        });
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '',
            balloonContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/icon-map.png',
            // Размеры метки.
            iconImageSize: [52, 55],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-32, -55]
        });

        $(window).resize(function() {
            var w = $(window).width();
            if (w < 768) {
                myMap.behaviors.disable('drag');
            } else {
                myMap.behaviors.enable('drag');
            }
        });

        myMap.geoObjects.add(myPlacemark);
    });


    //Выравнивание блоков по высоте
    $(".direction__item-name").equalHeights();
    $(".direction__item-position").equalHeights();
    $(".direction__item-link").equalHeights();

    // Плавный скролл
    $('.header__nav a, .header__btn-tobottom').click(function() {
        var thisSect = $($(this).attr('href')).offset().top;
        $('html, body').animate({scrollTop: thisSect}, thisSect * 0.5);
			return false;
    });

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

    //Прелоадер
    $(document).ready(function() {
        $("#preloader__img").fadeOut(200);
        $("#preloader").fadeOut(300);
    });

});
