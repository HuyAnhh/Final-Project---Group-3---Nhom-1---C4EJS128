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
let addCart = document.querySelectorAll(".btn--addCart")
let shoppingCartLength = document.querySelector(".cartLength")
let shoppingCartTotalCash = document.querySelector(".cashCart")
let getCartAmount = localStorage.getItem("Cart Amount") 
let getCartTotalCash = localStorage.getItem("Cart Total Cash")
let getCash = JSON.parse(localStorage.getItem("Cash"))


if (getCartAmount == null) {
    shoppingCartLength.innerText = getCartAmount
}else {
    shoppingCartLength.style.background = "red"
    shoppingCartLength.innerText = getCartAmount
}

if (getCartTotalCash !== null) {
    shoppingCartTotalCash.innerText = getCartTotalCash
    shoppingCartTotalCash.innerText = " " + getCartTotalCash
}

// Lấy dữ liệu Search
let getSearchResult = localStorage.getItem("Your Search")

let resultSearch = document.querySelector(".resultSearch")
let addProductSearch = document.createElement("div")
addProductSearch.innerHTML = getSearchResult
resultSearch.appendChild(addProductSearch)


