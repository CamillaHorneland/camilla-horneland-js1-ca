const form = document.querySelector("#contactForm");
const yourName = document.querySelector("#yourName");
const yourNameError = document.querySelector("#yourNameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const message = document.querySelector("#message");
const button = document.querySelector("btn");


function validateForm(event) {
    event.preventDefault();

       if (checkLength(yourName.value, 5) === true) {
        yourNameError.style.display = "none";
    } else {
        yourNameError.style.display = "block";
    }

     if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkLength(address.value, 15) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

  console.log("hello");
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

// message.innerHTML = "";


//  function submitForm(event) {
//     event.preventDefault();
//     message.innerHTML = '<div class="message">Your message has been sent</div>';
//     form.reset();
// }

// form.addEventListener("submit", submitForm);






