(function($) {"use strict";$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {var target = $(this.hash);target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');if (target.length) {$('html, body').animate({scrollTop: (target.offset().top)}, 1000, "easeInOutExpo");return false}}});$('.js-scroll-trigger').click(function() {$('.navbar-collapse').collapse('hide');});$('body').scrollspy({target: '#sideNav'});$(window).scroll(function() {if ($(this).scrollTop() > 100) {$('.back').fadeIn('slow');} else {$('.back').fadeOut('slow');}});$('.back').click(function() {$('html, body').animate({scrollTop: 0}, 2000, 'easeInOutExpo');return false;});$(document).ready(function() {$('.loader').css('display', 'none');});})(jQuery); 
