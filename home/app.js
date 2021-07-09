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



// us section
let usImg1 = document.querySelector('#us-img1')
let usImg2 = document.querySelector('#us-img2')

window.addEventListener('scroll', () => {
  let value = window.scrollY

  usImg1.style.left = 100 - value*.1 + 'vw'
})

window.addEventListener('scroll', () => {
  let value = window.scrollY

  usImg2.style.left = -(100 - value*.1) + 'vw'
})



// services section
let servicesImg1 = document.querySelector('#services-img1')
let servicesImg2 = document.querySelector('#services-img2')

window.addEventListener('scroll', () => {
  let value = window.scrollY

  servicesImg1.style.left = 510 - value*.1+ 'vw'
  servicesImg2.style.left = -(510 - value*.1) + 'vw'



  if (window.innerWidth <= 760) {
    servicesImg1.style.left = 460 - value*.1+ 'vw'
    servicesImg2.style.left = -(460 - value*.1) + 'vw'
  }
  if (window.innerWidth <= 500) {
    servicesImg1.style.left = 400 - value*.1+ 'vw'
    servicesImg2.style.left = -(400 - value*.1) + 'vw'
  }
})

// services slider

const servicesData = [
  {
    head: 'MARKETING DIGITAL 💻',
    p: "UN BON MARKETING AUGMENTE LA FIDÉLITÉ DE VOTRE CLIENTÈLE ET GÉNÈRE PLUS DE VENTES POUR VOTRE ENTREPRISE"
  },
  {
    head: 'SITES WEB 👨‍💻',
    p: "VOTRE SITE WEB N'EST PAS SEULEMENT UNE BROCHURE NUMÉRIQUE À VOIR PAR VOS CLIENTS, MAIS C'EST ÉGALEMENT UN OUTIL COMMERCIAL"
  },
  {
    head: 'COMMUNICATION INTERACTIVES 👏🏼',
    p: "QUE CE SOIT SUR UN SITE WEB, UN PANNEAU D'AFFICHAGE OU À L'ARRIÈRE D'UN BUS, NOUS VEILLERONS À CE QUE VOTRE MARQUE SOIT COHÉRENTE, FANTASTIQUE ET MÉMORABLE"
  }
]

const services1 = document.querySelector('.services1')
const services2 = document.querySelector('.services2')
const services3 = document.querySelector('.services3')

const servicesHead = document.querySelector('.services-head')
const servicesP = document.querySelector('.services-p')

services1.addEventListener('click' , () => {
  servicesHead.innerHTML = servicesData[0].head
  servicesP.innerHTML = servicesData[0].p

  services1.style.backgroundColor = '#000'
  services2.style.backgroundColor = '#fff'
  services3.style.backgroundColor = '#fff'
})
services2.addEventListener('click' , () => {
  servicesHead.innerHTML = servicesData[1].head
  servicesP.innerHTML = servicesData[1].p

  services1.style.backgroundColor = '#fff'
  services2.style.backgroundColor = '#000'
  services3.style.backgroundColor = '#fff'
})
services3.addEventListener('click' , () => {
  servicesHead.innerHTML = servicesData[2].head
  servicesP.innerHTML = servicesData[2].p

  services1.style.backgroundColor = '#fff'
  services2.style.backgroundColor = '#fff'
  services3.style.backgroundColor = '#000'
})


// contact cursor (magic)
// const contact = document.querySelector('.contact')
// const cursor = document.querySelector('.contact-cursor')

// contact.addEventListener('mousemove', e => {
//   cursor.style.cssText = 'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
// })

// $(contact).ready(function() {
//   var $magic = $(".magic"),
//       magicWHalf = $magic.width() / 2;
//   $(contact).on("mousemove", function(e) {
//     console.log(e.pageY);
  
//     $magic.css({"left": e.pageX - magicWHalf, "top": (6999 - e.pageY) - magicWHalf});
//   });
// });

