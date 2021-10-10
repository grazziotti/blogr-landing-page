const menuMobile = document.querySelector('.js-menu-mobile')
const headerNav = document.querySelector('.js-header-nav')
const dropdownItems = document.querySelectorAll('.header__dropdown__item')


// Menu
function openMenu() {
    headerNav.classList.add('header__nav--open')
    setTimeout(() => headerNav.classList.add('header__nav--show'), 10)
    menuMobile.querySelector('img').src = './images/icon-close.svg'
}
function closeMenu() {
    headerNav.classList.remove('header__nav--show')
    setTimeout(() =>headerNav.classList.remove('header__nav--open'), 200)
    menuMobile.querySelector('img').src = './images/icon-hamburger.svg'
    
    closeSubmenus()
}
function toggleMenu() {
    headerNav.classList.contains('header__nav--open') 
        ? closeMenu()
        : openMenu()
}
menuMobile.addEventListener('click', toggleMenu)


// Submenu
function openSubmenu(item) {
    item.querySelector('.header__dropdown__submenu-area').classList.add('header__dropdown__submenu-area--open')
}
function closeSubmenus() {
    const submenus = document.querySelectorAll('.header__dropdown__submenu-area')
    submenus.forEach( submenu => submenu.classList.remove('header__dropdown__submenu-area--open'))
}
function toggleSubmenu(item) {
    closeSubmenus()
    openSubmenu(item)
}
dropdownItems.forEach( item => item.addEventListener('click', () => toggleSubmenu(item)))
