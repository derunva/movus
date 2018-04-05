console.log('it`s alive');
var menuOpener = document.getElementsByClassName('menu__opener');
console.log(menuOpener[0])
console.log($('.menu__opener'))
$('.menu__opener').click(function(){
  $(this).find('.icon-list').toggleClass('icon-list_opened');
  $('.menu').toggleClass('active');
})
var hammertime = new Hammer(document);
hammertime.on('panleft panright', function(ev) {
  console.log(ev.type);
  if(ev.type == 'panright'){
    $('.menu__opener .icon-list').addClass('icon-list_opened');
    $('.menu').addClass('active');
  }
  if(ev.type == 'panleft'){
    $('.menu__opener .icon-list').removeClass('icon-list_opened');
    $('.menu').removeClass('active');
  }
});