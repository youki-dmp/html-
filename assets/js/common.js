/**
 * Height Adjust
------------------------------------------------*/
$(document).ready(function() {
    $('.m_height').matchHeight();
    $('.m_height2').matchHeight();
    $('.m_height3').matchHeight();
});

/**
 * To Top Scroll
------------------------------------------------*/
jQuery(function() {
  var topBtn = jQuery('#page--top');
  topBtn.hide();
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
    topBtn.click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
    });
});

/**
 * Section Fadein/out
------------------------------------------------*/
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 0){
                $(this).addClass('scrollin');
            }
        });
    });
});

/**
 * Stichey Header
------------------------------------------------*/
(function($) {
    $(function() {
        var $header = $('.l--header');
        $(window).scroll(function() {
            if ($(window).scrollTop() > 160) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
    });
})(jQuery);

/**
 *  Smooth scroll
------------------------------------------------*/
$(document).ready(function () {
$('a[href^=#]').click(function () {
 var speed = 500;
 var href = $(this).attr("href");
 var target = $(href == "#" || href == "" ? 'html' : href);
 var position = target.offset().top;
  $("html, body").animate({
   scrollTop: position
  }, speed, "swing");
 return false;
 });
});

/**
 * HUmbergur Menu
------------------------------------------------*/
jQuery(function(){
  jQuery(".burger").click(function(){
    var jQuerytarget = jQuery(".navigation").next();
    if (jQuerytarget.is(':hidden')) { jQuerytarget.slideDown(); }
    jQuery(".burger").toggleClass("burger-active");
    jQuery(".navigation").toggleClass("nav-active");
    $('.navigation a').on('click', function(){
        if (window.innerWidth <= 600) {
            $('.burger').click();
        }
    });
  });
});