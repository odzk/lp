jQuery.noConflict();

jQuery(function($){

    // bodyの画像数を取得
    var imgNum = imagesLoaded('body').images.length;

    // 読み込んだ画像の数を格納
    var loadedImg = 0;

    // 現在のプログレス値を格納
    var progressNowPosition = 0;

    // 1秒間に50回、progressMonitor()を実行する
    Timer = setInterval(progressMonitor, 1000/50);

    // 画像を読み込んだらloadedImgを加算する
    imagesLoaded('body').on('progress', function(){
        loadedImg++;
    });

    // 画像の読み込み状況をチェックし、更新する関数
    function progressMonitor(){

　　// 読み込んだ画像のパーセンテージ
　　var progressPosition = (loadedImg/imgNum) * 100;

　　// プログレス値を現在値と目標値からイージングする
　　progressNowPosition += (progressPosition-progressNowPosition) * 0.1;

    // プログレスバーの横幅を指定する
　　$('.load_wait .middle').css('width', progressNowPosition+'%');

    // 読み込んだ画像のパーセンテージ数値を表示する
　　$('#progressTxt').text(Math.floor(progressNowPosition)+'%');

　　// 読み込みが完了した場合の処理
　　if(progressNowPosition >= 100){
        clearInterval(Timer);
        $('.load_wait .middle').fadeOut();
        $('.load_wait .text').fadeOut();
        $('.load_wait .top').addClass('hidden');
        setTimeout(function(){
            jQuery('.load_wait').addClass('hidden');
        }, 1000);
　　}

　　// イージング計算を完了させる
　　if(progressNowPosition > 99.9){
　　　progressNowPosition = 100;
　　}

　}

});

//View
function view(num) {
    num = num;
    jQuery(function($){
        $('.view.line'+num).toggleClass('open');
    });
}
//Tab
function changeTab(num) {
    num = num;
    jQuery(function($){
        $('.change_tab div').removeClass('active');
        $('.tab_target .box').removeClass('active');
        $('.change_tab .tab'+num).addClass('active');
        $('.tab_target .tab_box'+num).addClass('active');
    });
}

//View Mobile Menu
function viewMenu() {
    jQuery(function($){
        $('.menu-trigger').toggleClass('active');
        $('#site_navigation').toggleClass('view_menu');
    });
}

//SLICK
  jQuery(function() {jQuery('.coach-slider').slick({
    dots: true,
    accessibility: true,
    arrows: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    slidesToShow: 5
  });});
  jQuery(function() {jQuery('.flow-slider').slick({
    dots: true,
    accessibility: true,
    arrows: true,
    infinite: false,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    slidesToShow: 1
  });});

//Smooth Scroll
jQuery(function($){
  $('a[href^=#]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

//SCROLL FADE IN DOWN
  jQuery(window).scroll(function(){
    var windowHeight = jQuery(window).height(),
    topWindow = jQuery(window).scrollTop();

    jQuery('.animation').each(function(){
      var targetPosition = jQuery(this).offset().top;
      if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        if(topWindow > targetPosition - windowHeight + 200){
          jQuery(this).addClass("fadeInDown");
        }
      } else {
        if(topWindow > targetPosition - windowHeight + 400){
          jQuery(this).addClass("fadeInDown");
        }
      }
    });
    jQuery('.animation__blur').each(function(){
      var targetPosition = jQuery(this).offset().top;
      if(navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
        if(topWindow > targetPosition - windowHeight + 200){
          jQuery(this).addClass("blur");
        }
      } else {
        if(topWindow > targetPosition - windowHeight + 400){
          jQuery(this).addClass("blur");
        }
      }
    });
});

//NAV ANIMTION
jQuery(function ($) {
  var $body = $('body'),
      $navTypeA = $('.check__point'),
      navTypeAOffsetTop = $navTypeA.offset().top;

  $(window).on('scroll', function () {
    if(($(this).scrollTop() - navTypeAOffsetTop) > 0) {
      $('#site_navigation').addClass('fixed');
    } else {
      $('#site_navigation').removeClass('fixed');
    }
  });
});



jQuery(document).on('ready', function() {
    jQuery('.coach-slider .item .detail p').perfectScrollbar();
});
