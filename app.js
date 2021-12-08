const signupSection = document.querySelector(".signup");
const signinButton = document.querySelector(".signin");
const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal-container");
const modalHeader = document.querySelector(".modal-header");
const signupForm = document.getElementById("signup-form");
const signinForm = document.getElementById("signin-form");
const submitButton = document.getElementById("modal-button");

// Exit out of modal
const handleModalExit = () => {
    modal.classList.toggle("display-modal");
    document.body.style.overflow = "visible";
    signupForm.style.display = "none";
    signinForm.style.display = "none";
}

// Controls sign up form
const ControlSignup = () => {
    modalHeader.innerHTML = "Create your account";
    modal.classList.add("display-modal");
    signupForm.style.display = "block";
    submitButton.style.backgroundColor = "#4D96A9";
    document.body.style.overflow = "hidden";
}

// Controls the sign in form
const handleSignin = () => {
    modalHeader.innerHTML = "Sign in to Meet";
    modal.classList.add("display-modal");
    signinForm.style.display = "block";
    document.body.style.overflow = "hidden";
}

signinButton.addEventListener("click", handleSignin);

signupSection.addEventListener("click", ControlSignup);

closeButton.addEventListener("click", handleModalExit);