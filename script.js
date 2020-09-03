const isMobile = screen.height > screen.width;
const content = document.getElementById("content");
const mobileNav = document.getElementById("mobile-nav");
const mainNav = document.getElementById("main-nav");

var mainNavVisible = false;

const configDesktop = () => {
    content.style.margin = "50px 20% 50px 20%";
    mobileNav.style.display = "none";
    mainNav.style.display = "";
}

const configMobile = () => {
    let children = mainNav.children;
    for(var i = 0; i < children.length; i++) {
        let child = children[i];
        child.style.display = "block";
    }

    mainNav.style.textAlign = "center";
    mainNav.style.fontSize = "40pt";
}

const toggleMainNav = () => {
    mainNavVisible = !mainNavVisible;
    mainNav.style.display = mainNavVisible ? "" : "none";
}

if(isMobile) configMobile();
else configDesktop();