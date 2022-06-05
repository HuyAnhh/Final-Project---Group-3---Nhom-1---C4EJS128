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


let getUserName = localStorage.getItem("UserName")
if (getUserName !== null) {
    yourLogin.innerText = "Hello, " + getUserName;
}

let addCart = document.querySelectorAll(".btn--addCart")
let shoppingCart = document.querySelector(".shopping--cart")
let shoppingTotalCash = document.querySelector(".shopping--totalCash")
let shoppingCartLength = document.querySelector(".cartLength")
let shoppingCartTotalCash = document.querySelector(".cashCart")
let getCartAmount = localStorage.getItem("Cart Amount") 
let getCartTotalCash = localStorage.getItem("Cart Total Cash")

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
        linkTag.setAttribute("href", webLink);
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



