const hamburgerSpan = menuToggle.firstChild;

// change header link color
headerLinks.forEach(link => {
    let linkHrefCuted = link.href.substring(22);
    let hrefLocationNow = window.location.pathname.substring(1);
    if(linkHrefCuted === hrefLocationNow) {
        link.classList.add('change-color')
    }
});

// hamburger toggle
menuToggle.addEventListener('click', ()=> {
    menuNav.classList.toggle('nav__visible');
    hamburgerSpan.classList.toggle('header__hamburger-cross');
    document.body.classList.toggle('overflowY-hidden');
    bckgWrapper.classList.toggle('bckg-transition');
});

// stop hamburger navigation translation on resize 
let resizeTimer;
window.addEventListener("resize", () => {
    menuNav.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    menuNav.classList.remove("resize-animation-stopper");
  }, 400);
});

// remove black background from screen
bckgWrapper.addEventListener('click', ()=> {
    menuNav.classList.remove('nav__visible');
    hamburgerSpan.classList.remove('header__hamburger-cross');
    document.body.classList.remove('overflowY-hidden');
    bckgWrapper.classList.remove('bckg-transition');
});

// hamburger menu arrows
// headerArrow.forEach( (arrow,index) => {
//     arrow[0].addEventListener('click', (e)=> {
//         let triangleItem = e.target.parentElement;
//         let subMenuRevel = e.target.parentElement.parentElement.lastChild.previousElementSibling;
//         subMenuRevel.classList.toggle('header__sub-menu-visible');   
//         arrow.classList.toggle('header__background-arrow');
//         triangleItem.classList.toggle('header__item-triangle');
//     });      
// });

headerArrow[0].addEventListener('click', (e)=> {
    let triangleItem = e.target.parentElement;
    let subMenuRevel = e.target.parentElement.parentElement.lastChild.previousElementSibling;
    subMenuRevel.classList.toggle('header__sub-menu-visible');   
    headerArrow[0].classList.toggle('header__background-arrow');
    triangleItem.classList.toggle('header__item-triangle');
});  

headerArrow[1].addEventListener('click', (e)=> {
    let triangleItem = e.target.parentElement;
    let subMenuRevel = e.target.parentElement.parentElement.lastChild.previousElementSibling;
    subMenuRevel.classList.toggle('header__sub-menu-visible-cup-cakes');   
    headerArrow[1].classList.toggle('header__background-arrow');
    triangleItem.classList.toggle('header__item-triangle');
});  