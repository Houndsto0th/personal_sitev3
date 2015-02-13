jQuery.fn.center = function(parent) {
    $(this).addClass('centered');

    this.css({
        "position": "absolute",
        "top": ((($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px"),
        "left": ((($(window).width() - this.outerWidth()) / 2) + $(window).scrollLeft() + "px"),
    });
return this;
}

jQuery.fn.origin = function (parent) {
  $(this).removeClass('centered');

  this.css({
    "position": "static",
    "top": "auto",
    "left": "auto",
  });
return this;
}


$(document).ready(function(){
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
});

$('.btn-ink').hover(function () {
  $(this).toggleClass('menu');
  $(this).toggleClass('plus');

});

$('.btn-ink').on('click', function () {
  $(this).toggleClass('modalactive');
  if ($(this).hasClass('centered')) {
    $(this).origin();
  } else {
    $(this).center();
  };
  $(this).siblings().toggleClass('hidden');
  $(this).find('span').toggle();

});

$('.social').on('click', function () {
  $(this).toggleClass('octicon-mark-github');
  $(this).toggleClass('octicon-ruby')
});
