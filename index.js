let yourLogin = document.querySelector(".yourLogin")
let getItem = localStorage.getItem("UserName")

yourLogin.innerText = "HELLO, " + getItem;

const btnAddCartPod1 = document.getElementById("pod1")
const btnAddCartPod2 = document.getElementById("pod2")
const btnAddCartPod3 = document.getElementById("pod3")
const btnAddCartPod4 = document.getElementById("pod4")

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

let cartLength = document.querySelector(".cartLength")
let cashCart = document.querySelector(".cashCart")


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
})

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
})


