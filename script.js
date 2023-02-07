// function to play sound when key is pressed also add border
document.addEventListener("keydown", function (event) {
    let code = event.keyCode;
    switch (code) {
        case 72:
            focusedElement("home");
            break;
        case 65:
            focusedElement("about");
            break;
        case 80:
            focusedElement("project");
            break;
        case 66:
            focusedElement("blog");
            break;
        case 67:
            focusedElement("contact");
            break;
        // case 9:
        //     tabPressed();
        //     break;
    }
});


// function to add border & play sound on selected id
function focusedElement(selected_Id) {
    let working_ID = selected_Id;
    let play_ID = selected_Id.concat("1");
    const allId = ["home", "about", "project", "blog", "contact"];

    document.querySelectorAll("span").forEach(span => {
        span.classList.remove("border");
        // if (allId.includes(span.id) && span.classList.contains("focus-visible")) {
        //     span.classList.remove("focus-visible");
        // }
    });

    const selected = document.querySelector(`#${working_ID}`);
    if (allId.includes(working_ID) && selected) {
        selected.classList.add("border");
        document.querySelector(`#${play_ID}`).play();
    }
}



// function that write text in typing effect and also remove it letter by letter
const text = "Code With Pankaj";
let index = 0;
let direction = 1;
const textEl = document.querySelector("#text");

function type() {
    if (direction === 1) {
        if (index < text.length) {
            textEl.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        } else {
            direction = -1;
            setTimeout(type, 1000);
        }
    } else {
        if (index >= 0) {
            textEl.innerHTML = text.slice(0, index);
            index--;
            setTimeout(type, 100);
        } else {
            direction = 1;
            setTimeout(type, 1000);
        }
    }
}


window.onload = type;

//function to perform certain tasks when tab is pressed
// function tabPressed() {
//     document.querySelectorAll("span").forEach(span => span.classList.remove("border"));
// }



// TODO : Add feature - if tabindex outline is available then remove border & if border available then remove outline of tabindex