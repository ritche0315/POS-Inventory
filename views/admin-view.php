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
                <i class="fa-solid fa-bars icon"></i>
            </div>
            <div class="logged-In">
                <p>Logged in:</p>
                <label for="user-login">User:</label>
                <p id="user-login">Ritche D. Laganson</p>
                <span class="divider"></span>
                <label for="user-role">Role:</label>
                <p id="user-role">Admin</p>
                <span class="divider"></span>
            </div>
            <div class="logout">
                <i class="fa-solid fa-power-off"></i>
            </div>
        </div>

        <div class="container-sideBar-mainContent">
            <div class="sideBar">
                <p class="menu-title">Menu</p>
                <div class="navigation">
                    <button>
                        <span><i class="fa-solid fa-gauge icon"></i></span>
                        <p>Dashboard</p>
                    </button>
                    <button>
                        <span><i class="fa-solid fa-cart-shopping icon"></i></span>
                        <p>Product</p>
                    </button>
                    <button>
                        <span><i class="fa-solid fa-truck icon"></i></span>
                        <p>Supplier</p>
                    </button>
                    <button>
                        <span><i class="fa-solid fa-boxes-stacked icon"></i></span>
                        <p>Stock</p>
                    </button>
                    <button>
                        <span><i class="fa-solid fa-user-group icon"></i></span>
                        <p>User Accounts</p>
                    </button>
                    <button>
                        <span><i class="fa-solid fa-cash-register icon"></i></span>
                        <p>POS</p>
                    </button>
                    <button>
                        <span><i class="fa-solid fa-clipboard icon"></i></span>
                        <p>Reports</p>
                    </button>
                    <button>
                        <span><i class="fa-solid fa-clipboard icon"></i></span>
                        <p>Settings</p>
                    </button>
                </div>

               
            </div>

            
            <div class="main-content">
                <div class="demo-content">

                </div>
            </div>
        </div>
      
        <div class="footer">
            <div class="wrapper">
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