
// Navbar
const navToggle = document.getElementById("nav-toggle");
const closeNavBtn = document.getElementById("close")
const navbarLinks = document.getElementById("navbar-items")


closeNavBtn.addEventListener("click", () => {
  navbarLinks.style.left  = "-100%"; 
})

navToggle.addEventListener("click", () => {
  navbarLinks.style.left = 0
})


// Auctions
const tabs = document.querySelectorAll(".auction .auction__inner .tabs .tabs__inner button");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("selected-tab"))

    tab.classList.add("selected-tab");
  })
})