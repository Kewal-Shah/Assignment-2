const ALLOWED_LENGTH_OF_FORM = 5;

const openMenu = () => {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* 
Generate HTML Form using Javascript and append it to the body
Maintains the number of forms added and limits the number to ALLOWED_LENGTH_OF_FORM
Show/Hide "Add Friend" and "Remove" Button
*/
const submit = (event) => {
    // Checks the number of forms in the HTML and restricts adding if number is equal to ALLOWED_LENGTH_OF_FORM
    if(document.getElementById("newsletter-form").children.length === ALLOWED_LENGTH_OF_FORM){
        alert("Maximum 5 Elements can be added");
        return;
    }

    // Document Object to Show/Hide Button by toggling Classes
    let add_button = document.getElementsByClassName("add-friend-button");
    let remove_button = document.getElementsByClassName("remove-icon-button");
    
    // Create HTML FORM using JS
    let div = document.createElement("div");
    div.innerHTML = event.parentElement.parentElement.innerHTML;
    div.classList.add("input-elements");

    //Toggle Button Classes and Append HTML Form to Body
    add_button[event.parentElement.parentElement.parentElement.children.length -1].classList.toggle("hide");
    remove_button[event.parentElement.parentElement.parentElement.children.length -1].classList.remove("hide");
    document.getElementById("newsletter-form").appendChild(div);
}

// Function to remoce the corresponding Form whose Remove Button is clicked
const remove = (event) => {
    event.parentElement.parentElement.innerHTML= "";
    let list = document.getElementById("newsletter-form");   // Get the list of forms element with id="newsletter-form"
    for (let i=0; i<list.children.length; i++) {
        if (list.children[i].children.length === 0) {
            list.removeChild(list.children[i]);
            break;
        }
    }
}

// Function to send email using API Call
const sendEmail = () => {
    alert("Email Successfully Sent");
}

