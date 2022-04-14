window.addEventListener("load", init);


//global variables

const username_data = document.getElementById("username-textfield");
const password_data = document.getElementById("password-textfield");
const loginButton = document.getElementById("submit-button");
function init(){
    loginButton.addEventListener("click", () => {
        if(loginValidate() != ""){
            alert(loginValidate());
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
                alert("Welcome "+serverResponse.user);
                window.location.href = "../views/admin-view.php";
            }else{
                alert("Incorrect Username or Password");
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