// change navbar styles on scroll

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})





// show/hide faqs answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // change icon
        const icon = faq.querySelector('.faq__icon i');
        if (icon.className === 'uil uil-plus-circle')
        icon.className = 'uil uil-minus-circle';
        else icon.className = 'uil uil-plus-circle';
    })
});



// show navbar toggle 

const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
    // for showing menu on click and replacing menu icon with close icon
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})


// close nav menu

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none' ;
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
})