//open menu
$(function() {
    $('.header__menu-btn').click(function() {
        $('.header__nav').slideToggle();
    });
});
//close menu by button
$(function() {
    $('.nav_btn').click(function() {
        $('.header__nav').slideToggle(1);
    });
});
//close menu by clink to other place
$(document).mouseup(function(e) {
    var container = $(".header__nav");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});
//for product menu1
$(function() {
    $('.options__button1').click(function() {
        $('.nav__option-color').slideToggle();
    });
});

$(document).mouseup(function(e) {
    var container = $(".nav__option-color");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});
//for product menu2
$(function() {
    $('.options__button2').click(function() {
        $('.nav__option-size').slideToggle();
    });
});

$(document).mouseup(function(e) {
    var container = $(".nav__option-size");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});
//for product menu3
$(function() {
    $('.options__button3').click(function() {
        $('.nav__option-quant').slideToggle();
    });
});

$(document).mouseup(function(e) {
    var container = $(".nav__option-quant");
    if (container.has(e.target).length === 0) {
        container.hide();
    }
});