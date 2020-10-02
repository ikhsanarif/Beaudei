function validateLogin(){
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var user = JSON.parse(window.localStorage.getItem("user"))
    console.log(user)
    if(email == "" || password == ""){
        alert("No empty field please")
    }
    else if(email != user.email || password != user.password){
        alert("email or password invalid")
    }
    else {
        window.localStorage.setItem("auth", "success")
        window.location.href = "./home.html"
    }
}