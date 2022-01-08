const signupSection = document.querySelector(".signup");
const signinButton = document.querySelector(".signin");
const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal-container");
const modalHeader = document.querySelector(".modal-header");
const errorMessage = document.querySelector(".error-message");

const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const submitSignup = document.getElementById("submit-signup");
const nameForSignup = document.getElementById("input-name");
const emailForSignup = document.getElementById("input-email");
const passwordForSignup = document.getElementById("input-password");
const submitSignin = document.getElementById("submit-signin");
const emailForSignin = document.getElementById("input-email2");
const passwordForSignin = document.getElementById("input-password2");

const errorFound = (message, e) => {
    e.preventDefault();
    errorMessage.innerHTML = message.join(' ');
}

//checks that all password requirments are met
const passwordCheck = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*., ?]).+$/;
    
    return regex.test(passwordForSignup.value);
}

//Checks that all input requirements are filled out before signing in
const formValidation2 = (e) => {
    let message = [];
    
    if (emailForSignin.value.trim() === "")
    {
        message.push("Email required<br>");
        errorFound(message, e);
    }
    
    if (passwordForSignin.value.trim() === "")
    {
        message.push("Password required");
        errorFound(message, e);
    }
}

//Checks that all input requiremnts are met in the signup form
const formValidation = (e) => {
    let message = [];

    if (nameForSignup.value.trim() === "")
    {
        message.push("Name required<br>");
        errorFound(message, e);
    }
    
    if (emailForSignup.value.trim() === "")
    {
        message.push("Email required<br>");
        errorFound(message, e);
    }

    // Checks that password input mets the required length of characters 
    // than calls to check for specified character requirements
    if (passwordForSignup.value.trim().length >= 6 && passwordForSignup.value.trim().length <= 17)
    {
        if (!passwordCheck())
        {
            message.push("Something is missing");
            errorFound(message, e);
        }
    }
    else
    {
        message.push("Password must contain 6 - 17 characters");
        errorFound(message, e);
    }          
}

// Controls modal display
const modalOperator = () => {
    modal.classList.add("display-modal");
    document.body.style.overflow = "hidden";
}

// Exit out of modal
const handleModalExit = () => {
    modal.classList.toggle("display-modal");
    document.body.style.overflow = "visible";
    signupForm.style.display = "none";
    signinForm.style.display = "none";
    errorMessage.innerHTML = ``;
    signupForm.reset();
    signinForm.reset();
}

// Controls sign up form layout
const handleSignup = () => {
    modalOperator();
    modalHeader.innerHTML = `Create your account`;
    signupForm.style.display = "block";
}

// Controls the sign in form layout
const handleSignin = () => {
    modalOperator();
    modalHeader.innerHTML = `Sign in to Meet`;
    signinForm.style.display = "block";
}

signinButton.addEventListener("click", handleSignin);

signupSection.addEventListener("click", handleSignup);

closeButton.addEventListener("click", handleModalExit);

submitSignup.addEventListener("click", formValidation);

submitSignin.addEventListener("click", formValidation2);