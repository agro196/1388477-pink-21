const navMain = document.querySelector('.main-nav')
const navToggle = document.querySelector('.main-nav__toggle')
const logoBlock = document.querySelector ('.page-header__logo-block')

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed')
logoBlock.classList.add('page-header__logo-block--transparent')


navToggle.addEventListener('click', function () {
  logoBlock.classList.toggle('page-header__logo-block--transparent')
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed')
    navMain.classList.add('main-nav--opened')
  } else {
    navMain.classList.add('main-nav--closed')
    navMain.classList.remove('main-nav--opened')
  }
})

/*if (navMain.classList.contains('main-nav--closed') && document.documentElement.clientWidth <= 559) {
  logoBlock.classList.add('page-header__logo-block--transparent');
} else {logoBlock.classList.remove('page-header__logo-block--transparent');
} */

ymaps.ready(init)
function init() {
  var myMap = new ymaps.Map('map', {
    center: [59.938635, 30.323118],
    zoom: 17,
  })
  myPlacemarkWithContent = new ymaps.Placemark(
    [59.938635, 30.323118],
    {
      hintContent: 'Собственный значок метки с контентом',
      balloonContent: 'Ул. Большая Конюшенная 19/8, Санкт-Петербург',
    },
    {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map-marker.svg',
      // Размеры метки.
      iconImageSize: [36, 36],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      // Смещение слоя с содержимым относительно слоя с картинкой.
    },
  )

  myMap.geoObjects.add(myPlacemarkWithContent)
}
