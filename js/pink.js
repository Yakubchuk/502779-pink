(function () {

  toggleMenu();

  function toggleMenu() {
    var but = document.getElementById('menu_button'),
        list = document.getElementsByClassName('main-nav__wrapper')[0];
      but.addEventListener("click", buttonHandler);
    function buttonHandler() {
      this.classList.toggle("main-nav__toggle--open");
      list.classList.toggle("main-nav__wrapper--close");
    }

  }
}());

