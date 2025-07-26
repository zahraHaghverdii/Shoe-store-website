let btnLoginSignin = document.querySelector(".btn-login-signin")
let bodalErrorSuccess = document.querySelector(".modal-error-success")

//inputs
let nameInput = document.getElementById("name-input")
let emailInput = document.getElementById("email-input")
let passwordInput = document.getElementById("password-input")

// result text
let titeleResult = document.querySelector(".titele-result p")

//icon result modal
let iconCloseModal = document.querySelector(".icon-close i")

// cookie items
let userName = getCookie("userName")
let userEmail = getCookie("userEmail")
let userPassword = getCookie("userPassword")

// function button login signin
btnLoginSignin.addEventListener("click" , (event)=>{
    event.preventDefault()

    //add modal
    bodalErrorSuccess.classList.add("active-modal-error-success")
    funcValidationInput()

    //remove modal
    setTimeout(function () {
        bodalErrorSuccess.classList.remove("active-modal-error-success")
      }, 2500);
})

// close modal
let iconClose = document.getElementById("iconClose")
iconClose.addEventListener("click" , ()=>{
    //remove modal
    bodalErrorSuccess.classList.remove("active-modal-error-success")
})

// show password input password
let showPassword = document.getElementById("showPassword")
showPassword.addEventListener("click" , ()=>{
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showPassword.classList.add("fa-eye-slash")
    } else {
        passwordInput.type = "password";
        showPassword.classList.remove("fa-eye-slash")
    }
})


//function validation inputs
function funcValidationInput() {
    var atposition = emailInput.value.indexOf("@");
    var dotposition = emailInput.value.lastIndexOf(".");

    //input name
    if (nameInput.value.trim() == "") {
        erroreFunc(nameInput , "مشخصات خود را تکمیل کنید")
    } else if(nameInput.value.length <= 3){
        erroreFunc(nameInput , "نام وارد شده صحیح نیست")
    } 
    //input email
    else if (emailInput.value.trim() == "") {
        erroreFunc(emailInput , "مشخصات خود را تکمیل کنید")
    } else if (
        
        emailInput.value.length <= 9 ||
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= emailInput.length
    ) {
        erroreFunc(emailInput,"ایمیل وارد شده صحیح نیست")
    }
    //input password
    else if (passwordInput.value.trim() == "") {
        erroreFunc(passwordInput , "مشخصات خود را تکمیل کنید")
    } else if(passwordInput.value.length <= 8){
        erroreFunc(nameInput , "حداقل کاراکتر 8 است")
    // check set cookie  userName
    } else if (userName !== nameInput.value) {
        erroreFunc(nameInput , "نام وارد شده اشتباه است")
    } 
    //check set cookie  userEmail
    else if (userEmail !== emailInput.value) {
        erroreFunc(emailInput , "ایمیل وارد شده اشتباه است")
    }
    // check set cookie  userEmail
    else if (userPassword !== passwordInput.value) {
        erroreFunc(userPassword , "رمز عبور وارد شده اشتباه است")
    }
    //else
    else {
        successFunc(nameInput)
        successFunc(emailInput)
        successFunc(passwordInput ,"خوش امدید.")
        //add modal
        bodalErrorSuccess.classList.add("active-modal-error-success")
        iconCloseModal.classList.remove("fa-times-circle")
        iconCloseModal.classList.add("fa-check")
        bodalErrorSuccess.style.background =  "rgb(1 ,153, 9)";

        setTimeout(function () {
            window.location.replace("index.html");
          }, 1500);
    }

}

// function error
function erroreFunc(inputElement,msg) {
    inputElement.classList.add("error-input")
    titeleResult.innerHTML = msg
}

// function success
function successFunc(inputElement,msg) {
    inputElement.classList.add("success-input")
    titeleResult.innerHTML = msg
}



//get cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}