const hamburgerBtn = document.querySelector('.hamburger')
const openMenu = document.querySelector('.main-nav-mobile')

const dropdownMenuMobile = document.querySelector('.dropdown-mobile')
const dropdownIcon = document.querySelector('.dropdown-menu')
const submenuMobile = document.querySelector('.sub-menu-mobile')

const dropdownMenuDesk = document.querySelector('.dropdown-desktop')
const submenuDesk = document.querySelector('.sub-menu-desktop')
const dropdownIconDesk = document.querySelector('.sub-dropdown')

hamburgerBtn.addEventListener("click", morph)
function morph(e) {
    e.preventDefault()
    hamburgerBtn.classList.toggle("open")
    openMenu.classList.toggle("open")
}

document.addEventListener('click', (e) => {
    if(openMenu && hamburgerBtn) {
        if(!openMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
            if(openMenu.classList.contains('open')) {
                openMenu.classList.remove('open')
                hamburgerBtn.classList.remove('open')
                if(submenuMobile && submenuMobile.classList.contains('open')) {
                    submenuMobile.classList.remove('open')
                    if(dropdownIcon) {
                        dropdownIcon.classList.remove('open')
                    }
                }
            }
        }
    }

    if(dropdownMenuDesk && submenuDesk && dropdownIconDesk) {
        if(!dropdownMenuDesk.contains(e.target)) {
            if(submenuDesk.classList.contains('open')) {
                submenuDesk.classList.remove('open')
                dropdownIconDesk.classList.remove('open')
            }
        }
    }
    
})

// Mobile toggle
if(dropdownMenuMobile && submenuMobile) {(
    dropdownMenuMobile.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        submenuMobile.classList.toggle('open')
        dropdownIcon.classList.toggle('open')
    }))
}

//Tablet Expand Navigation
document.addEventListener('DOMContentLoaded', () => {
    const expandedBtn = document.querySelector('.nav-toggle')
    const displayMenu = document.querySelector('.main-menu-desktop')

    if(expandedBtn && displayMenu) {
        expandedBtn.addEventListener('click', (e) => {
            e.preventDefault()
            displayMenu.classList.toggle('show')
        
            const isExpanded = displayMenu.classList.contains('show')
        
            expandedBtn.setAttribute('aria-expanded', isExpanded);
        
            if(isExpanded) {
                expandedBtn.setAttribute('aria-label', 'Show Hidden Menu')
            } else {
                expandedBtn.setAttribute('aria-label', 'Overflow Hidden Menu')
            }
        
            console.log("After click:", displayMenu.classList);
        })
    }
    
})

//Desktop toggle
if(dropdownMenuDesk && submenuDesk) {(
    dropdownMenuDesk.addEventListener('click', (e) => {
        e.preventDefault()
        e.stopPropagation()
        submenuDesk.classList.toggle('open')
        dropdownIconDesk.classList.toggle('open')
    })
)}

if(openMenu) {
    openMenu.addEventListener('click', (e) => {
        if(!dropdownMenuMobile || !dropdownMenuMobile.contains(e.target)) {
            e.stopPropagation()
        }
    })
}

//Search overlay function
document.addEventListener("DOMContentLoaded", (e) => {
    const searchBtn = document.getElementById("search-btn")
    const closeBtn = document.getElementById("close-btn")
    const searchContainer = document.getElementById("search-container")
    const overlayContainer = document.getElementById("overlay")

    searchBtn.addEventListener("click", (e) => {
        e.preventDefault()
        searchContainer.classList.add("active")
        overlayContainer.classList.add("show")
    })

    closeBtn.addEventListener("click", (e) => {
        e.preventDefault()
        searchContainer.classList.remove("active")
        overlayContainer.classList.remove("show")
    })
})
