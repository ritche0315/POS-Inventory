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

        <div class="main-content"
            
        </div>

        <div class="sideBar">
            <p>Menu</p>
            <div class="navigation">
                <button>
                    <i class="fa-solid fa-gauge"></i>
                    <p>Dashboard</p>
                </button>
                <button>
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>Product</p>
                </button>
                <button>
                    <i class="fa-solid fa-truck"></i>
                    <p>Supplier</p>
                </button>
                <button>
                    <i class="fa-solid fa-boxes-stacked"></i>
                    <p>Stock</p>
                </button>
                <button>
                    <i class="fa-solid fa-user-group"></i>
                    <p>User Accounts</p>
                </button>
                <button>
                    <i class="fa-solid fa-cash-register"></i>
                    <p>POS</p>
                </button>
                <button>
                    <i class="fa-solid fa-clipboard"></i>
                    <p>Reports</p>
                </button>
            </div>
        </div>
        <div class="footer">

        </div>
   </div>
</body>
</html>