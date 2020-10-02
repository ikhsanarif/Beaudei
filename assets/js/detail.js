var all_cosmetic = 
[
    {
        "title":"Brown Bottle Medium",
        "price":"RP.35.000",
        "image" : "cosmetic1.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Bottle",
        "stock": 50
    },
    {
        "title":"Brown Bottle Long",
        "price":"RP.25.000",
        "image" : "cosmetic2.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Bottle",
        "stock": 30
    },
    {
        "title":"White Bottle Lotion",
        "price":"RP.40.000",
        "image" : "cosmetic3.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Body Lotion",
        "stock": 34
    },
    {
        "title":"Body Lotion",
        "price":"RP.20.000",
        "image" : "cosmetic4.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Body Lotion",
        "stock": 85
    },
    {
        "title":"Orange Bottle Medium",
        "price":"RP.22.500",
        "image" : "cosmetic5.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Bottle",
        "stock": 12
    },
    {
        "title":"Brown Bottle Large",
        "price":"RP.45.000",
        "image" : "cosmetic6.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Bottle",
        "stock": 15
    },
    {
        "title":"Brown Lipstick",
        "price":"RP.10.000",
        "image" : "cosmetic7.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Lipstick",
        "stock": 24
    },
    {
        "title":"Pink Lipstic",
        "price":"RP.10.000",
        "image" : "cosmetic8.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Lipstick",
        "stock": 43
    },
    {
        "title":"Red Lipstick",
        "price":"RP.10.000",
        "image" : "cosmetic9.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Lipstick",
        "stock": 12
    },
    {
        "title":"Purple Lipstick",
        "price":"RP.10.000",
        "image" : "cosmetic10.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Lipstick",
        "stock": 31
    },
    {
        "title":"Perfume Small",
        "price":"RP.50.000",
        "image" : "cosmetic11.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Perfume",
        "stock": 74
    },
    {
        "title":"Perfume Medium",
        "price":"RP.65.000",
        "image" : "cosmetic12.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Perfume",
        "stock": 46
    },
    {
        "title":"Perfume Large",
        "price":"RP.80.000",
        "image" : "cosmetic13.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Perfume",
        "stock": 37
    },
    {
        "title":"Makeup Brush Large",
        "price":"RP.35.000",
        "image" : "cosmetic14.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Brush",
        "stock": 76
    },
    {
        "title":"Makeup Brush Medium",
        "price":"RP.25.000",
        "image" : "cosmetic15.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Brush",
        "stock": 91
    },
    {
        "title":"Makeup Brush Small",
        "price":"Rp.15.000",
        "image" : "cosmetic16.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Brush",
        "stock": 94
    },
    {
        "title":"Eye Shadow Compact",
        "price":"RP.90.000",
        "image" : "cosmetic17.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Face",
        "stock": 54
    },
    {
        "title":"Powder Canister",
        "price":"RP.55.000",
        "image" : "cosmetic18.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Face",
        "stock": 73
    },
    {
        "title":"Manicure Tips",
        "price":"RP.15.000",
        "image" : "cosmetic19.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Fingers",
        "stock": 90
    },
    {
        "title":"Mascara",
        "price":"RP.25.000",
        "image" : "cosmetic20.png",
        "description" : "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "category" : "Fingers",
        "stock": 121
    }
]

var id = parseInt(window.location.href.split("id=")[1])

document.getElementsByClassName("image")[0].innerHTML+=
`
<img src="./assets/images/all-cosmetics/cosmetic`+id+`.png" alt="" height="100%">
`

id--

document.getElementsByClassName("info")[0].innerHTML+=
`
<div class="cosmetic-info">
    <div class="info-detail">Product Name</div>
    <div class="info-detail">`+all_cosmetic[id].title+`</div>
    <div class="info-detail">Price</div>
    <div class="info-detail">`+all_cosmetic[id].price+`</div>
    <div class="info-detail">Category</div>
    <div class="info-detail">`+all_cosmetic[id].category+`</div>
    <div class="info-detail">Stock</div>
    <div class="info-detail">`+all_cosmetic[id].stock+`</div>
    <div class="info-detail">Description</div>
    <div class="info-detail">`+all_cosmetic[id].description+`</div>
</div>

<div class="cosmetic-buttons-div">
    <button class="cosmetic-buttons" id="buy-button" onclick="validateBuy()">Buy</button>
</div>
`

function validateBuy(){
    if(localStorage.getItem("auth") == "success"){
        var buy = confirm("Buy this item?")
        if(buy == true){
            alert("Success!")
        }
    }
    else{
        var login = confirm("You must login first. Login now?")
        if(login == true){
            window.location.href = "./login.html"
        }
    }
}

if(window.localStorage.getItem("auth") == "success"){
    document.getElementsByClassName("buttons")[0].innerHTML+=
    `
    <div class="topnav" id="myTopnav">
        <a href="./cosmetic.html" id="cosmetics-button">Show all cosmetic</a>
        <a href="./addcosmetic.html" id="addcosmetics-button">Sell my cosmetic</a>
        <a href="./profile.html" id="profile-button">Profile</a>
        <a href="./login.html" id="login-button" onclick="logout()">Logout</a>
        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    </div>
    `
    document.getElementsByClassName("buttons")[0].style.width = "53%"
}
else{
    document.getElementsByClassName("buttons")[0].innerHTML+=
    `
    <div class="topnav" id="myTopnav">
    <a href="./cosmetic.html" id="cosmetics-button">Show all cosmetic</a>
    <a href="./login.html" id="login-button">Login</a>
    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
            <i class="fa fa-bars"></i>
        </a>
    <div>
    `
    document.getElementsByClassName("buttons")[0].style.width = "36%"
}

function logout(){
    window.localStorage.removeItem("auth")
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }