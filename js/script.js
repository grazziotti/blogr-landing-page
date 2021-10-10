const hamburgerIcon = document.querySelector('.js-hamburger')
const headerNav = document.querySelector('.js-header-nav')
const dropdownItems = document.querySelectorAll('.header__dropdown__item')


// Menu
function openMenu() {
    headerNav.classList.add('header__nav--open')
    setTimeout(() => headerNav.classList.add('header__nav--show'), 10)
    hamburgerIcon.classList.add('header__hamburger--open')
}
function closeMenu() {
    headerNav.classList.remove('header__nav--show')
    setTimeout(() =>headerNav.classList.remove('header__nav--open'), 200)
    hamburgerIcon.classList.remove('header__hamburger--open')
    
    closeSubmenus()
}
function toggleMenu() {
    headerNav.classList.contains('header__nav--open') 
        ? closeMenu()
        : openMenu()
}
hamburgerIcon.addEventListener('click', toggleMenu)


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
