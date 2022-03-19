let hmb = document.getElementById("menu-btn")
let mobNav = document.getElementById("menu")

function hamburgerMenuToggle() {
    hmb.classList.toggle('open')
    mobNav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
}

hmb.addEventListener('click', hamburgerMenuToggle) /* Event listenmer which triggers our function*/ 