$('document').ready(function(){

  $('.layer_covers').mouseenter(function() {
    $(this).removeClass("layer_covers_shrink");
    $('.rs').addClass('showup');
    $('.song1').removeClass("covers_show");
    $('.song2').removeClass("covers_show");
    $('.song3').removeClass("covers_show");
    $('.song4').removeClass("covers_show");
    $('.song5').removeClass("covers_show");
    $('.song6').removeClass("covers_show");
    $('.song7').removeClass("covers_show");
    $('.song8').removeClass("covers_show");
    $('.song9').removeClass("covers_show");
    $('.song10').removeClass("covers_show");
    $('.main_text').removeClass("gbc");
  });

  $('.main_text').mouseenter(function() {
    $(this).toggleClass("intro_expand");
  });

  $('.song1').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r1");
  });

  $('.song1').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r1");
  });

  $('.song2').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r2");
  });
  $('.song2').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r2");
  });

  $('.song3').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r3");
  });
  $('.song3').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r3");
  });

  $('.song4').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r4");
  });
  $('.song4').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r4");
  });

  $('.song5').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r5");
  });
  $('.song5').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r5");
  });

  $('.song6').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r6");
  });
  $('.song6').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r6");
  });

  $('.song7').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r7");
  });
  $('.song7').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r7");
  });

  $('.song8').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r8");
  });
  $('.song8').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r8");
  });

  $('.song9').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r9");
  });
  $('.song9').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r9");
  });

  $('.song10').mouseenter(function() {
    $(this).toggleClass("covers_expand");
    $('.main_text').toggleClass("r10");
  });
  $('.song10').mouseleave(function() {
    $(this).removeClass("covers_expand");
    $('.main_text').removeClass("r10");
  });

  $('.song1').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song1_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song2').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song2_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song3').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song3_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song4').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song4_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song5').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song5_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song6').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song6_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song7').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song7_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song8').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song8_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song9').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song9_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });

  $('.song10').click(function() {
    $(this).removeClass("covers_expand");
    $(this).addClass("covers_show");
    $('.layer_covers').toggleClass("layer_covers_shrink");
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
    $('.song10_video')[0].src += "&autoplay=1";
    $('.main_text').addClass("gbc");
  });



});
