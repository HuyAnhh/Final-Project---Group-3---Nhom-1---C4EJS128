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
let shoppingCart = document.querySelector(".shopping--cart")
let shoppingTotalCash = document.querySelector(".shopping--totalCash")
let shoppingCartLength = document.querySelector(".cartLength")
let shoppingCartTotalCash = document.querySelector(".cashCart")
let getCartAmount = localStorage.getItem("Cart Amount") 
let getCartTotalCash = localStorage.getItem("Cart Total Cash")

if (getCartAmount === "0") {
    shoppingCartLength.style.background = "red"
    shoppingCartLength.innerText = getCartAmount
    
    shoppingCart.style.display = "none"
}else {
    
    shoppingCartLength.style.background = "red"
    shoppingCartLength.innerText = getCartAmount
}

if (getCartTotalCash !== "0") {
    shoppingCartTotalCash.innerText = getCartTotalCash
    shoppingTotalCash.innerText = " " + getCartTotalCash
}




