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
    <link rel="stylesheet" href="../css/dashboard.incl.css">
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
                    <li class="active">
                        <a href="../views/dashboard-view.php">
                            <i class="fa-solid fa-gauge"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li>
                        <a href="../views/product-view.php">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <p>Product</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-boxes-stacked"></i>
                            <p>Stock</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-truck-fast"></i>
                            <p>Supplier</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-cash-register"></i>
                            <p>POS</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-clipboard"></i>
                            <p>Reports</p>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i class="fa-solid fa-gear"></i>
                            <p>Settings</p>
                        </a>
                    </li>
               </ul>
            </div>
        </div>
       
        <div class="main-content">
        <div class="row-1">
                <div class="title-wrapper">
                    <p>Dashboard</p>
                </div>
                <div class="date-container">
                    <div class="wrapper">
                        <i class="fa-solid fa-calendar"></i>
                        <span id="date"></span>
                    </div>
                </div>
            </div>
            <div class="row-2">
                <div class="col-4-items">
                    <div class="item-1"></div>
                    <div class="item-2"></div>
                    <div class="item-3"></div>
                    <div class="item-4"></div>
                </div>
            </div>

            <div class="row-3">
                <div class="wrapper">
                    <div class="pie-chart-wrapper"></div>
                    <div class="bar-graph-wrapper"></div>
                </div>
            </div>
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