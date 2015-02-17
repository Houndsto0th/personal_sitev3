$(document).ready(function(){
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
});

$('.btn-ink').hover(function () {
  $(this).toggleClass('menu');
  $(this).toggleClass('plus');

});

$('.btn-ink').on('click', function () {
  var $this = $(this);
  var $window = $(window);
  $this.toggleClass('centered');
  if ($this.hasClass('centered')) {
  $this.toggleClass('modalactive');
    $this.velocity({
        scaleX: 10,
        scaleY: 10,
        borderRadius: "0",
        top: ((($window.height() - $this.outerHeight()) / 2) + $window.scrollTop() + "px"),
        left: ((($window.width() - $this.outerWidth()) / 2) + $window.scrollLeft() + "px"),
        zIndex: 1,
        backgroundColor: '#ffffff',

      }, 50 );
  } else {

    $this.velocity("reverse");
    $this.toggleClass('modalactive');

  }
  $this.children().toggleClass('hidden');
  $this.find('span').toggle();

});

$('.social').on('click', function () {
  $(this).toggleClass('octicon-mark-github');
  $(this).toggleClass('octicon-ruby')
});
