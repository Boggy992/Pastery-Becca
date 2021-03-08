// swiper galery
var mYswiper = new Swiper('.swiper-custom', {
    observer: true,
    observeParents: true,
    keyboard: {
      enabled: true,
      onlyInViewport: false
    },
    on: {
      slideChange: function () {
        document.querySelectorAll('.swiper-img-number')[0].children[0].innerHTML = mYswiper.realIndex + 1;  
      },
    },
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

if(document.querySelector('.swiper-all') !== null){
  const swiperWrapper = document.querySelector('.swiper-all');
  const allSmallImgs = Array.from(document.querySelectorAll('.main-ice-cream__wrapper')[0].children);
  const swiperAbout = document.querySelector('.swiper-about');

  allSmallImgs.forEach((img, index) => {
    img.addEventListener('click', (e) => {
      // return top button z-index 0
      document.querySelector('.btn-bck-top').style.zIndex = 0;
      // social icon z-index 0
      document.querySelector('.social-icon').style.zIndex = 0;
      // navbar z-index 0
      document.querySelector('.header').style.zIndex = -5;
      document.querySelectorAll('.swiper-img-number')[0].children[0].innerHTML = index + 1;
      document.querySelectorAll('.swiper-img-number')[0].children[1].innerHTML = allSmallImgs.length;
      mYswiper.slideTo(index , 500, false);
      swiperWrapper.classList.add('gallery-block');
      document.body.classList.add('overflowY-hidden');   
    });
  });

// exit gallery on black screen
  swiperWrapper.addEventListener('click', (e)=> {
    if(e.target.children[0]) {
      swiperWrapper.classList.remove('gallery-block');  
      document.body.classList.remove('overflowY-hidden'); 
      // return top button z-index 1000
      document.querySelector('.btn-bck-top').style.zIndex = 1000;
      // return social icon z-index 3
      document.querySelector('.social-icon').style.zIndex = 3;
      // navbar 
      document.querySelector('.header').style.zIndex = 999;
    }
  });

// exit gallery on button 
  document.querySelector('.sw-close').addEventListener('click', ()=> {
    swiperWrapper.classList.remove('gallery-block');  
    document.body.classList.remove('overflowY-hidden'); 
    // return top button z-index 1000
    document.querySelector('.btn-bck-top').style.zIndex = 1000;
    // return social icon z-index 3
    document.querySelector('.social-icon').style.zIndex = 3;
    // navbar 
    document.querySelector('.header').style.zIndex = 999;
  });

  // exit gallery on esc
  document.onkeyup = function(event) {
    if (event.key === "Escape"){
      swiperWrapper.classList.remove('gallery-block');
      document.body.classList.remove('overflowY-hidden'); 
      // return top button z-index 1000
      document.querySelector('.btn-bck-top').style.zIndex = 1000;
      // return social icon z-index 3
      document.querySelector('.social-icon').style.zIndex = 3;
      // navbar 
      document.querySelector('.header').style.zIndex = 999;
    }
  }
}