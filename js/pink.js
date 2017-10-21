// $(document).ready(function () {
//   $(".main-nav__wrapper").toggleClass("main-nav__wrapper-open");
//   $(".header__list").toggleClass('toggle__menu');
//   if ($(".header__list").hasClass("toggle__menu"))
//     {
//       $(".button__img").show();
//       $(".button__img-open").hide();
//     }
//     else
//     {
//       $(".button__img").hide();
//       $(".button__img-open").show();
//     }
// });
// $("#menu_button").on("click",function () {
//     $(".header__list").toggleClass('toggle__menu');
//     $(".main-nav__wrapper--open").toggleClass('main-nav__wrapper--close');
//       if ($(".header__list").hasClass("toggle__menu"))
//         {
//           $(".button__img").show();
//           $(".button__img-open").hide();
//         }
//         else
//         {
//           $(".button__img").hide();
//           $(".button__img-open").show();
//         }
// });

//дожидаемся полной загрузки страницы
window.onload = function () {

    //получаем идентификатор элемента
    var but = document.getElementById('menu_button'),
        menu = document.getElementsByClassName('header__list')[0],
        list = document.getElementsByClassName('main-nav__wrapper--open')[0];

    //вешаем на него событие
    but.onclick = function() {
      //производим какие-то действия


      but.classList.toggle("main-nav__toggle--open");
      menu.classList.toggle("toggle__menu");
      list.classList.toggle("main-nav__wrapper--close");
    };
  };
