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
    <div id="main">
        <div class="header">
            <div class="container-company-logo">
                <p>company logo</p>
            </div>
            <div class="container-user-info">
                <div class="user-info-wrapper">
                    <label for="user">User:</label>
                    <label id="user">Ritche Laganson</label><br>
                    <label for="role">Role:</label>
                    <label id="role">System Administrator</label>
                </div>
            </div>
            <div class="button-container">
                    <button id="logout-btn" onclick="logoutClicked()">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        <span>Logout</span>
                    </button>
            </div>
           
        </div>
        <div class="sidebar">
            <div class="sidebar-nav-container">
                <div class="sidebar-grp-item active">
                    <a href="../views/admin-view.php">
                        <span id="active"></span>
                        <i class="fa-solid fa-gauge icon"></i>
                        <p>Dashboard</p>
                    </a>
                </div>
                <div class="sidebar-grp-item">
                    <a href="../views/product-view.php">
                        <span></span>
                        <i class="fa-solid fa-cart-shopping icon"></i>
                        <p>Product</p>
                    </a>
                </div>
                <div class="sidebar-grp-item">
                    <a href="../views/supplier-view.php">
                        <span></span>
                        <i class="fa-solid fa-truck icon"></i>
                        <p>Supplier</p>
                    </a>
                </div>
                <div class="sidebar-grp-item">
                    <a href="">
                        <span></span>
                        <i class="fa-solid fa-user-group icon"></i>
                        <p>Accounts</p>
                    </a>
                </div>
                <div class="sidebar-grp-item">
                    <a href="">
                        <span></span>
                        <i class="fa-solid fa-layer-group icon"></i>
                        <p>Stocks</p>
                    </a>
                </div>
                <div class="sidebar-grp-item">
                    <a href="">
                        <span></span>
                        <i class="fa-solid fa-cash-register icon"></i>
                        <p>POS</p>
                    </a>
                </div>
                <div class="sidebar-grp-item">
                    <a href="">
                        <span></span>
                        <i class="fa-solid fa-clipboard icon"></i>
                        <p>Reports</p>
                    </a>
                </div>
                <div class="sidebar-grp-item">
                    <a href="">
                        <span></span>
                        <i class="fa-solid fa-sliders icon"></i>
                        <p>Settings</p>
                    </a>
                </div>
            </div>
        </div>


        <div class="content">
            <div class="content-header-container">
                <h1>Dashboard</h1>
                <div class="date-container">
                    <span id="idTime"></span>
                    <span id="am_pm"></span>
                    <span id="idDate"></span>
                   
                </div>
                
            </div>
            <div class="content-maincontent-container">
                <div class="content-maincontent-reports-container">
                    <div class="reports-wrapper">
                        <p class="titleReport">Daily Sales</p>
                        <i class="fa-solid fa-peso-sign icon"></i>
                        <p id="dailysaleVal">20000</p>
                    </div>
                    <div class="reports-wrapper">
                        <p class="titleReport">Remaining Stocks</p>
                        <i class="fa-solid fa-database icon"></i>
                        <p id="dailysaleVal">20000</p>
                    </div>
                    <div class="reports-wrapper">
                        <p class="titleReport">Critical Stocks</p>
                        <i class="fa-solid fa-arrow-trend-down icon"></i>
                        <p id="dailysaleVal">20000</p>
                    </div>
                    <div class="reports-wrapper">
                        <p class="titleReport">Product Line</p>
                        <i class="fa-solid fa-list icon"></i>
                        <p id="dailysaleVal">20000</p>
                    </div>
                </div>
               

                <div class="content-maincontent-myChart-container">
                    <div class="chart-wrapper">
                        
                        <canvas id="myChart"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>