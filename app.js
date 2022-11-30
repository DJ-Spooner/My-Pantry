const hamburger = document.getElementById('hamburger');
const mobile_nav_menu = document.getElementById('mobile-nav-menu');

hamburger.addEventListener('click', () => {
    if (!mobile_nav_menu.classList.contains('is-active')) {
        mobile_nav_menu.classList.add('is-active')
    } else {
        mobile_nav_menu.classList.remove('is-active')
    }
})
