var barras = document.getElementById("menuIcon");
var contNav = document.getElementById("contNav");
var menu = document.querySelector(".menu");
var contact = document.querySelector(".btnContact");
var btnLink = document.querySelector(".btnLink");

barras.addEventListener("click", () => {
  menu.classList.toggle("active");
  contact.classList.toggle("active");
});

/*barras.addEventListener("click", () => {
  if (document.querySelector("#menu.active")) {
    menu.classList.add("slow");
    contact.classList.add("slow");
  }
});*/

btnLink.addEventListener("click", function () {
  menu.classList.remove("active");
  contact.classList.remove("active");
});
