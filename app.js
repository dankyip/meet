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

const arrayOfSp = ["!", "@", "#", "$", "%", "&", "*", "_", "-", "?"];

const special = (c) => {
    for (let i = 0; i < arrayOfSp.length; i++)
    {
        if (c === arrayOfSp[i])
        {
            return true;
        }
    }
    return false;
}

const errorFound = (message, e) => {
    e.preventDefault();
    errorMessage.innerHTML = message.join(' ,'); 
}

//checks that all password requirments are met
const passwordCheck = (e) => {
    let message = [];
    let passwordValue = "";
    let upperCaseCheck = false;
    let lowerCaseCheck = false;
    let specialCharacterCheck = false;
    
    if (passwordForSignup.value.length >= 6 && passwordForSignup.value.length <= 17)
    {    
        for (let i = 0; i < passwordForSignup.value.length; i++)
        {
            passwordValue = passwordForSignup.value[i];

            if (special(passwordValue))
            {
                specialCharacterCheck = true;
            }
            else if (passwordForSignup.value[i] === passwordValue.toUpperCase())
            {
                upperCaseCheck = true;
            }
            else if (passwordForSignup.value[i] === passwordValue.toLowerCase())
            {
                lowerCaseCheck = true;
            }
        }
        if (!upperCaseCheck || !lowerCaseCheck || !specialCharacterCheck)
        {
            message.push("Something is missing, try again");
            errorFound(message, e);
        }
    }
        
    else 
    {
        message.push("Password must contain 6 - 17 characters");
        errorFound(message, e);
    }
    
}

const formValidation2 = (e) => {
    let message = [];
    
    if (emailForSignin.value === "" && passwordForSignin.value === "")
    {
        message.push("Email and Password required");
        errorFound(message, e);
    }
    else if (emailForSignin.value === "")
    {
        message.push("Email required");
        errorFound(message, e);
    }
    else if (passwordForSignin.value === "")
    {
        message.push("Password required");
        errorFound(message, e);
    }
}

//Checks that all input requiremnts are met in the signup form
const formValidation = (e) => {
    let message = [];

    if (nameForSignup.value === "")
    {
        message.push("Name required");
        errorFound(message, e);
    }
    
    else if (emailForSignup.value === "")
    {
        message.push("Email required");
        errorFound(message, e);
    }
    else 
    {
        passwordCheck(e);        
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