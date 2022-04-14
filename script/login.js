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

            let serverResponse = JSON.parse(xhr.responseText);
            if(serverResponse.isExist == 1){
                alert("Welcome "+fullname);
            }
        }else{
            console.log("Something wrong on the url");
        }
    }


    let credential = {
        username:username_data,
        password:password_data
    }

    let toJSON = JSON.stringify(credential);
    xhr.send(toJSON);
}

function loginValidate(){
    let str = "";
    if(username_data.value == "" && password_data.value == ""){
        str = "Username and Password fields are empty!";
    }else{
        if(username_data.value == ""){
            str = "Username field is empty";
        }else{
            if(password_data.value == ""){
                str = "Password field is empty";
            }
        }
        
    
    }
    
    return "Please fill in all the required fields!\n\n"+str;
}