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

let getCartInfo = localStorage.getItem("Cart Info")
let cartTable = document.querySelector(".cart--table")
let addCartInfo = document.createElement("tbody")
let cartInfo = getCartInfo

addCartInfo.innerHTML = cartInfo
cartTable.appendChild(addCartInfo)

// Giỏ Hàng

let shoppingCart = []
if (getCart !== null) {
    shoppingCart = getCart
}


let shoppingCash = []
if (getCash !== null) {
    shoppingCash = getCash
}



addCart.forEach(function(button,index) {
    button.addEventListener("click", (event) => {
        let btnCart = event.target
        let products = btnCart.parentElement
        let infoProducts = products.parentElement
        
        let cartName = products.querySelector(".product").innerText
        let cartCash = products.querySelector(".product--cash").innerText
        let cartImg = infoProducts.querySelector("img").src
        
        addCartTable(cartName, cartCash, cartImg)

        shoppingCart.push(cartName)
        cartLength.innerText = shoppingCart.length
        cartLength.style.background = "red"

        shoppingCash.push(Number(cartCash))
        let sum = 0 , i = 0
        while (i < shoppingCash.length) {
            sum += shoppingCash[i];
            ++i;
        }
        let totalCash = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sum);
        cashCart.innerText = totalCash + ",000đ"

        localStorage.setItem("Cart", JSON.stringify(shoppingCart))
        localStorage.setItem("Cash", JSON.stringify(shoppingCash))
        localStorage.setItem("Total Cash", totalCash)
    })
})

function addCartTable(cartName, cashCart, cartImg) {
    let cartTable = document.querySelector("tbody")
    let addTr = document.createElement("tr")
    let trContent = '<td class="cart--img&name"><img class="cart--img" src="'+cartImg+'"><p class="cart--name">'+cartName+'</p></td><td class="cart--price">'+cashCart+'đ</td><td class="cart--amount">1</td><td class="cart--totalCash">'+cashCart+'</td>'
    addTr.innerHTML = trContent
    cartTable.appendChild(addTr) 
    localStorage.setItem("Cart Info", cartTable.innerHTML)
    getCartInfo += trContent  
}

