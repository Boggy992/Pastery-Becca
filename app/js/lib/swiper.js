// slider home page
var swiper = new Swiper('.swiper1', {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  allowTouchMove: false,
  speed: 2000,
    autoplay: {
     delay: 5000,
   }
});

// slider home page
if(document.querySelector('.hero') !== null){
  // add lazy-text for first slide at start
  const firstPageAllText = Array.from(document.querySelector('.swiper-text-box-slatkisi').children);
  firstPageAllText.forEach(item => {
    item.classList.add('lazy-text');
  });
  // adding lazy-text for other sliders with slideChange event
  let sliderIndex = swiper.on('slideChange', function(e) { 
    let allElements = Array.from(sliderIndex.el.children[0].children);
    let res = allElements.map(element => {
      if(element.style.opacity > 0.1) {
        element.children[0].lastElementChild.classList.add('lazy-text');
        element.children[0].children[0].classList.add('lazy-text');
        element.children[0].children[1].classList.add('lazy-text');
      } else {
        element.children[0].lastElementChild.classList.remove('lazy-text');
        element.children[0].children[0].classList.remove('lazy-text');
        element.children[0].children[1].classList.remove('lazy-text');
      }
    });
  });
}














