let hamburgerOn = false;

// function toggleHamburger() {
//     console.log('toggled')
//     hamburgerOn = !hamburgerOn
//     const mobileNav = document.querySelector('.hamburger-nav')
//     console.log(mobileNav)

//     if (hamburgerOn === false) {
//         mobileNav.style = "display:block"
//     }
//     else if (hamburgerOn === true) {
//         mobileNav.style = "display:none"
//     }   
// }


function toggleHamburger() {
    const hamburgerMenu = document.querySelector('.hamburger-nav')
    if (hamburgerOn === true) {
        hamburgerMenu.style = "display: none;"
    }
    else if (hamburgerOn === false) {
        hamburgerMenu.style = "display: block;"
    }
    hamburgerOn = !hamburgerOn
}