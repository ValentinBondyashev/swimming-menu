$(document).ready(function() {
    var navPos, winPos, navHeight;
  
    function refreshVar() {
      navPos = $('.nav').offset().top;
      navHeight = $('.nav').outerHeight(true);
    }

    refreshVar();
    
    $(window).resize(refreshVar);

    $('<div class="clone-nav"></div>').insertBefore('.nav').css('height', navHeight).hide();
  
    $(window).scroll(function() {
      winPos = $(window).scrollTop();

      if (winPos > navPos) {
        $('.nav').addClass('fixed shadow');  
        $('.clone-nav').show();
        $('.nav li').css('line-height','54px');
      }  
      else {
        $('.nav').removeClass('fixed shadow');
        $('.clone-nav').hide();
        $('.nav li').css('line-height','64px');
      }
    });
 //var
  var $nav = $('.nav'),
      $line = $('<div>').appendTo($nav),
      $activeLi,
      lineWidth,
      liPos;
  
  function refresh() {
    $activeLi = $nav.find('li.active');
    lineWidth = $activeLi.outerWidth();
    liPos = $activeLi.position().left;    
  }
  refresh();
  
  $nav.css('position','relative');
  
  //line setup
  function lineSet() {
   $line.css({
     'position':'absolute',
     'background-color':'#ffffff',
     'bottom':'0',
     'height':'3px'
   }).animate({
     'left':liPos,
     'width':lineWidth
   }, 200);
  }
  lineSet();  
  
  //on click
  $nav.find('li').on('click', function() {
    $activeLi.removeClass('active');
    $(this).addClass('active');
    refresh();
    lineSet();
  });
});//end ready