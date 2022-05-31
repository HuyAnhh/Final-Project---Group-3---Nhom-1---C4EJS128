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

// let yourLogin = document.querySelector(".yourLogin")
let cartLength = document.querySelector(".cartLength")
let cashCart = document.querySelector(".cashCart")
let getUserName = localStorage.getItem("UserName")
let getCartLength = localStorage.getItem("CartLength")
let getCashCart = JSON.parse(localStorage.getItem("CashCart"))
let getCart = JSON.parse(localStorage.getItem("Cart"))

if (getUserName !== null) {
    yourLogin.innerText = "HELLO, " + getUserName;
}

if (getCartLength !== null) {
    cartLength.innerText = getCartLength;
}

if (getCashCart !== null) {
    let sum = 0, i = 0
    while ( i < getCashCart.length) {
    sum += getCashCart[i];
    ++i;    
    }
    cashCart.innerText = sum + " 000đ";
}




