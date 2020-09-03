const isMobile = screen.height > screen.width;
const content = document.getElementById("content");
const mobileNav = document.getElementById("mobile-nav");
const mainNav = document.getElementById("main-nav");
const foldTimeoutMillis = 30;
const foldoutSpeed = 5;
const foldoutAcceleration = 5;

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

const configFoldouts = () => {
    let foldouts = document.getElementsByClassName("foldout");
    for(var i = 0; i < foldouts.length; i++) {
        let foldout = foldouts[i];
        let button = foldout.children[0];
        button.addEventListener("click", () => {
            if(foldout.style.maxHeight == "50px" || foldout.style.maxHeight == "") {
                button.disabled = true;
                setTimeout(expandFoldout, foldTimeoutMillis, foldout, foldoutSpeed);
            } else {
                button.disabled = true;
                setTimeout(expandFoldout, foldTimeoutMillis, foldout, -foldoutSpeed);
            }
        });
    }
}

const expandFoldout = (foldout, direction) => {
    let button = foldout.children[0];
    let foldoutContent = foldout.children[1];
    let pixels = foldout.style.maxHeight.trim();
    if(pixels == "") pixels = 50;
    else pixels = parseFloat(pixels.substring(0, pixels.length - 2));
    pixels += direction;
    foldout.style.maxHeight = pixels + "px";
    if((direction > 0 && pixels < foldoutContent.scrollHeight + 50) || (direction < 0 && pixels > 50)) setTimeout(expandFoldout, foldTimeoutMillis, foldout, direction + Math.sign(direction) * foldoutAcceleration);
    else button.disabled = false;
}

const toggleMainNav = () => {
    mainNavVisible = !mainNavVisible;
    mainNav.style.display = mainNavVisible ? "" : "none";
}

if(isMobile) configMobile();
else configDesktop();
configFoldouts();