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
let shoppingCartLength = document.querySelector(".cartLength")
let shoppingCartTotalCash = document.querySelector(".cashCart")
let getCartAmount = localStorage.getItem("Cart Amount") 
let getCartTotalCash = localStorage.getItem("Cart Total Cash")
let shoppingCart = document.querySelector(".shopping--cart")
let shoppingTotalCash = document.querySelector(".shopping--totalCash")

if (getCartAmount !== null) {
    shoppingCartLength.style.background = "red"
    shoppingCartLength.innerText = getCartAmount
    shoppingCart.style.display = "block"
}else {
    cartEmpty.style.display = "block"
}

if (getCartTotalCash !== null) {
    shoppingCartTotalCash.innerText = getCartTotalCash
    shoppingTotalCash.innerText = " " + getCartTotalCash
}



let getCartInfo = localStorage.getItem("Cart Info")

let cartTable = document.querySelector(".cart--table")
let addCartInfo = document.createElement("tbody")
let cartInfo = getCartInfo

addCartInfo.innerHTML = cartInfo
cartTable.appendChild(addCartInfo)

let reduceCart = document.querySelectorAll(".btn--reduceCart")
reduceCart.forEach(function(button,index) {
    button.addEventListener("click", (event) => {
        let btnReduceCart = event.target
        let changeCartAmount = ((btnReduceCart.parentElement).parentElement).querySelector(".cart--amount")
        let cartProduct = (changeCartAmount.parentElement).parentElement
        let changeCartTotalCash = cartProduct.querySelector(".cart--totalCash")
        let changeCartCash = cartProduct.querySelector(".cart--price")
        let cartAmount = Number(changeCartAmount.innerText)
        changeCartAmount.innerText = " " + (cartAmount - 1) + " "
        changeCartTotalCash.innerText = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(Number(changeCartCash.innerText) * (cartAmount - 1)) + " 000"

        if (changeCartAmount.innerText < 1) {
            cartAmount = 0
            changeCartTotalCash = 0
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
                shoppingTotalCash.innerText = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sumTotalCash) + " 000đ" 
            }

            if (sumAmount == 0) {
                shoppingCartLength.style.background = "none"
                shoppingCart.style.display = "none"
                cartEmpty.style.display = "block"
            }

            let setTbody = document.querySelector("tbody")
            localStorage.setItem("Cart Info", setTbody.innerHTML)
            localStorage.setItem("Cart Amount", shoppingCartLength.innerText)
            localStorage.setItem("Cart Total Cash", shoppingCartTotalCash.innerText)    
            cartProduct.remove()
        }

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
            shoppingTotalCash.innerText = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sumTotalCash) + " 000đ" 
        }

        let setTbody = document.querySelector("tbody")
        localStorage.setItem("Cart Info", setTbody.innerHTML)
        localStorage.setItem("Cart Amount", shoppingCartLength.innerText)
        localStorage.setItem("Cart Total Cash", shoppingCartTotalCash.innerText)
    })
})

let augmentCart = document.querySelectorAll(".btn--augmentCart")
augmentCart.forEach(function(button,index) {
    button.addEventListener("click", (event) => {
        let btnAugmentCart = event.target
        let changeCartAmount = ((btnAugmentCart.parentElement).parentElement).querySelector(".cart--amount")
        let cartProduct = (changeCartAmount.parentElement).parentElement
        let changeCartTotalCash = cartProduct.querySelector(".cart--totalCash")
        let changeCartCash = cartProduct.querySelector(".cart--price")
        let cartAmount = Number(changeCartAmount.innerText)
        changeCartAmount.innerText = " " + (cartAmount + 1) + " "
        changeCartTotalCash.innerText = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(Number(changeCartCash.innerText) * (cartAmount + 1)) + " 000"

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
            shoppingTotalCash.innerText = new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(sumTotalCash) + " 000đ" 
        }

        let setTbody = document.querySelector("tbody")
        localStorage.setItem("Cart Info", setTbody.innerHTML)
        localStorage.setItem("Cart Amount", shoppingCartLength.innerText)
        localStorage.setItem("Cart Total Cash", shoppingCartTotalCash.innerText)
    })
})



