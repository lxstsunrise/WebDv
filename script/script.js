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