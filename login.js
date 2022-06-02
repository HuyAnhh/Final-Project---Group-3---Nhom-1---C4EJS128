let inputYourID = document.querySelector(".inputYourID")
let inputYourPass = document.querySelector(".inputYourPass")
let login = document.querySelector(".button--login")
let yourInput = document.querySelector(".yourInput")
let idError = document.querySelector(".errorID")
let passError = document.querySelector(".errorPass")
let yourLogin = document.querySelector(".yourLogin")



yourInput.addEventListener ("submit", (event) => {
    event.preventDefault();
    const valueID = inputYourID.value;
    const valuePass = inputYourPass.value;

    // if (valueID.length < 1) {
    //     idError.style.display = "block"
    // }
    
    // if (valuePass.length < 6 || valueID.length < 1) {
    //     passError.style.display = "block";
    // }else {
    //     localStorage.setItem("UserName", valueID)
    //     yourLogin.innerText = "Hello, " + valueID;
    //     window.location.href="index.html"
    // }

    if (valueID < 1) {
        idError.style.display = "block"
    } else if (valuePass.length < 6) {
        passError.style.display = "block";
    } else {
            localStorage.setItem("UserName", valueID)
            yourLogin.innerText = "Hello, " + valueID;
            window.location.href="index.html"
        }
})


let getUserName = localStorage.getItem("UserName")
if (getUserName !== null) {
    yourLogin.innerText = "Hello, " + getUserName;
}

let addCart = document.querySelectorAll(".btn--addCart")
let cartLength = document.querySelector(".cartLength")
let cashCart = document.querySelector(".cashCart")
let getCart = JSON.parse(localStorage.getItem("Cart"))
let getTotalCash = localStorage.getItem("Total Cash")
let getCash = JSON.parse(localStorage.getItem("Cash"))

if (getCart !== null) {
    cartLength.style.background = "red"
    cartLength.innerText = getCart.length
}

if (getTotalCash !== null) {
    cashCart.innerText = getTotalCash + ",000đ"
}




