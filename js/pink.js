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
$("#menu_button").on("click",function () {
    $(".header__list").toggleClass('toggle__menu');
    $(".main-nav__wrapper--open").toggleClass('main-nav__wrapper--close');
      if ($(".header__list").hasClass("toggle__menu"))
        {
          $(".button__img").show();
          $(".button__img-open").hide();
        }
        else
        {
          $(".button__img").hide();
          $(".button__img-open").show();
        }
});

