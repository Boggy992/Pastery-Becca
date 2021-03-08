// preloader
window.addEventListener('load', (event) => {
    document.querySelector('.loader').classList.add('load-finish');
});
// 
document.addEventListener("DOMContentLoaded", function() {
  loadingImgFunc();
});

let loadingImgFunc = () => {
    var lazyloadImages;    
    
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            // let imgUrl = image.getAttribute('style');
            // let firstIndexChar = imgUrl.split('').indexOf('/');
            // let secondIndexChar = imgUrl.indexOf('.jpg');
            // let cutedimgUrl = imgUrl.substring(firstIndexChar, secondIndexChar);
            // let finallUrl = `${cutedimgUrl}.jpg`
            image.classList.remove("lazy");
            // if(image.classList.contains('swiper-slide-active')) {
            //   loadDoc(finallUrl);
            // }
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    }
};

// let loadDoc = (image) => {
//   var xhttp = new XMLHttpRequest();

//   document.querySelector('.loading-img').classList.remove('loading-hidden');

//   xhttp.onreadystatechange  = () => {
//     if (xhttp.readyState === 4 && xhttp.status == 200) {
//       document.querySelector('.loading-img').classList.add('loading-hidden');
//     }
//   };
//   xhttp.open("GET", image, true);
//   xhttp.send();
// }



 













