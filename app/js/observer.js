// scroll event for social icon
let socialScroling = () => {
    document.querySelector('.social-icon').classList.remove('social-icon-observer');

    if(window.pageYOffset > 260) {
        document.querySelector('.social-icon').classList.add('social-icon-observer');
    }    
};

let navSCroling = () => {
    header.classList.remove('sticky-menu');
    // header logo
    header.children[0].children[0].children[0].classList.remove('sticky-logo');

    if(window.pageYOffset > 400 && window.innerWidth > 1120) {
        header.classList.add('sticky-menu');   
        // header logo
        header.children[0].children[0].children[0].classList.add('sticky-logo'); 
    }
};

let buttonBackTop = () => {
    document.querySelector('.btn-bck-top').classList.remove('btn-bck-top-visible');

    if(window.pageYOffset > 400) {
        document.querySelector('.btn-bck-top').classList.add('btn-bck-top-visible');    
    }
};
// listener for scroll events
window.addEventListener('scroll', () => {
    socialScroling();
    navSCroling();
    buttonBackTop();
});

// footer observer
let optionsFooter = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
}

let observerFooter = new IntersectionObserver((entries, observer) => {
    entries.forEach(entrie => {
        let footerChildElements = Array.from(entrie.target.children);

        if(entrie.isIntersecting) {
            footerChildElements.forEach(footerElement => {
                footerElement.classList.add('footer-visible');  
                observer.unobserve(entrie.target);
                return;
            });
        } 
    })    
}, optionsFooter);

observerFooter.observe(document.querySelector('.footer'));

// credit observer
let optionsCredit = {
    root: null,
    rootMargin: '0px',
    threshold: 0.7
}

let observerCredit = new IntersectionObserver((entries, observer) => {
    entries.forEach(entrie => {
        let creditChildElements = Array.from(entrie.target.children);
        if(entrie.isIntersecting) {
            creditChildElements.forEach( creditItem => {
                creditItem.classList.add('credit-visible');
            });
        }     
    });    
}, optionsCredit);

observerCredit.observe(document.querySelector('.credit'));
  
 


 