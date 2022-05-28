let inputYourID = document.querySelector(".inputYourID")
let inputYourPass = document.querySelector(".inputYourPass")
let login = document.querySelector(".button--login")
let yourInput = document.querySelector(".yourInput")
let passError = document.querySelector(".error")
let yourLogin = document.querySelector(".yourLogin")



yourInput.addEventListener ("submit", (event) => {
    event.preventDefault();
    const valueID = inputYourID.value;
    const valuePass = inputYourPass.value;
    
    if (valuePass.length < 6) {
        passError.style.display = "block"
    }
    localStorage.setItem("UserName", valueID)
    yourLogin.innerText = "Hello, " + valueID;
    window.location.href="index.html"
    
})

console.log (valueID)




