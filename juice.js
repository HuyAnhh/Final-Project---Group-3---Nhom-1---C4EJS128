let yourLogin = document.querySelector(".yourLogin")
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

const btnAddCartJuice1 = document.getElementById("juice1")
const btnAddCartJuice2 = document.getElementById("juice2")
const btnAddCartJuice3 = document.getElementById("juice3")
const btnAddCartJuice4 = document.getElementById("juice4")

let product = [
    "Rincoe Jellybox Nano X Pod Kit",
    "Smok Nfix Pod Kit 25W",
    "Vinci Q Pod Kit by Voopoo",
    "Smoant Charon Baby Plus 35W Pod Kit",
    "Usalt E-Liquid Dưa Gang Lạnh 30ml 50mg",
    "Usalt E-Liquid Xoài Lạnh 30ml 50mg",
    "Usalt E-Liquid Dâu Lạnh 30ml 50mg",
    "Usalt E-Liquid Táo Lạnh 30ml 50mg",
]

let cart = []
if (getCart !== null) {
    cart = getCart
}


let cashProducts = [
    650.000,
    550.000,
    650.000,
    650.000,
    320.000,
    320.000,
    320.000,
    320.000,
]

let cash = []
if (getCashCart !== null) {
    cash = getCashCart
}

btnAddCartJuice1.addEventListener ("click", () => {
    cart.push(product[4])
    cash.push(cashProducts[4]);
    cartLength.innerText = cart.length
    let sum = 0, i = 0
    while ( i < cash.length) {
    sum += cash[i];
    ++i;
}
    cashCart.innerText = sum + " 000đ"
    localStorage.setItem("Cart", JSON.stringify(cart))
    localStorage.setItem("CartLength", cart.length);
    localStorage.setItem("CashCart", JSON.stringify(cash))
})

btnAddCartJuice2.addEventListener ("click", () => {
    cart.push(product[5])
    cash.push(cashProducts[5]);
    cartLength.innerText = cart.length
    let sum = 0, i = 0
    while ( i < cash.length) {
    sum += cash[i];
    ++i;
}
    cashCart.innerText = sum + " 000đ"
    localStorage.setItem("Cart", JSON.stringify(cart))
    localStorage.setItem("CartLength", cart.length);
    localStorage.setItem("CashCart", JSON.stringify(cash))
})

btnAddCartJuice3.addEventListener ("click", () => {
    cart.push(product[6])
    cash.push(cashProducts[6]);
    cartLength.innerText = cart.length
    let sum = 0, i = 0
    while ( i < cash.length) {
    sum += cash[i];
    ++i;
}
    cashCart.innerText = sum + " 000đ"
    localStorage.setItem("Cart", JSON.stringify(cart))
    localStorage.setItem("CartLength", cart.length);
    localStorage.setItem("CashCart", JSON.stringify(cash))
})

btnAddCartJuice4.addEventListener ("click", () => {
    cart.push(product[7])
    cash.push(cashProducts[7]);
    cartLength.innerText = cart.length
    let sum = 0, i = 0
    while ( i < cash.length) {
    sum += cash[i];
    ++i;
}
    cashCart.innerText = sum + " 000đ"
    localStorage.setItem("Cart", JSON.stringify(cart))
    localStorage.setItem("CartLength", cart.length);
    localStorage.setItem("CashCart", JSON.stringify(cash))
})