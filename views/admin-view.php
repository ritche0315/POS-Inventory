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
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
</head>
<body>
    <div class="main">

<!-- =========================================== HEADER SECTION ============================================================= -->
        <div class="header">
            <div class="user-account-info">
                <?php include '../images/undraw_male_avatar.svg';?>
                <label for="user-account-name">Name:</label>
                <p id="user-account-name">Ritche Laganson</p>
                <label for="user-account-role">Role:</label>     
                <p id="user-account-role">System Administrator</p>
            </div>

            <div class="date-time">
                <div class="date-time-wrapper">
                    <span id="date">12:00:00 AM</span><br>
                    <span id="time">Sunday, April 17, 2022</span>
                </div>
            </div>
        </div>
<!-- =========================================== END OF HEADER SECTION ============================================================= -->

<!-- =========================================== SIDE-BAR SECTION ============================================================= -->
        <div class="side-bar">
            <!-- system logo -->
            <div class="logo-wrapper">
                <img class="logo" src="../images/pos-logo.svg" alt="pos-logo">
                <p>Point of Sale System</p>
            </div>

            <!-- navigation -->
            <div class="side-bar-navigation">
                <a class="sidebar-nav-group active" href="#">
                    <?php include '../images/location-arrow-solid.svg';?>
                    <?php include '../images/gauge-solid.svg';?>
                    <p>Dashboard</p>
                </a> 
                <a class="sidebar-nav-group" href="#">
                    <?php include '../images/cart-shopping-solid.svg';?>
                    <p>Product</p>
                </a>
                <a class="sidebar-nav-group" href="#">
                    <?php include '../images/truck-solid.svg';?>
                    <p>Supplier</p>
                </a>
                <a class="sidebar-nav-group" href="#">
                    <?php include '../images/user-group-solid.svg';?>
                    <p>Accounts</p>
                </a>
                <a class="sidebar-nav-group" href="#">
                    <?php include '../images/layer-group-solid.svg';?>
                    <p>Stock</p>
                </a>
                <a class="sidebar-nav-group" href="#">
                    <?php include '../images/cash-register-solid.svg';?>
                    <p>POS</p>
                </a>
                <a class="sidebar-nav-group" href="#">
                    <?php include '../images/clipboard-solid.svg';?>
                    <p>Reports</p>
                </a>
                <a class="sidebar-nav-group" href="#">
                    <?php include '../images/sliders-solid.svg';?>
                    <p>Settings</p>
                </a>
            </div>

            <!-- logout -->
            <div class="side-bar-logout">
                <a href="#" id="sidebar-logout-btn">
                    <!-- icon logout -->
                    <?php include '../images/power-off-solid.svg';?>
                    <p>LOGOUT</p>
                </a>
            </div>
        </div>

        <!-- =========================================== END OF SIDE-BAR SECTION ============================================================= -->


        <!-- =========================================== CONTENT SECTION ============================================================= -->
        <div class="content">
            <!-- analytics overview for daily, stock-on-hand, critical stocks, product line-->
            <div class="row-0-col-0">
                <div class="group-items" id="daily-sales">
                    <span class="icon-wrapper">
                        <?php include '../images/peso-sign-solid.svg';?>
                    </span>
                    <p class="val">2000</p>
                    <p class="title-report">Daily Sales</p>
                </div>
                <div class="group-items" id="stock-on-hand">
                    <span class="icon-wrapper">
                        <?php include '../images/cart-shopping-solid.svg';?>
                    </span>
                    <p class="val">2000</p>
                    <p class="title-report">Stock on hand</p>
                </div>
                <div class="group-items" id="critical-stocks">
                    <span class="icon-wrapper">
                        <?php include '../images/arrow-trend-down-solid.svg';?>
                    </span>
                    <p class="val">2000</p>
                    <p class="title-report">Critical Stocks</p>
                </div>
                <div class="group-items" id="product-line">
                    <span class="icon-wrapper">
                        <?php include '../images/cubes-solid.svg';?>
                    </span>
                    <p class="val">2000</p>
                    <p class="title-report">Product Line</p>
                </div>
            </div>

            <!-- analytics overview for yearly sales-->
            <div class="row-1-col-0">
                <div class="row-1-item-1">
                    <div class="group-items">
                        <span id="year-color-represented"></span>
                        <span id="year">2022</span>
                    </div>

                    <!-- put here the pie chart -->
                    <div class="group-items">
                        <div class="chart-wrapper">

                        </div>
                    </div>
                </div>

                <div class="row-1-item-1-col-1">
                        <p>YEARLY SALES</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum velit error accusantium, nisi at animi ex sed deleniti recusandae impedit culpa ab fugiat quae tempora tenetur ad molestiae sint. Culpa.
                        Odit eveniet obcaecati expedita rem adipisci commodi eius dolore architecto consequuntur assumenda ea aperiam magni consequatur doloremque tempore ipsum atque, in facilis? Quisquam, sint repudiandae. Necessitatibus, numquam? Fugiat, ipsa maxime.</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>