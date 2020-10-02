function validateRegister(){
    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var customeraddress = document.getElementById("address").value
    var customergender = document.getElementById("gender").value
    var birthdate = document.getElementById("birthdate").valueAsDate
    var skintype = document.getElementById("skintype").value
    
    if(skintype == "" || fullname == "" || email == "" || password == "" || fullname == "" || birthdate == null){
        alert("No empty field please")
    }
    else if(customergender == "Default")
    {
        alert("Please choose a gender")
    }
    else {
        window.localStorage.setItem("user",JSON.stringify({
            "fullname" : fullname,
            "email" : email,
            "password" : password,
            "address" : customeraddress,
            "gender" : customergender,
            "birthdate" : birthdate,
            "skintype" : skintype
        }))
        window.location.href = "./login.html"
    }
}