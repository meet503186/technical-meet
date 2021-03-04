window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const body = document.querySelector("body");
const menu = document.querySelector("#menu");

menu.addEventListener("click", function () {
  if (body.classList.contains("noScroll")) {
    body.classList.remove("noScroll");
  } else {
    body.classList.add("noScroll");
  }
});

function dispNone(){
    document.querySelector('ul').style.display = 'none';
    
}