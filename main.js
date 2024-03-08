var navIsOpen = false;
var navElement = document.getElementById("navmenu");

function toggleNavigationMenu() {
    if (window.innerWidth <= 1200) {
        if (!navIsOpen) {
            // navElement.style.display = "flex"
            navElement.style.transform = "translateX(0vw)";
            document.body.style.overflowY = "hidden";
            navIsOpen = true;
        } else {
            // navElement.style.display = "none";
            navElement.style.transform = "translateX(120vw)";
            document.body.style.overflowY = "auto";
            navIsOpen = false;
        }
    }
}

var navbarHeight = 100;
function goTo(id) {
    let destination = document.querySelector(id);
    if(destination != null) {
        let yCoord = destination.offsetTop - navbarHeight;
        window.scrollTo({
        top: yCoord,
        behavior: "smooth"
        });
    }
}

function goToTop() {
    window.scrollTo({top: 0, behavior: "smooth"});
}

function onResize() {
    if(window.innerWidth > 1200) {
        navElement.style.transform = "translateX(0vw)";
    } else  {
        navIsOpen = true;
        toggleNavigationMenu();
    }
}

function navItemClick(id) {
    if (id != null) {
        goTo(id);
    }
    else {
        goToTop();
    }
    if (window.innerWidth < 1200) {
        navIsOpen = true;
        toggleNavigationMenu();
    }
}