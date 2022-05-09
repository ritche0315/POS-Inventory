<?php
session_start();
if(empty($_SESSION['loginSession']) || $_SESSION['loginSession'] == "Invalid"){
    $_SESSION['loginSession'] = "Invalid";
    header("Location:../views/login-view.php");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../css/admin.incl.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <script src="../script/admin.js" defer></script>
    <script src="../script/all.js" defer></script>
</head>
<body>
   <div class="main">
        <div class="header">
            <div class="system-logo">
                <?php include '../images/system-logo.svg';?>
            </div>
            <div class="wrapper-fa-bars">
                <i class="fa-solid fa-bars icon" id="toggle"></i>
                <span class="tooltip-text">toggle side bar</span>
            </div>
            <div class="logged-In">
                <p>Logged in:</p>
                <label for="user-login">User:</label>
                <p id="user-login">Ritche D. Laganson</p>
                <span></span>
                <label for="user-role">Role:</label>
                <p id="user-role">Admin</p>
                <span></span>
            </div>
            <div class="logout">
                <i class="fa-solid fa-power-off" id="logout"></i>
            </div>
        </div>

        <div class="sideBar">
            <p class="menu-title">Menu</p>
            <div class="navigation">
               <ul>
                    <li>
                        <button class="btn-nav active" w3-include-html="../views/dashboard-view.php">
                            <i class="fa-solid fa-gauge"></i>
                            <p>Dashboard</p>
                        </button>
                    </li>
                    <li>
                        <button class="btn-nav" w3-include-html="../views/product-view.php">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p>Product</p>
                        </button>
                    </li>
                    <li>
                        <button href="">
                            <i class="fa-solid fa-boxes-stacked"></i>
                            <p>Stock</p>
                        </button>
                    </li>
                    <li>
                        <button href="">
                            <i class="fa-solid fa-truck-fast"></i>
                            <p>Supplier</p>
                        </button>
                    </li>
                    <li>
                        <button href="">
                            <i class="fa-solid fa-cash-register"></i>
                            <p>POS</p>
                        </button>
                    </li>
                    <li>
                        <button href="">
                            <i class="fa-solid fa-clipboard"></i>
                            <p>Reports</p>
                        </button>
                    </li>
                    <li>
                        <button href="">
                            <i class="fa-solid fa-gear"></i>
                            <p>Settings</p>
                        </button>
                    </li>
               </ul>
            </div>
        </div>
       
        <div class="main-content">
            <?php include '../views/dashboard-view.php'?>
        </div>

        <div class="footer">
            <div class="copyright">
                <?php include '../images/copyright-svgrepo-com.svg'?>
                <p id="copyright">Ritche Inc.</p>
                <p>Blizzard POS System</p>
            </div>

            <div class="time-container">
                    <i class="fa-solid fa-clock icon"></i>
                    <span id="time"></span>
            </div>
        </div>
   </div>
</body>
</html>