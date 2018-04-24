$(document).ready(function(){

  $('header-mobilebutton').on('click', function(){
    $('header-mobilemenu').addClass('isOpen')
  });

  $('header-cross').on('click', function(){
    $('header-mobilemenu').addClass('isOpen')
  });

  $('window').on('scroll', function(){
        if ((window scroll(Y) > 500) && $header hasClass('isClosed')) {
      $header .addClass('isClosed')
    } else if ((window scroll(Y) <= 500) && $header hasClass('isClosed')){
      $header .removeClass('isClosed')
    }
  });
});
