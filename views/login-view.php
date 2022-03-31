<?php
session_start();
if(empty($_SESSION['loginSession']) || $_SESSION['loginSession'] == "Valid"){
    $_SESSION['loginSession'] = "Valid";
    header("Location:../views/admin-view.php");
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../css/login.incl.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
    <script src="../script/login.js" defer></script>

<body>
    <div id="main">
        <div id="top-container">
            <p>WELCOME TO POINT OF SALE SYSTEM</p>
        </div>
            <div id="form-wrapper">
                <form method="POST" id="login-form" >
                    <div class="form-header">
                        <p>System Administrator Login</p>
                    </div>
                        <div class="form-group-fields">
                            <label for="username">Username:</label>
                                <input type="text" name="username" id="username" class="form_data" autofocus autocomplete="off">
                                    <div id="username-validate-message">
                                        <p>Username is empty</p>
                                        <i class="fa-solid fa-circle-exclamation"></i>
                                        
                                    </div>
                            
                            <label for="password">Password:</label>
                                <input type="password" name="password" id="password" autocomplete="off" autofocus>
                                    <div id="password-validate-message">
                                        <p>Password is empty</p>
                                        <i class="fa-solid fa-circle-exclamation"></i>
                                    </div>
                        </div>
                    
                    <div class="form-group-button">
                        <input type="button" name="btn-login" id="btn-login" value="Login" onclick="return loginValidate()">
                       
                    </div>
                    <div id="backend-validate-message"></div>
                    
                </form>
            </div>
       
    </div>
</body>
</html>

