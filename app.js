let navLink = document.getElementsByClassName('nav-link');
let navItem = document.getElementsByClassName('nav-item');

Array.from(navLink).forEach((item,index) => {
    item.addEventListener('click',(e) =>{
        e.stopPropagation();
    })
});

Array.from(navItem).forEach((item,index) => {
    item.addEventListener('mouseenter',(e) =>{
        e.currentTarget.lastElementChild.classList.add('show')
    })
    item.addEventListener('mouseleave',(e) =>{
        e.currentTarget.lastElementChild.classList.remove('show')
    })
})

const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})