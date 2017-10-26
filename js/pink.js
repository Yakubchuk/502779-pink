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
ymaps.ready(function () {
  var myMap = new ymaps.Map('yamap', {
      center: [59.938631, 30.323055],
      zoom: 15
    }, {
      searchControlProvider: 'yandex#search'
    }),
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: '',
      balloonContent: ''
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-marker.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-5, -38]
    });
  myMap.geoObjects
    .add(myPlacemark)
  //   .add(myPlacemarkWithContent);
});
