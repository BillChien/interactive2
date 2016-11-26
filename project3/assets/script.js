$('document').ready(function(){

  $('.layer_covers').mouseenter(function() {
    $(this).toggleClass("layer_covers_expand");
    $('.rs').toggleClass('showup');
  });

  $('.layer_covers').mouseleave(function() {
    $(this).removeClass("layer_covers_expand")
    $('.rs').removeClass('showup');
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

  $('.rs').click(function() {
    $(this).removeClass('showup');
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').removeClass('showup');
    $('.logo').removeClass('fadeout');
  });

  $('.song1').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video1').addClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song2').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video2').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song3').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video3').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song4').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video4').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song5').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video5').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song6').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video6').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song7').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video7').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song8').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video8').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song9').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video9').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video10').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });

  $('.song10').click(function() {
    $(this).removeClass("covers_expand");
    $('.layer_covers').removeClass("layer_covers_expand");
    $('.layer_video').addClass('showup');
    $('.rs').removeClass('showup');
    $('.video10').addClass('reveal');
    $('.video1').removeClass('reveal');
    $('.video2').removeClass('reveal');
    $('.video3').removeClass('reveal');
    $('.video4').removeClass('reveal');
    $('.video5').removeClass('reveal');
    $('.video6').removeClass('reveal');
    $('.video7').removeClass('reveal');
    $('.video8').removeClass('reveal');
    $('.video9').removeClass('reveal');
    $('.logo').addClass('fadeout');
  });



});
