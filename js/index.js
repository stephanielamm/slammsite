$('.open').on('click',function(e){
  e.preventDefault();
  $(this).addClass('hidden');
  $('.close').removeClass('hidden');
  $('nav').addClass('slide');
});

$('.close').on('click',function(e){
  e.preventDefault();
  $(this).addClass('hidden');
  $('.open').removeClass('hidden');
  $('nav').removeClass('slide');
});

$("nav a").click(function() {
  
  var s = $(this).attr('href');
    $('html,body').animate({scrollTop: $(s).offset().top}, 200, "swing");
  return false;
  });