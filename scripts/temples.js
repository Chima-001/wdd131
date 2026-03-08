const currentYear = new Date().getFullYear();
const nav = document.querySelector("nav");
const header = document.querySelector("header");
const title = document.querySelector('header span')

const hamburger = document.createElement("button");
hamburger.setAttribute("id", "hamburger");
hamburger.innerHTML = "&#9776;";
header.appendChild(hamburger);

hamburger.addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        hamburger.innerHTML = "&#10005;";
        title.style.display = "none";
    } else {
        hamburger.innerHTML = '&#9776;';
        title.style.display = "block"
        hamburger.style.position = "static"
        hamburger.style.top = ""
        hamburger.style.right = ""
    }
});

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;
