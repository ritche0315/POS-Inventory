window.addEventListener("load", init);


//global variables

const username_data = document.getElementById("username-textfield");
const password_data = document.getElementById("password-textfield");
const loginButton = document.getElementById("submit-button");
const formEl = document.querySelector(".main > form");

function init(){
    loginButton.addEventListener("click", () => {
        if(loginValidate() != ""){
            displayError(loginValidate());
        }else{
            login();
        }
    });
}


function login(){
    const xhr = new XMLHttpRequest();
    let url = "../controllers/login-controller.php";

    xhr.open("POST", url);
    xhr.onload = () =>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let serverResponse = JSON.parse(xhr.response);
            if(serverResponse.isExist === 1){
                
                setTimeout(()=>{
                    window.location.href = "../views/admin-view.php";
                }, 3000)
                
                var count = 1;
                setInterval(()=>{
                    var succesStr = "Successfully Login!"+"\n"+"Welcome "+serverResponse.user+"\n"+"Logging in "+count;
                    successLogin(succesStr);
                    count++;
                }, 1000)
            }else{
                displayError("Incorrect Username or Password");
            }

        }else{
            console.log("Something wrong on the url");
        }
    }


    let credential = {
        username:username_data.value,
        password:password_data.value
    }

    let toJSON = JSON.stringify(credential);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("login="+toJSON);
}

function loginValidate(){
    let str = "";
    if(username_data.value == "" && password_data.value == ""){
        str = "Username and Password fields are empty!";
        return "Please fill in all the required fields!\n\n"+str;
    }else{
        if(username_data.value == ""){
            str = "Username field is empty";
            return "Please fill in all the required fields!\n\n"+str;
        }else{
            if(password_data.value == ""){
                str = "Password field is empty";
                return "Please fill in all the required fields!\n\n"+str;
            }
        }
        
    
    }
    
   return str;
}
function successLogin(successMessage){
    const successError = document.querySelector(".successError");
    successError.textContent = successMessage;
    // styling
    successError.style.backgroundColor = "#69F0AE";
    successError.style.margin = "10px";
    successError.style.border = "solid 2px #00E676";
    successError.style.padding = "5px";
    successError.style.textAlign = "center";
    successError.style.whiteSpace = "pre-line";
    successError.style.animation = "animationSuccessError 0.3s";
}

function displayError(errorMessage){
    const successError = document.querySelector(".successError");
    successError.textContent = errorMessage;
    // styling
    successError.style.backgroundColor = "#FFCDD2";
    successError.style.margin = "10px";
    successError.style.border = "solid 2px #EF5350";
    successError.style.padding = "5px";
    successError.style.textAlign = "center";
    successError.style.whiteSpace = "pre-line";
    successError.style.animation = "animationSuccessError 0.3s";
}