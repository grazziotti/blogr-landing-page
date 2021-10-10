const hamburgerIcon = document.querySelector('.js-hamburger')
const headerNav = document.querySelector('.js-header-nav')
const menuItems = document.querySelectorAll('.header__dropdown__item-text')

// Menu
const closeMenu = () => {
    closeSubmenu()
    headerNav.classList.remove('header__nav--show')
    setTimeout( () => headerNav.classList.remove('header__nav--open'), 300)
    hamburgerIcon.classList.remove('header__hamburger--open')
}

const openMenu = () => {
    headerNav.classList.add('header__nav--open')
    setTimeout(() => headerNav.classList.add('header__nav--show'), 10)
    hamburgerIcon.classList.add('header__hamburger--open')
}

const isMenuOpen = () => headerNav.classList.contains('header__nav--open')

const toggleMenu = () => {
    isMenuOpen()
        ? closeMenu()
        : openMenu()
}

hamburgerIcon.addEventListener('click', toggleMenu)

// submenu
let selectedSubmenu

const closeSubmenu = () => {
    if (selectedSubmenu !== null)
        selectedSubmenu.classList.remove('header__dropdown__item--open')
}

const openSubmenu = () => selectedSubmenu.classList.add('header__dropdown__item--open')

const isSubmenuOpen = () => selectedSubmenu.classList.contains('header__dropdown__item--open')

const toggleSubmenu = e => {
    selectedSubmenu = e.target.closest('.header__dropdown__item')
    const allOpenSubmenus = document.querySelectorAll('.header__dropdown__item--open')
    
    allOpenSubmenus.forEach( submenu => {
        if (submenu !== selectedSubmenu) 
            submenu.classList.remove('header__dropdown__item--open')
    })

    isSubmenuOpen()
        ? closeSubmenu()
        : openSubmenu()
}

menuItems.forEach( menuItem => menuItem.addEventListener('click', toggleSubmenu))
