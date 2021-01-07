//Меню

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

//Карта

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

//Слайдер отзывов

let sliderDots = document.getElementsByClassName('slider__toggle'),
    sliderDotsArea = document.querySelector('.slider__toggles'),
    slides = document.getElementsByClassName('slider__item'),
    prev = document.querySelector('.slider__prev'),
    next = document.querySelector('.slider__next'),
    slideIndex = 1;

showSlides(slideIndex);

function showSlides (n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('slider__item--current');
    }
    for (let i = 0; i < sliderDots.length; i++) {
        sliderDots[i].classList.remove('slider__toggle--current');
    }
    slides[slideIndex - 1].classList.add('slider__item--current');
    sliderDots[slideIndex - 1].classList.add('slider__toggle--current');
}

function plusSlides (n) {
    showSlides(slideIndex += n);
}
function currentSlide (n) {
    showSlides(slideIndex = n)
}

prev.onclick = function () {
    plusSlides(-1);
}
next.onclick = function () {
    plusSlides(1);
}
sliderDotsArea.onclick = function (e) {
    for (let i = 0; i < sliderDots.length + 1; i++) {
        if (e.target.classList.contains('slider__toggle') && e.target == sliderDots[i - 1]) {
            currentSlide(i);
        }
    }
}
