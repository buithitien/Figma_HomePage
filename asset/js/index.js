const toggle = document.querySelector(".toggle");
const menulist = document.querySelector(".menu-list");

toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active");
    menulist.classList.toggle("active");
})