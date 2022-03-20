let hmb = document.getElementById("menu-btn")
let mobNav = document.getElementById("menu")
let menuContainer = document.getElementById("menu-container")
let menuClickCounter = 0

function hamburgerMenuToggle() {
    hmb.classList.toggle('open')
    mobNav.classList.toggle('hidden')
    document.body.classList.toggle('no-scroll')
    if (menuClickCounter % 2 == 0){
        menuContainer.classList.add("mobile-backgroundColor");
    }
    else {
        menuContainer.classList.remove("mobile-backgroundColor");
    }
}

hmb.addEventListener('click', hamburgerMenuToggle) /* Event listenmer which triggers our function*/ 
hmb.addEventListener('click', function(){
    menuClickCounter += 1;
})