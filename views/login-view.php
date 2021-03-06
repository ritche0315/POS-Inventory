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
    <script src="../script/login.js" defer></script>
    <title>Login Page</title>
</head>
<body>
    <div class="main">
        <form onsubmit="return false">
            <div class="group-form-items">
                <h1>Login</h1>
            </div>

            <div class="group-form-items">
                <div class="group-form-textfield">
                    <?php include '../images/user-icon.svg'?>
                    <input type="text" id="username-textfield" placeholder="USERNAME" autocomplete="off">
                </div>
                <div class="group-form-textfield">
                    <?php include '../images/key-icon.svg'?>
                    <input type="password" id="password-textfield" placeholder="PASSWORD" autocomplete="off">
                </div>
               
            </div>
            <div class="group-form-items">
                <input type="button" value="Login" id="submit-button">
            </div>
            <div class="successError">
                
            </div>
        </form>
    </div>
</body>
</html>