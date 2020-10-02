var all_cosmetics = 
[
    {
        "title":"Brown Bottle Medium",
        "price":"RP.35.000",
        "image" : "cosmetic1.png"
    },
    {
        "title":"Brown Bottle Long",
        "price":"RP.25.000",
        "image" : "cosmetic2.png"
    },
    {
        "title":"White Bottle Lotion",
        "price":"RP.40.000",
        "image" : "cosmetic3.png"
    },
    {
        "title":"Body Lotion",
        "price":"RP.20.000",
        "image" : "cosmetic4.png"
    },
    {
        "title":"Orange Bottle Medium",
        "price":"RP.22.500",
        "image" : "cosmetic5.png"
    },
    {
        "title":"Brown Bottle Large",
        "price":"RP.45.000",
        "image" : "cosmetic6.png"
    },
    {
        "title":"Brown Lipstick",
        "price":"RP.10.000",
        "image" : "cosmetic7.png"
    },
    {
        "title":"Pink Lipstic",
        "price":"RP.10.000",
        "image" : "cosmetic8.png"
    },
    {
        "title":"Red Lipstick",
        "price":"RP.10.000",
        "image" : "cosmetic9.png"
    },
    {
        "title":"Purple Lipstick",
        "price":"RP.10.000",
        "image" : "cosmetic10.png"
    },
    {
        "title":"Perfume Small",
        "price":"RP.50.000",
        "image" : "cosmetic11.png"
    },
    {
        "title":"Perfume Medium",
        "price":"RP.65.000",
        "image" : "cosmetic12.png"
    },
    {
        "title":"Perfume Large",
        "price":"RP.80.000",
        "image" : "cosmetic13.png"
    },
    {
        "title":"Makeup Brush Large",
        "price":"RP.35.000",
        "image" : "cosmetic14.png"
    },
    {
        "title":"Makeup Brush Medium",
        "price":"RP.25.000",
        "image" : "cosmetic15.png"
    },
    {
        "title":"Makeup Brush Small",
        "price":"Rp.15.000",
        "image" : "cosmetic16.png"
    },
    {
        "title":"Eye Shadow Compact",
        "price":"RP.90.000",
        "image" : "cosmetic17.png"
    },
    {
        "title":"Powder Canister",
        "price":"RP.55.000",
        "image" : "cosmetic18.png"
    },
    {
        "title":"Manicure Tips",
        "price":"RP.15.000",
        "image" : "cosmetic19.png"
    },
    {
        "title":"Mascara",
        "price":"RP.25.000",
        "image" : "cosmetic20.png"
    }
]

all_cosmetics.forEach((x,id) => {

    document.getElementsByClassName("all-cosmetics")[0].innerHTML +=
    `<div class="cosmetic" id="`+(id+1)+`" onclick="gotoDetail(`+(id+1)+`)">
        <img src="./assets/images/all-cosmetics/`+x.image+`" alt="" id="cosmetic-image">
        <div class="cosmetic-info">
            <div id="cosmetic-title">`+x.title+`</div>
            <div id="cosmetic-price">`+x.price+`</div>
        </div>
    </div>`
});

function gotoDetail(id){
    window.location.href = "./detail.html?id="+id
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