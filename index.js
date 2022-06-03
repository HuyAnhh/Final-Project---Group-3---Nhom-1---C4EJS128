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

shoppingCartLength.innerText = getCartAmount
shoppingCartTotalCash.innerText = getCartTotalCash

let getCartInfo = localStorage.getItem("Cart Info")

if (getCartInfo !== null) {
    shoppingCartLength.style.background = "red"
} else {
    shoppingCartLength.style.background = "none"
}

let cartTable = document.querySelector(".cart--table")
let addCartInfo = document.createElement("tbody")
let cartInfo = getCartInfo

addCartInfo.innerHTML = cartInfo
cartTable.appendChild(addCartInfo)

// Giỏ Hàng

// let shoppingCart = []
// if (getCart !== null) {
//     shoppingCart = getCart
// }


// let shoppingCash = []
// if (getCash !== null) {
//     shoppingCash = getCash
// }



addCart.forEach(function(button,index) {
    button.addEventListener("click", (event) => {
        let btnCart = event.target
        let products = btnCart.parentElement
        let infoProducts = products.parentElement
        let cartName = products.querySelector(".product").innerText
        let cartCash = products.querySelector(".product--cash").innerText
        let cartImg = infoProducts.querySelector("img").src
        
        addCartTable(cartName, cartCash, cartImg)

        // shoppingCart.push(cartName)
        // cartLength.innerText = shoppingCart.length
        shoppingCartLength.style.background = "red"

        // shoppingCash.push(Number(cartCash))
        // let sum = 0 , i = 0
        // while (i < shoppingCash.length) {
        //     sum += shoppingCash[i];
        //     ++i;
        // }
        // let totalCash = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sum);
        // cashCart.innerText = totalCash + ",000đ"

        // localStorage.setItem("Cart", JSON.stringify(shoppingCart))
        // localStorage.setItem("Cash", JSON.stringify(shoppingCash))
        // localStorage.setItem("Total Cash", totalCash)
    })
})

function addCartTable(cartName, cashCart, cartImg) {
    let cartTable = document.querySelector("tbody")
    let addTr = document.createElement("tr")
    let cartItems = document.querySelectorAll("tbody tr")
    for (let i = 0 ; i < cartItems.length ; i++) {
        let nameOfCart = document.querySelectorAll(".cart--name")

        if (nameOfCart[i].innerHTML == cartName) {
            let sameCart = (nameOfCart[i].parentElement).parentElement; 
            let cartAmount = Number(sameCart.querySelector(".cart--amount").innerText)
            let cartTotalCash = Number(sameCart.querySelector(".cart--totalCash").innerText)
            sameCart.querySelector(".cart--amount").innerText = " " + (cartAmount + 1) + " "
            sameCart.querySelector(".cart--totalCash").innerText = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format((Number(cashCart * (cartAmount + 1)))) + " 000"

            let totalAmount = document.querySelectorAll(".cart--amount")
            let totalCash = document.querySelectorAll(".cart--totalCash")
            let productCash = document.querySelectorAll(".cart--price")

            let sumAmount = 0
            let sumTotalCash = 0
            for (let i = 0 ; i < totalAmount.length ; i++) {
                sumAmount += Number(totalAmount[i].innerText)
                shoppingCartLength.innerText = sumAmount
            }

            for (let i = 0 ; i < totalCash.length ; i++) {
                sumTotalCash += Number(productCash[i].innerText) * Number(totalAmount[i].innerText)
                shoppingCartTotalCash.innerText = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sumTotalCash) + ",000đ"
            }

            localStorage.setItem("Cart Amount", shoppingCartLength.innerText)
            localStorage.setItem("Cart Total Cash", shoppingCartTotalCash.innerText)
            localStorage.setItem("Cart Info", cartTable.innerHTML)
            return;
        }
    } 
    let trContent = '<td class="cart--img&name"><img class="cart--img" src="'+cartImg+'"><p class="cart--name">'+cartName+'</p></td><td class="cart--price">'+cashCart+'</td><td ><span ><button class="btn--reduceCart"n>-</button></span><span class="cart--amount"> 1 </span><span ><button class="btn--augmentCart">+</button></span></td><td class="cart--totalCash">'+cashCart+'</td>'
    addTr.innerHTML = trContent
    cartTable.appendChild(addTr) 

    let totalAmount = document.querySelectorAll(".cart--amount")
    let totalCash = document.querySelectorAll(".cart--totalCash")
    let productCash = document.querySelectorAll(".cart--price")
    let sumAmount = 0
    let sumTotalCash = 0
    for (let i = 0 ; i < totalAmount.length ; i++) {
        sumAmount += Number(totalAmount[i].innerText)
        shoppingCartLength.innerText = sumAmount
    }

    for (let i = 0 ; i < totalCash.length ; i++) {
        sumTotalCash += Number(productCash[i].innerText) * Number(totalAmount[i].innerText) 
        shoppingCartTotalCash.innerText = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sumTotalCash) + " 000đ"
    }

    localStorage.setItem("Cart Info", cartTable.innerHTML)
    localStorage.setItem("Cart Amount", shoppingCartLength.innerText)
    localStorage.setItem("Cart Total Cash", shoppingCartTotalCash.innerText)
}

