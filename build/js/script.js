'use strict';
$(document).ready(function(){

/*инициализируем анимацию WOW JS*/
    if (screen.width> 0 ) {
        new WOW().init();
    }
/*end*/

/*показать скрытый блок под гамбургером*/
    let $body = $("body");
    let $hamburger = $('.hamburger');
    let $overlay = $('.overlay');
    let $phone = $('.phone');

    function  window_size() {
        if ( $body.innerWidth() < 991) {
            $phone.appendTo('.navigation');
        } else {
            $phone.appendTo('.header__inner-item')
        }
    }
    $(window).on('load resize', window_size)

    function toggleMobileMenu() {
        $hamburger
        .toggleClass('is-active')
        .next()
        .toggleClass('active');
        $overlay.fadeToggle();
        $('body, html').toggleClass('no-scroll');
    }

    (function showMobileMenu() {
        $hamburger.on('click', function() {
            toggleMobileMenu();
        });
    })();

    (function HideMobileMenu() {
        $overlay.on('click', function() {
            toggleMobileMenu();
        });
    })();
/*end показать скрытый блок под гамбургером*/

/*клонируем карточки .category__card*/
    // let category_card = $('.category__card');
    // let category_card_count = 3;

    // function card_copy () {
    //     return category_card
    //     .clone() // сделаем копию элемента .category__card
    //     .appendTo('.category__inner')  // вставим этот элемент в конец .category__inner
    //     .addClass('category__card-newElement') // добавим этой копии класс newElement
    //     .find('.category__card_icon, .title_fsz-24') //найдем нужные классы внутри копии
    // }

    // for (let i = 0; i < category_card_count; i++) {
    //     if (i == 0) {
    //         card_copy()
    //         .attr("src", "img/category_repair.png") // изменим картинку
    //         .text("Ремонт");  // изменим текст
    //     }
    //     if (i == 1) {
    //         card_copy()
    //         .attr("src", "img/category_improvement.png")
    //         .text("Благоустройство"); 
    //     }
    //     if (i == 2) {
    //         card_copy()
    //         .attr("src", "img/category_projecting.png")
    //         .text("Проектирование");
    //     }
    // }
/*end клонируем карточки .category__card*/

/*клонируем слайды .projects__slider-item*/
    // let projects_item = $('.projects__slider-item');
    // let projects_item_count = 3;
    
    // // $('.projects__slider').slick('slickAdd','<div>' + projects_item_count + '</div>');

    // function projects_item_copy () {
    //     return projects_item
    //     .clone()
    //     .appendTo('.projects__slider') 
    //     .addClass('projects__item-newElement')
    //     .find('.projects__img-field_icon')
    // }

    // for (let i = 0; i <= projects_item_count; i++) {
    //     if (i == 0) {
    //         projects_item_copy()
    //         .attr("src", "img/projects_img-2.jpg")
    //     }
    //     if (i == 1) {
    //         projects_item_copy()
    //         .attr("src", "img/projects_img-3.jpg")
    //     }
    //     if (i == 2) {
    //         projects_item_copy()
    //         .attr("src", "img/projects_img-4.jpg")
    //     }
    // }
/*end клонируем слайды .projects__slider-item*/

/*клонируем картинки галереии и меняем их*/
    // let gallery_img_field = $('.gallery__img-field');
    // let gallery_img_count = 8;

    // function gallery_img_copy () {
    //     return gallery_img_field
    //     .clone()
    //     .appendTo('.gallery__images') 
    //     .addClass('gallery__images-newElement')
    //     .find('.gallery__img')
    // }

    // for (let i = 0; i <= gallery_img_count; i++) {
    //     if (i == 0) {
    //         gallery_img_copy()
    //         .attr("src", "img/gallery-img-2.jpg")
    //     }
    //     if (i == 1) {
    //         gallery_img_copy()
    //         .attr("src", "img/gallery-img-3.jpg")
    //     }
    //     if (i == 2) {
    //         gallery_img_copy()
    //         .attr("src", "img/gallery-img-4.jpg")
    //     }
    //     if (i == 3) {
    //         gallery_img_copy()
    //         .attr("src", "img/gallery-img-5.jpg")
    //     }
    //     if (i == 4) {
    //         gallery_img_copy()
    //         .attr("src", "img/gallery-img-6.jpg")
    //     }
    //     if (i == 5) {
    //         gallery_img_copy()
    //         .attr("src", "img/gallery-img-7.jpg")
    //     }
    //     if (i == 7) {
    //         gallery_img_copy()
    //         .attr("src", "img/gallery-img-8.jpg")
    //     }
    // }
/*end клонируем картинки галереии и меняем их*/

 /*работа с popup*/
    $('.gallery__img-field').magnificPopup({
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            open: function() {
                $('.gallery__slider').not('.slick-initialized').slick();
            }
        },
        midClick: true
    });
/*end работа с popup*/

/*работа со слайдерами*/
    // $('.banner__slider').slick({
    //     arrows: true,
    //     adaptiveHeight: true,
    //     slidesToShow: 1,
    //     responsive: [
    //         {
    //             breakpoint: 991,
    //             settings: {
    //                 arrows: false,
    //                 dots: true
    //             }
    //         },
    //     ],
    // });
    
    // $('.projects__slider').slick({
    //     arrows: false,
    //     infinite: true,
    //     centerMode: true,
    //     centerPadding: '75px',
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     dots: false,
    //     focusOnSelect: true,
    //     adaptiveHeight: true,
    //     responsive: [
    //         {
    //             breakpoint: 1600,
    //             settings: {
    //                 slidesToShow: 2,
    //             }
    //         },
    //         {
    //         breakpoint: 991,
    //         settings: {
    //             slidesToShow: 1, 
    //             centerMode: true,
    //         }
    //         }
    //     ],
    // });
/*end работа со слайдерами*/

});
  