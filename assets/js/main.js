
// ==========preloader js area=========//
$(window).on("load", function(){
  $(".preloader-container").fadeOut();
});
// ==========preloader js area=========//
$(window).on('scroll', function() {
  if($(this).scrollTop() > 25){
      $('.header').addClass('sticky');
  } else{
      $('.header').removeClass('sticky');
  }
});
$(window).on('scroll', function() {
  if($(this).scrollTop() > 25){
      $('.slicknav_nav').addClass('sticky');
  } else{
      $('.slicknav_nav').removeClass('sticky');
  }
});
$(window).on('scroll', function() {
  if($(this).scrollTop() > 25){
      $('.slicknav_btn').addClass('sticky');
  } else{
      $('.slicknav_btn').removeClass('sticky');
  }
});

$('.homepage-slider').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  fade: true,
  autoplay: true,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.featured-slider').slick({
  infinite: true,
  slidesToShow: 3,
  arrows: true,
  prevArrow: '<i class="bx bx-left-arrow-alt left"></i>',
  nextArrow: '<i class="bx bx-right-arrow-alt right"></i>',
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// quickview alider====

$('#exampleModalCenter').on('shown.bs.modal', function () {
  $('.zoom-img-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    infinite: true,
    asNavFor: '.zoom-img-nav',
  }); 
});

// quickview alider====

$('#exampleModalCenter').on('shown.bs.modal', function () {
  $('.zoom-img-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.zoom-img-slider',
    dots: false,
    centerMode: true,
    arrows: true,
    prevArrow: '<i class="bx bx-left-arrow-alt"></i>',
    nextArrow: '<i class="bx bx-right-arrow-alt"></i>',
    focusOnSelect: true,
  });
});

// quickview slider====

// wow js===

new WOW().init();

// wow js====

// back to top area=====

$(window).scroll(function(){
  if($(this).scrollTop() > 150) {
    $('#scroll').addClass('scroll-show');
  }else{
    $('#scroll').removeClass('scroll-show');
  }
});

$('#scroll').click(function(){
  $('html, body').animate({
    scrollTop: 0
  }, 1000)
});

// back to top area ======

// detail slider====

  $('.zoom-img-sliders').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: true,
    asNavFor: '.zoom-img-navs',
  }); 

// detail slider====

  $('.zoom-img-navs').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.zoom-img-sliders',
    dots: false,
    arrows: true,
    prevArrow: '<i class="bx bx-left-arrow-alt"></i>',
    nextArrow: '<i class="bx bx-right-arrow-alt"></i>',
    focusOnSelect: true,
  });

// detail slider====

// ======product-slider======
$('.product-wrap-slider').slick({
  infinite: true,
  arrows: true,
  prevArrow: '<i class="bx bx-left-arrow-alt"></i>',
  nextArrow: '<i class="bx bx-right-arrow-alt"></i>',
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ],
});


// ===========triggger menu js area===========
$(function(){
  $('#menu2').slicknav({
    label: 'Categories',
  });
});
// ===========triggger menu js area===========

// let dropDown = document.querySelector(".drop-down");
// let subMenu = document.querySelector(".submenu");

// dropDown.addEventListener("click", () => {
//   if(subMenu.style.display === "none"){
//     subMenu.style.display = "none";
//   } else{
//     subMenu.style.display = "block";
//   }
// });

let toggle = document.querySelector(".toggle");
let navBar = document.querySelector(".nav-bar");


toggle.addEventListener("click", () => {
  if(navBar.style.display === "block"){
    navBar.style.display = "none";
  } else{
  navBar.style.display = "block";
}
});

$('.drop-down').click(function(e) {
  e.preventDefault();
  $('ul').removeClass('active');
  $('ul').addClass('active');
});





