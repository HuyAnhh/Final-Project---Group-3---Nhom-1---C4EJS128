// Thông tin đăng nhập
let yourLogin = document.querySelector(".yourLogin")
let getUserName = localStorage.getItem("UserName")
let signout = document.querySelector(".signout")

if (getUserName !== null) {
    yourLogin.innerText = "HELLO, " + getUserName;
    yourLogin.href = "";
    signout.style.display = "block"
    signout.style.cursor = "pointer"
    signout.addEventListener("click", () => {
        let ask = confirm("Bạn muốn đăng xuất?");
        if (ask) {
            localStorage.removeItem("UserName");
            window.location.href="index.html"
        }
    })
}

// Lấy dữ liệu LocalStorage cho giỏ hàng
let cartEmpty = document.querySelector(".cart--empty")

let cartLength = document.querySelector(".cartLength")
let cashCart = document.querySelector(".cashCart")
let getCart = JSON.parse(localStorage.getItem("Cart"))
let getTotalCash = localStorage.getItem("Total Cash")
let getCash = JSON.parse(localStorage.getItem("Cash"))
let shoppingCart = document.querySelector(".shopping--cart")
let shoppingTotalCash = document.querySelector(".shopping--totalCash")
if (getCart !== null) {
    cartLength.style.background = "red"
    cartLength.innerText = getCart.length
    shoppingCart.style.display = "block"
}else {
    cartEmpty.style.display = "block"
}

if (getTotalCash !== null) {
    cashCart.innerText = getTotalCash + ",000đ"
    shoppingTotalCash.innerText = " " + getTotalCash + ",000đ"
}



let getCartInfo = localStorage.getItem("Cart Info")

let cartTable = document.querySelector(".cart--table")
let addCartInfo = document.createElement("tbody")
let cartInfo = getCartInfo

addCartInfo.innerHTML = cartInfo
cartTable.appendChild(addCartInfo)



