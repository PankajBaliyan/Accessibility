//Capture key code and perform certain tasks.
document.addEventListener("keydown", function (event) {
    let code = `${event.keyCode} `;
    if (code == 72) {
        focusedElement("home");
    } else if (code == 65) {
        focusedElement("about");
    } else if (code == 80) {
        focusedElement("project");
    } else if (code == 66) {
        focusedElement("blog");
    } else if (code == 67) {
        focusedElement("contact");
    }
})

//Function to perform certain tasks, according to provided ID.
function focusedElement(selected_Id) {
    
    //Variable used to perform styling.
    let working_ID = selected_Id;
    
    //Variable used to play sound.
    let play_ID = selected_Id.concat("1");
    
    //Array of all ID's
    const allId = ["home","about","project","blog","contact"];

    for(let i = 0 ; i < 5 ; i ++) {
        if(working_ID == allId[i]) {
            // document.getElementById(`${working_ID}`).style.textDecoration = "underline";
            document.getElementById(`${working_ID}`).focus();
            document.getElementById(`${play_ID}`).play();
        } else {
            // document.getElementById(`${allId[i]}`).style.textDecoration = "none";
        }
    }
};