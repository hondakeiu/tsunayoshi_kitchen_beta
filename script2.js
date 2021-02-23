$(function(){

  //スライダー
  $('.index-btn').click(function() {
      $('.active').removeClass('active');
      var clickedIndex = $('.index-btn').index($(this));
      $('.slide').eq(clickedIndex).addClass('active');
    });

  //スクロール
  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop': 0
    }, 500);
  });
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop': position
    }, 500);
  });

  //アコーディオン3
    $(".kakure").css("display", "none");
    $(".mieru").click(function() {
      $(".mieru").not(this).removeClass("open");
      $(".mieru").not(this).next().slideUp(200);
      $(this).toggleClass("open");
      $(this).next().slideToggle(200);
    });

    //アコーディオン4
    $(".kakuree").css("display", "none");
    $(".mieruu").click(function() {
      $(".mieruu").not(this).removeClass("open");
      $(".mieruu").not(this).next().slideUp(300);
      $(this).toggleClass("open");
      $(this).next().slideToggle(300);
    });

  });
