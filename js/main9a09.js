$(document).ready(function () {
  $('.numbers').text(Math.floor(Math.random() * (110 - 90)) + 90);
  
  var nextBtn = $('.btn-next');
  var currentStep = 1;
  var isMobile = /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent);
  var isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  var isAndroid = /Android/i.test(navigator.userAgent);
  if(isMobile) {
    $('body').addClass('isMobile');
  }
  if(isIOS) {
    $('body').addClass('iOs');
  }
  else if(isAndroid) {
    $('body').addClass('isAndroid');
  }
  function show_next(n) {
    $('#step' + currentStep).hide();
    var prevStep = currentStep;
    currentStep += n;
    $('#step' + currentStep).css("display", "flex").hide().fadeIn(500);
    $('body').removeClass('active-step-' + prevStep).addClass('active-step-' + currentStep);
    if(!$('body').hasClass('style_alt_final')) {
      if(currentStep == 6) {
        setTimeout(function(){
          $('.spinner-wrap').addClass('spinner-animate');
          setTimeout(function(){
            $('.final-step').addClass('finish-load');
          }
                      , 2600);
        }
                    , 400);
      }
    }
    else {
      if(currentStep == 2) {
        $('.preload-icon').addClass('preloaded');
      }
      if(currentStep == 6) {
        setTimeout(function(){
          $('.slots').addClass('spinning');
          setTimeout(function(){
            $('.final-step').removeClass('waiting-state');
          }
                      , 3500);
        }
                    , 300);
      }
    }
  };
  show_next(0);
  nextBtn.on('click', function(e) {
    e.preventDefault();
    show_next(1);
    // Set Preload Image
    var nextPreload = currentStep + 1;
    $('.preload-img'+ currentStep).next().addClass('preload-img'+ nextPreload);
  }
             );
  // Info window height
  contentHeight();
}
                  );
function contentHeight() {
  var windowHeight = $(window).innerHeight();
  $('body').attr('data-window-height', windowHeight);
}
$(window).on('resize', function(){
  contentHeight();
}
             );
