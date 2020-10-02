var popular_cosmetics = 
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

var recommended_cosmetic = 
[
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
		"title":"Pink Lipstick",
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
    }
]

popular_cosmetics.forEach(x => {
    document.getElementsByClassName("popular")[0].innerHTML +=
    `
    <div class="cosmetic">
        <img src="./assets/images/popular-cosmetic/`+x.image+`" alt="" id="cosmetic-image">
        <div class="cosmetic-info">
            <div id="cosmetic-title">`+x.title+`</div>
            <div id="cosmetic-price">`+x.price+`</div>
        </div>
    </div>
    `
});

recommended_cosmetic.forEach(x => {
    document.getElementsByClassName("recommended")[0].innerHTML +=
    `
    <div class="cosmetic">
        <img src="./assets/images/recommended-cosmetic/`+x.image+`" alt="" id="cosmetic-image">
        <div class="cosmetic-info">
        <div id="cosmetic-title">`+x.title+`</div>
        <div id="cosmetic-price">`+x.price+`</div>
        </div>
    </div>
    `
});

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


$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }