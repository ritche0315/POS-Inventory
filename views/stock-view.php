
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
    <link rel="stylesheet" href="../css/stock.incl.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stock Page</title>
    <script src="../script/stock.js" defer></script>
    <script src="../script/all.js" defer></script>
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
                    <a href="../views/stock-view.php">
                        <span id="active"></span>
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
                <h1>Stock Information</h1>
                <div class="date-container">
                    <span id="idTime"></span>
                    <span id="am_pm"></span>
                    <span id="idDate"></span>
                   
                </div>
                
            </div>
            <div class="content-maincontent-container">
                <div class="content-maincontent-container-item-row-0">

                    <div class="button-stock-container">
                        <button id="btnStock-entry">
                            <i class="fa-solid fa-circle-plus icon"></i>
                            <p>Stock Entry</p>
                        </button>
                        <button id="btnStock-adjustment">
                            <i class="fa-solid fa-square-pen icon"></i>
                            <p>Stock Adjustment</p>
                        </button>
                    </div>

                    <div class="stock-search-input-container">
                        <div class="stock-search-input-wrapper">
                            <i class="fa-solid fa-magnifying-glass icon"></i>
                            <input type="text" id="stock-search-input" placeholder="Search here..." autocomplete=off>
                        </div>
                    </div>
                </div>

                <div class="content-maincontent-container-item-row-1">
                    <div class="stock-table-wrapper">
                        <table id="stock-table">
                            <thead>
                                <th>#</th>
                                <th>Product ID</th>
                                <th>Barcode</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Supplier Price</th>
                                <th>Price1</th>
                                <th>Price2</th>
                                <th>Price3</th>
                                <th>Quantity</th>
                                <th>Reorder Level</th>
                                <th>Drawer No</th>
                                <th>Status</th>
                                <th>Action</th>
                            </thead>
                            <tbody id="stock-tbody">
                                <tr>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Ritche De guzman Laganson</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>
                                        <div class="stock-action-button-group">
                                            <button id="stock-btnEdit">
                                                <i class="fa-solid fa-square-pen icon"></i>
                                                <p>Edit</p>
                                            </button>
                                            <button id="stock-btnDelete">
                                                <i class="fa-solid fa-trash-can icon"></i>
                                                <p>Delete</p>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Ritche De guzman Laganson</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>
                                        <div class="stock-action-button-group">
                                            <button id="stock-btnEdit">
                                                <i class="fa-solid fa-square-pen icon"></i>
                                                <p>Edit</p>
                                            </button>
                                            <button id="stock-btnDelete">
                                                <i class="fa-solid fa-trash-can icon"></i>
                                                <p>Delete</p>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Ritche De guzman Laganson</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>Sample</td>
                                    <td>
                                        <div class="stock-action-button-group">
                                            <button id="stock-btnEdit">
                                                <i class="fa-solid fa-square-pen icon"></i>
                                                <p>Edit</p>
                                            </button>
                                            <button id="stock-btnDelete">
                                                <i class="fa-solid fa-trash-can icon"></i>
                                                <p>Delete</p>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="content-maincontent-container-item-row-2">
                    <div class="stock-total-wrapper">
                        <p id="stock-total">Total Stocks: 1000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>