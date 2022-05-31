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

const btnAddCartPod1 = document.getElementById("pod1")
const btnAddCartPod2 = document.getElementById("pod2")
const btnAddCartPod3 = document.getElementById("pod3")
const btnAddCartPod4 = document.getElementById("pod4")

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


btnAddCartPod1.addEventListener ("click", () => {
    cart.push(product[0]);
    cash.push(cashProducts[0]);
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

btnAddCartPod2.addEventListener ("click", () => {
    cart.push(product[1])
    cash.push(cashProducts[1]);
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

btnAddCartPod3.addEventListener ("click", () => {
    cart.push(product[2])
    cash.push(cashProducts[2]);
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

btnAddCartPod4.addEventListener ("click", () => {
    cart.push(product[3])
    cash.push(cashProducts[3]);
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

