document.addEventListener("keydown", function (event) {
    let code = `${event.keyCode} `;
    if (code == 72) {
        document.getElementById('home1').play();
        document.getElementById("home").style.textDecoration = "underline";
        document.getElementById("about").style.textDecoration = "none";
        document.getElementById("project").style.textDecoration = "none";
        document.getElementById("blog").style.textDecoration = "none";
        document.getElementById("contact").style.textDecoration = "none";
    } else if (code == 65) {
        document.getElementById("about1").play();
        document.getElementById("about").style.textDecoration = "underline";
        document.getElementById("home").style.textDecoration = "none";
        document.getElementById("project").style.textDecoration = "none";
        document.getElementById("blog").style.textDecoration = "none";
        document.getElementById("contact").style.textDecoration = "none";
    } else if (code == 80) {
        document.getElementById("project1").play();
        document.getElementById("project").style.textDecoration = "underline";
        document.getElementById("home").style.textDecoration = "none";
        document.getElementById("about").style.textDecoration = "none";
        document.getElementById("blog").style.textDecoration = "none";
        document.getElementById("contact").style.textDecoration = "none";
    } else if (code == 66) {
        document.getElementById("blog1").play();
        document.getElementById("blog").style.textDecoration = "underline";
        document.getElementById("home").style.textDecoration = "none";
        document.getElementById("about").style.textDecoration = "none";
        document.getElementById("project").style.textDecoration = "none";
        document.getElementById("contact").style.textDecoration = "none";
    } else if (code == 67) {
        document.getElementById("contact1").play();
        document.getElementById("contact").style.textDecoration = "underline";
        document.getElementById("home").style.textDecoration = "none";
        document.getElementById("about").style.textDecoration = "none";
        document.getElementById("project").style.textDecoration = "none";
        document.getElementById("blog").style.textDecoration = "none";
    }
})