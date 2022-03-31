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
                
                <button id="logout-btn">
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
                <div class="sidebar-grp-item active">
                    <a href="../views/product-view.php">
                        <span id="active"></span>
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
                <h1>Product Information</h1>
                <div class="date-container">
                        <span id="idTime"></span>
                        <span id="am_pm"></span>
                        <span id="idDate"></span>
                </div>
            </div>
            
            <div class="content-maincontent-container">
                <!-- PRODUCT DASHBOARD -->
                <div class="product-entry-wrapper">
                    <div class="product-entry-group">
                        <i class="fa-solid fa-square-plus icon"></i>
                        <button id="btnAddProduct" onclick="btnProductEntryClicked()">Product Entry</button>
                    </div>
                    <div class="product-entry-group">
                        <i class="fa-solid fa-square-plus icon"></i>
                        <button id="btnAddCategory" onclick="btnCategoryEntryClicked()">Category Entry</button>
                    </div>
                </div>
                
                <div class="product-search-wrapper">
                    <div class="product-search-group">
                        <i class="fa-solid fa-magnifying-glass icon"></i>
                        <input type="text" id="product-search-input" placeholder="Search here" onkeyup="filterTable()">
                    </div>
                </div>
                
                <div id="product-table-wrapper" class="product-table-wrapper">
                    <table id="product-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product ID</th>
                                <th>Barcode</th>
                                <th>Category</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Unit</th>
                                <th>Price1</th>
                                <th>Price2</th>
                                <th>Price3</th>
                                <th>Quantity</th>
                                <th>Reorder Level</th>
                                <th>Drawer No.</th>
                                <th>Status</th>
                                <th colspan="2">Action</th>
                                <th></th>
                            </tr>
                        </thead>
                    <tbody id="myTableBody">
                        
                    </tbody>
                    </table>            
                </div>

            <!-- END OF PRODUCT DASHBOARD -->

            <!-- INSERT PRODUCT SECTION -->
            <?php include '../views/product-entry-view.php';?>
            <!-- END OF INSERT PRODUCT SECTION -->
            <?php include '../views/product-category-view.php';?>
            </div>
               
        </div>
    </div>
</body>
</html>