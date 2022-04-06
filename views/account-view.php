<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="../css/account.incl.css">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../script/all.js" defer></script>
    <script src="../script/account.js" defer></script>
    <script src="../script/account-crud.js" defer></script>
    <title>User Account Page</title>
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
                <div class="sidebar-grp-item">
                    <a href="../views/supplier-view.php">
                        <span></span>
                        <i class="fa-solid fa-truck icon"></i>
                        <p>Supplier</p>
                    </a>
                </div>
                <div class="sidebar-grp-item  active">
                    <a href="../views/account-view.php">
                        <span id="active"></span>
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
                <h1>Account Information</h1>
                <div class="date-container">
                    <span id="idTime"></span>
                    <span id="am_pm"></span>
                    <span id="idDate"></span>
                </div>
                
            </div>
            <div class="content-maincontent-container">
                <div class="account-row-0-col-0">
                    <div class="account-search-wrapper">
                        <i class="fa-solid fa-magnifying-glass icon"></i>
                        <input type="text" id="account-search-input" placeholder="Search here..." autocomplete=off>
                    </div>
                </div>
                <div class="account-row-1-col-0">
                    <div class="account-table-wrapper">
                        <table id="account-table">
                            <thead id="account-table-thead">
                                <th>#</th>
                                <th>ID</th>
                                <th>Full Name</th> 
                                <th>Username</th>
                                <th>Password</th> 
                                <th>User Type</th>
                                <th></th>   
                            </thead>
                            <tbody id="account-table-tbody">
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="account-row-1-col-1">
                    <form onsubmit="return false">
                        <h1>Account Entry</h1>
                        <div class="account-entry-wrapper">
                            <button class="account-entry-button" id="account-entry-btnNew">
                                <i class="fa-solid fa-circle-plus icon"></i>
                                <p>New Account</p>
                            </button>

                            <button class="account-entry-button" id="account-entry-btnUpdateDelete">
                            <i class="fa-solid fa-square-pen icon"></i>
                                <p>Update/Delete Account</p>
                            </button>
                        </div>
                        <div class="form-inputfield-group">
                            <label for="account-id">User ID:</label>
                            <input class="input-field" type="text" id="account-id" autocomplete=off>

                            <label for="account-fullname">Name:</label>
                            <input class="input-field" type="text" id="account-fullname" autocomplete=off>

                            <label for="account-username">Username:</label>
                            <input class="input-field" type="text" id="account-username" autocomplete=off>

                            <label for="account-password">Password:</label>
                            <input class="input-field" type="password" id="account-password" autocomplete=off>

                            <label for="account-type">Type:</label>
                            <select class="input-field" id="account-type">
                                <option value="null">Choose user type:</option>
                                <option value="Cashier">Cashier</option>
                                <option value="System Administrator">System Administrator</option>
                                <option value="Manager">Manager</option>
                            </select>
                        </div>
                        <div class="form-button-group">
                            <button class="button-group" id="btnInsert">
                                <i class="fa-solid fa-square-plus icon"></i>
                                <p>Insert</p>
                            </button>
                            <button class="button-group" id="btnEdit">
                                <i class="fa-solid fa-square-pen icon"></i>
                                <p>Edit</p>
                            </button>
                            <button class="button-group" id="btnDelete">
                                <i class="fa-solid fa-trash-can icon"></i>
                                <p>Delete</p>
                            </button>
                            <button class="button-group" id="btnClear">
                                <i class="fa-solid fa-rotate-left icon"></i>
                                <p>Clear</p>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>