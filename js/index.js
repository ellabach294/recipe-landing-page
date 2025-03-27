const hamburgerBtn = document.querySelector('.hamburger')
const openMenu = document.querySelector('.main-nav')
hamburgerBtn.addEventListener("click", morph)

function morph(e) {
    e.preventDefault()
    hamburgerBtn.classList.toggle("open")
    openMenu.classList.toggle("open")
}

const dropdownMenu = document.querySelector('.dropdown')
const dropdownIcon = document.querySelector('.dropdown-menu')
const submenu = document.querySelector('.sub-menu')

if(dropdownMenu && submenu) {(
    dropdownMenu.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        submenu.classList.toggle('open')
        dropdownIcon.classList.toggle('open')
    }))
}

openMenu.addEventListener('click', (e) => {
    e.stopPropagation()
})

document.addEventListener('click', (e) => {
    if(!openMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        openMenu.classList.remove('open')
        hamburgerBtn.classList.remove('open')
        submenu.classList.remove('open')
    }
})