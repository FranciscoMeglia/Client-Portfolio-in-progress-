const botonNav = document.getElementById("btn")
const navBar = document.getElementById("navb")
const enlaces = document.getElementById("en")

botonNav.addEventListener("click" , () => {

   enlaces.style.transitionDelay = "0.5s"
   navBar.classList.remove("nav")
   navBar.classList.add("navmobile")


})