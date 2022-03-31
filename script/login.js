
function clientFormValidation(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username == "" && password == ""){
        document.getElementById("username-validate-message").style.display = "block";
        document.getElementById("password-validate-message").style.display = "block";
        document.getElementById('username').focus();
    }

    if(username == ""){
        document.getElementById("username-validate-message").style.display = "block";
        document.getElementById('username').focus();
    }

    if(password == ""){
        document.getElementById("password-validate-message").style.display = "block";
        document.getElementById('password').focus();
    }


    if(username != ""){
        document.getElementById("username-validate-message").style.display = "none";
    }

    if(password != ""){
        document.getElementById("password-validate-message").style.display = "none";
    }

    }
    
   

function loginValidate() {
  try{
    clientFormValidation();
        
        let user = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        //Create an XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        //Define a callback function

        xhr.onload = function() {
          // What to do when the response is ready
          if (this.readyState == 4 && this.status == 200) {
            let serverResponse = this.responseText;
          
            if(serverResponse == 1){
                alert("Successfully Login!");
                window.location.href = "../views/admin-view.php";
            }else{
                document.getElementById("backend-validate-message").style.display = "block";
                document.getElementById("backend-validate-message").textContent = "Incorrect Username or Password!";
            }
          }
        }    
        
        
        
        //Open the XMLHttpRequest object
        xhr.open("POST", "../controllers/login-controller.php", true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //Send a Request to a server
        xhr.send("username="+user+"&"+"password="+pass);
    
    
  }catch(obj){
      
  }
 
 return false;
}




	
