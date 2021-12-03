const signinButton = document.querySelector(".signin");
const closeButton = document.querySelector(".close");
const modal = document.querySelector(".modal-container");

const handleModalExit = () => {
    modal.classList.toggle("display-modal");
    document.body.style.overflow = "visible";
}

const handleSignin = () => {
    modal.classList.add("display-modal");
    document.body.style.overflow = "hidden";
}

signinButton.addEventListener("click", handleSignin);

closeButton.addEventListener("click", handleModalExit);