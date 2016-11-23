$('document').ready(function(){

  $('.layer_covers').mouseenter(function() {
    $(this).toggleClass("layer_covers_expand");
    $('.layer_video1').toggleClass("slideout")
      .one('transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd',
      function (e) {
       '.layer_video1'.removeClass('reveal');
   });
  });

  $('.layer_covers').mouseleave(function() {
    $(this).removeClass("layer_covers_expand")
  });

  $('.song1').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song1').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song2').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song2').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song3').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song3').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song4').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song4').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song5').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song5').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song6').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song6').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song7').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song7').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song8').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song8').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song9').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song9').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });

  $('.song10').mouseenter(function() {
    $(this).toggleClass("covers_expand")
  });
  $('.song10').mouseleave(function() {
    $(this).removeClass("covers_expand")
  });



  $('.song1').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video1').addClass("reveal");
  });

});
