function validateAddBook(){
    var title = document.getElementById("title").value
    var price = document.getElementById("price").value
    var category = document.getElementById("category").selectedIndex
    var language = document.getElementById("language").selectedIndex
    var stock = document.getElementById("page").value
    var description = document.getElementById("description").value
    var cover = document.getElementById("cover-input").files
    var sell = document.getElementById("sell-check").checked

    if(title == "" || price == "" || category == 0 || language == 0 || stock == "" || page == "0" || description == "" || cover.length == 0 || (!sell))
    {
        alert("No empty field please")
    }
    else{
        alert("Insert success!")
        window.location.href = "./home.html"
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