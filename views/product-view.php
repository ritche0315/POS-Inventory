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
    <link rel="stylesheet" href="../css/product.incl.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Page</title>
    <script src="../script/product.js" defer></script>
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
                        <a href="../views/dashboard-view.php">
                            <i class="fa-solid fa-gauge"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li class="active">
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
                    <p>Product</p>
                </div>
                <div class="date-container">
                    <div class="wrapper">
                        <i class="fa-solid fa-calendar"></i>
                        <span id="date"></span>
                    </div>
                </div>
            </div>

            
        <!-- START HERE -->
            <div class="row-2">
                <div class="container">
                    <div class="row-1">
                        <div>
                            <i class="fa-solid fa-table"></i>
                            <p>Product Table</p>
                        </div>
                    </div>
                    <div class="row-2">
                        <div>
                            <label for="cmb-entries">Entries per page</label>
                            <select id="cmb-entries">
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>

                        <div>
                            <div class="search-wrapper">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                <input type="text" placeholder="Search for product information">
                            </div>
                        </div>
                    </div>
                    <div class="row-3">
                        <div class="wrapper">
                            <table id="table-product">
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>id</th>
                                        <th>name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>name1</td>
                                        <td>1</td>
                                        <td>name1</td>
                                        <td>1</td>
                                        <td>name1</td>
                                    </tr>  
                                    <tr>
                                        <td>1</td>
                                        <td>name1</td>
                                        <td>1</td>
                                        <td>name1</td>
                                        <td>1</td>
                                        <td>name1</td>
                                    </tr>  
                                    <tr>
                                        <td>1</td>
                                        <td>name1</td>
                                        <td>1</td>
                                        <td>name1</td>
                                        <td>1</td>
                                        <td>name1</td>
                                    </tr>  
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="row-4">
                        <div>
                            <span>Showing</span>
                            <span id="entries">1-10</span>
                            <span>of</span>
                            <span id="total-entries">200</span>
                            <span>entries</span>
                        </div>

                        <div>
                            <div>
                                <button id="firstPage-btn"><<</button>
                                <button id="prevPage-btn"><</button>
                            </div>
                            <div id="pagination-numbers">
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                            </div>
                            <div>
                                <button id="nextPage-btn">></button>
                                <button id="lastPage-btn">>></button>
                            </div>
                        </div>
                    </div>
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