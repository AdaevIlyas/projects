document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider'),
    btnPrev = document.querySelector('.slider__prev'),
    btnNext = document.querySelector('.slider__next'),
    sliderWrapper = document.querySelector('.slider__wrapper'),
    sliderInner = document.querySelector('.slider__inner'),
    slides = document.querySelectorAll('.slider__slide'),
    sliderWrapperWidth = parseInt(window.getComputedStyle(sliderWrapper).width);

  let whatSlide = 0;
  let whatSlideWidth = 0;

  sliderInner.style.cssText =
    `
  display: flex;
  width: ${100 * slides.length}%;
  `;

  let dots = document.createElement('ol'),
    dotsArr = [];
  dots.classList.add('dots');
  sliderWrapper.append(dots);

  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement('li');
    dot.classList.add('dot');
    dotsArr.push(dot);
    dots.append(dot);

    if (i == whatSlide) {
      dot.classList.add('dot-active');
    }
  }

  btnNext.addEventListener('click', () => {
    if (whatSlideWidth == sliderWrapperWidth * (slides.length - 1)) {
      whatSlideWidth = 0;
      whatSlide = 0;
    } else {
      whatSlideWidth += sliderWrapperWidth;
      whatSlide++;
    }

    sliderInner.style.transform = `translateX(-${whatSlideWidth}px)`;

    dotsArr.forEach(item => item.classList.remove('dot-active'));
    dotsArr[whatSlide].classList.add('dot-active');
  });

  btnPrev.addEventListener('click', () => {
    if (whatSlideWidth == 0) {
      whatSlideWidth = sliderWrapperWidth * (slides.length - 1);
      whatSlide = slides.length - 1;
    } else {
      whatSlideWidth -= sliderWrapperWidth;
      whatSlide--;
    }

    sliderInner.style.transform = `translateX(-${whatSlideWidth}px)`;

    dotsArr.forEach(item => item.classList.remove('dot-active'));
    dotsArr[whatSlide].classList.add('dot-active');
  });

  dotsArr.forEach((item, i) => {
    item.addEventListener('click', () => {
      whatSlideWidth = sliderWrapperWidth * i;
      whatSlide = i;

      sliderInner.style.transform = `translateX(-${whatSlideWidth}px)`;

      dotsArr.forEach(item => item.classList.remove('dot-active'));
      dotsArr[whatSlide].classList.add('dot-active');
    });
  });
});