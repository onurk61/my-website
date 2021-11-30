let navLink = document.getElementsByClassName('nav-link');
let navItem = document.getElementsByClassName('nav-item');
let getCityData = document.querySelector('[data-toggle="getCityData"]');
let dataAjaxUrl = getCityData.getAttribute('data-ajax-url');
let city = document.getElementById('city');

Array.from(navLink).forEach((item, index) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
  })
});

Array.from(navItem).forEach((item, index) => {
  item.addEventListener('mouseenter', (e) => {
    e.currentTarget.lastElementChild.classList.add('show')
  })
  item.addEventListener('mouseleave', (e) => {
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

const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let convertedData = JSON.parse(this.responseText);
    let arr = [];

    convertedData.map((item, index) => {
      arr.push(item.name);
    })

    arr.sort();

    arr.map((item,index) => {
      city.innerHTML += `
      <option value="${item}">${item}</option>
      `;
    })
  }
}
xhttp.open('GET', dataAjaxUrl);
xhttp.send();