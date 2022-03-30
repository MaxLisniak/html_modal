let signUpBtn = document.querySelector("#sign-up-btn");
signUpBtn.addEventListener('click', () => {
    let pageBody = document.querySelector("body");
    pageBody.style.overflow = "hidden";
    let modal = document.querySelector(".bg-modal");
    modal.style.display = "flex";
});