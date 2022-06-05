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




let getCartInfo = localStorage.getItem("Cart Info")



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

// Tìm kiếm sản phẩm
const searchWrapper = document.querySelector(".search");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".btn--search");
let linkTag = searchWrapper.querySelector("a");
let webLink;

inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user enetered data
    let emptyArray = [];
    if(userData){
        icon.onclick = ()=>{
            webLink = `https://www.google.com/search?q=${userData}`;
            linkTag.setAttribute("href", webLink);
            linkTag.click();
        }
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active");
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    icon.onclick = ()=>{
        webLink = `https://www.google.com/search?q=${selectData}`;
        // linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
let suggestions = [
    "Rincoe Jellybox Nano X Pod Kit",
    "Smok Nfix Pod Kit 25W",
    "Vinci Q Pod Kit by Voopoo",
    "Smoant Charon Baby Plus 35W Pod Kit",
    "Usalt E-Liquid Dưa Gang Lạnh 30ml 50mg",
    "Usalt E-Liquid Xoài Lạnh 30ml 50mg",
    "Usalt E-Liquid Dâu Lạnh 30ml 50mg",
    "Usalt E-Liquid Táo Lạnh 30ml 50mg",
];

let yourInputSearch = document.querySelector(".input--search")
let yourSearch = document.querySelector(".yourSearch")

yourSearch.addEventListener("submit", (event) => {
    event.preventDefault()
    let valueSearch = yourInputSearch.value
    let productName = document.querySelectorAll(".product")

    for (let i = 0 ; i < productName.length; i++) {
        if (valueSearch === "") {
            alert("Nhập sản phẩm bạn muốn tìm kiếm")
            break;
        }else if (valueSearch === productName[i].innerText) {
            let productInfo = (productName[i].parentElement).parentElement
            let productSearchImg = productInfo.querySelector("img").src
            let productSearchName = productInfo.querySelector(".product").innerText
            let productSearchCash = productInfo.querySelector(".product--cash").innerText
            let resultSearch = document.querySelector(".resultSearch")
            let addProductSearch = document.createElement("div")
            let productSearchResult = '<div class="search--result"><div class="search--product--img"><img src="'+productSearchImg+'"></div><div class="search--product--info"><br><br><h2 class="search--product--name">'+productSearchName+'</h2><br><h5 class="search--product--cash">'+productSearchCash+'</h5><span>đ</span><p>Sản phẩm mang tính chất minh họa. Trang web này là Project cuối khóa đến từ 2 thành viên Nguyễn Huy Anh và Trần Thiên Quốc - lớp C4EJS128 tại MindX Thành Công, dưới sự hướng dẫn của Mentor Phan Mạnh Hào và thầy giáo Biện Thành Chung. Rất cảm ơn mọi người đã đón nhận !!!</p></div></div>'
            addProductSearch.innerHTML = productSearchResult
            resultSearch.appendChild(addProductSearch)

            let setSearchResult = document.querySelector(".resultSearch")
            localStorage.setItem("Your Search", setSearchResult.innerHTML)
            window.location.href="searchResult.html"
        }
    }
})

