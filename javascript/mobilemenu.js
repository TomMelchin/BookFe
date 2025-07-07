function menuEinklappen(header, animate) {
    if (animate) {
        setTimeout(() => {
            header.classList.remove("ausgefahren");
        }, 10)
    } else {
        header.classList.add("noTransition");
        header.classList.remove("ausgefahren");

        requestAnimationFrame(() => {
            header.classList.remove("noTransition");
        });
    }
}

function toggleMenu(header) {
    header.classList.toggle("ausgefahren");
}

function setup() {
    const header = document.querySelector("header");
    const menuButton = document.querySelector(".menuButton");

    const animieren = sessionStorage.getItem("animieren") === "true";
    sessionStorage.removeItem("animieren");

    menuEinklappen(header, animieren);

    menuButton.addEventListener("click", () => {
        toggleMenu(header);
    });

    document.querySelectorAll("header .navigation a").forEach(a => {
        a.addEventListener("click", () => {
            sessionStorage.setItem("animieren", "true");
        });
    });
}

document.addEventListener("DOMContentLoaded", setup);