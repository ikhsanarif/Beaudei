var my_cosmetic = 
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
    }
]

my_cosmetic.forEach(x => {
    document.getElementsByClassName("my-cosmetics")[0].innerHTML +=
    `<div class="cosmetic">
        <img src="./assets/images/my-cosmetics/`+x.image+`" alt="" id="cosmetic-image">
        <div class="cosmetic-info">
            <div id="cosmetic-title">`+x.title+`</div>
            <div id="cosmetic-price">`+x.price+`</div>
        </div>
    </div>`
});

var user = JSON.parse(window.localStorage.getItem("user"))

document.getElementById("profile-info").innerHTML +=
`
<label for="" id="profile-name">`+user.fullname+`</label><br>
`

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
    alert("You should login first")
    window.location.href = "./login.html"
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