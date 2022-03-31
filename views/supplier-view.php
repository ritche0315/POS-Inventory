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
    <link rel="stylesheet" href="../css/supplier.incl.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supplier Page</title>
    <script src="../script/supplier.js" defer></script>
    <script src="../script/all.js" defer></script>
    <script src="../script/supplier-crud.js" defer></script>
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
                <div class="sidebar-grp-item">
                    <a href="../views/admin-view.php">
                        <span></span>
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
                <div class="sidebar-grp-item active">
                    <a href="../views/supplier-view.php">
                        <span id="active"></span>
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
                <h1>Supplier Information</h1>
                <div class="date-container">
                    <span id="idTime"></span>
                    <span id="am_pm"></span>
                    <span id="idDate"></span>
                </div>
                
            </div>
            <div class="content-maincontent-container">
                <form id="content-supplier-form" onsubmit="return false">
                    <div id="content-supplier-search-container">
                        <div id="content-supplier-search-wrapper">
                            <i class="fa-solid fa-magnifying-glass icon"></i>
                            <input type="text" id="content-supplier-search-input" placeholder="Search here...">
                        </div>
                    </div>
                   
                    <div id="content-supplier-table-container">
                        <div id="content-supplier-table-wrapper">
                            <table>
                                <thead>
                                    <th>#</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>PhoneNo</th>
                                    <th></th>
                                </thead>
                                <tbody id="content-supplier-table-body">
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="content-supplier-input-container">
                        <div class="content-supplier-input-wrapper">
                            <div id="content-supplier-input-header">
                                <h1>Supplier Entry</h1>
                            </div>
                            <div class="content-supplier-input-text-group-wrapper">
                                <label for="content-supplier-input-id">ID:</label>
                                <input class="content-supplier-input-group" type="text" id="content-supplier-input-id">

                                <label for="content-supplier-input-name">Name:</label>
                                <input class="content-supplier-input-group" type="text" id="content-supplier-input-name">

                                <label for="content-supplier-input-address">Address:</label>
                                <input class="content-supplier-input-group" type="text" id="content-supplier-input-address">
                                
                                <label for="content-supplier-input-phoneNo">Contact No:</label>
                                <input class="content-supplier-input-group" type="text" id="content-supplier-input-phoneNo">
                            </div>

                            <div class="content-supplier-input-button-group-wrapper">
                                <button class="content-supplier-input-group" id="content-supplier-input-btnSave">
                                    <i class="fa-solid fa-floppy-disk"></i>
                                    <p>Save</p>
                                </button>
                                <button class="content-supplier-input-group" id="content-supplier-input-btnEdit">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <p>Edit</p>
                                </button>
                                <button class="content-supplier-input-group" id="content-supplier-input-btnDelete">
                                    <i class="fa-solid fa-trash-can"></i>
                                    <p>Delete</p>
                                </button>
                                <button class="content-supplier-input-group" id="content-supplier-input-btnClear">
                                    <i class="fa-solid fa-rotate-left"></i>
                                    <p>Clear</p>
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    </div>

</body>
</html>

