<?php
session_start();
   try{
       if(empty($_SESSION['loginSession']) || $_SESSION['loginSession'] == "Invalid"){
            $_SESSION['loginSession'] = "Invalid";
            header("Location:../views/login-view.php");
        }
   } catch (Exception $ex) {
       echo $ex->getMessage();
   }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../css/prod.incl.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <script src="../script/product.js" defer></script>
    <script src="../script/all.js" defer></script>
    <script src="../script/product-crud.js" defer></script>
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
                    <span id="time">Sunday, April 17, 2022</span><br>
                    <span id="date">12:00:00 AM</span>
                </div>
            </div>
        </div>
<!-- =========================================== END OF HEADER SECTION ============================================================= -->

<!-- =========================================== SIDE-BAR SECTION ============================================================= -->
        <div class="side-bar">
            <!-- toggle show/hide -->
            <div class="toggle-wrapper">
                <button class="toggle-button">hide</button>
            </div>
            <!-- system logo -->
            <div class="logo-wrapper">
                <img class="logo" src="../images/pos-logo.svg" alt="pos-logo">
                <p>Point of Sale System</p>
            </div>

            <!-- navigation -->
            <div class="side-bar-navigation">
                <a class="sidebar-nav-group active" href="../views/admin-view.php">
                    <?php include '../images/location-arrow-solid.svg';?>
                    <?php include '../images/gauge-solid.svg';?>
                    <p>Dashboard</p>
                </a> 
                <a class="sidebar-nav-group" href="../views/product-view.php">
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
            <div class="main-container">
                <div class="row-0-col-0">
                    <h1>PRODUCT INFORMATION</h1>
                </div>
                <div class="row-1-col-0">
                    <div class="wrapper-button">
                        <button>
                            <?php include '../images/circle-plus-solid.svg'?>
                            <p>INSERT</p>
                        </button>
                        <button>
                            <?php include '../images/circle-plus-solid.svg'?>
                            <p>INSERT CATEGORY</p>
                        </button>
                    </div>
                    <div class="main-wrapper-searchtextfield">
                        <div class="wrapper-searchtextfield">
                            <?php include '../images/magnifying-glass-solid.svg';?>
                            <input type="text" placeholder="Search Product">
                        </div>
                    </div>
                </div>
                <div class="row-2-col-0">
                    <div class="result-wrapper">
                        <label for="result">Results :</label>
                        <span id="result">10</span>
                    </div>
                   
                    <div class="wrapper-table">
                        <table class="product-table">
                            <thead class="product-table-thead">
                            </thead>
                            <tbody class="product-table-tbody">
                              
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="wrapper-total-product">
                        <label for="total-product">Total Products :</label>
                        <span id="total-product">50</span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</body>
</html>