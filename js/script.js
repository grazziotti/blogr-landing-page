const menuMobile = document.querySelector('.js-menu-mobile img')
const headerNav = document.querySelector('.js-header-nav')

menuMobile.addEventListener('click', () => {
    headerNav.classList.toggle('is-open')
    headerNav.classList.contains('is-open')
        ? menuMobile.src = './images/icon-close.svg'
        : menuMobile.src = './images/icon-hamburger.svg'
})
