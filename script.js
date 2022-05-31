document.addEventListener("keydown", function (event) {
    let code = `${event.keyCode} `;
    if (code == 72) {
        document.getElementById('home1').play();
        var element = document.getElementById("home");
        element.style.textDecoration = "underline";
    } else if (code == 65) {
        document.getElementById("about1").play();
        var element = document.getElementById("about");
        element.style.textDecoration = "underline";
    } else if (code == 80) {
        document.getElementById("project1").play();
        var element = document.getElementById("project");
        element.style.textDecoration = "underline";
    } else if (code == 66) {
        document.getElementById("blog1").play();
        var element = document.getElementById("blog");
        element.style.textDecoration = "underline";
    } else if (code == 67) {
        document.getElementById("contact1").play();
        var element = document.getElementById("contact");
        element.style.textDecoration = "underline";
    }
})