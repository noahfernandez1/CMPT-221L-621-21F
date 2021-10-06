var h1 = document.querySelector(".title");
var p = document.querySelector("#description");
var h3 = document.querySelector("#bossy");
var lis = document.querySelectorAll("li");
var body = document.querySelector("body");
var title = document.querySelector("title");

h1.textContent = "TITLETITLETITLE";
p.textContent = "Noah Fernandez";
h3.textContent = "Less Bossy";

lis[0].style.color = "Blue";
lis[1].style.backgroundColor = "Tan";
body.style.backgroundColor = "Gray"
lis[3].style.textTransform = "uppercase";
lis[4].classList.add("title");