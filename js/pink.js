
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
