// navbar section
const navbar = document.querySelector('.navbar')

window.addEventListener('scroll', () => {
  if (window.scrollY >= 80) {
    navbar.classList.add('active-nav')
  } else {
    navbar.classList.remove('active-nav')
  }
})

const barsIcon = document.querySelector('.fa-bars')
const timesIcon = document.querySelector('.fa-times')
const navMenuMobile = document.querySelector('.nav-menu-mobile')

barsIcon.addEventListener('click', () => {
  navMenuMobile.classList.add('active')
})
timesIcon.addEventListener('click', () => {
  navMenuMobile.classList.remove('active')
})







