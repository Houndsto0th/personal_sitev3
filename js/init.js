$(document).ready(function(){
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
});

$('.btn-ink').on('click', function () {
  $(this).toggleClass('play');
  $(this).toggleClass('x');
});

$('.social').on('click', function () {
  $(this).toggleClass('octicon-mark-github');
  $(this).toggleClass('octicon-ruby')
});
