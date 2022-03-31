<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
<div id="insert-main">
<div class="header-insert-product">
    <i class="fa-solid fa-xmark icon btnClose"></i>
    <h1 id="title-heading">Product Entry</h1>
</div>    
<form id="insert-form" onsubmit="return false">
    <div class="form-group">
        <label for="prod_id" id="prod_id_label">Prod ID:</label>
        <input type="text" name="prod_id" id="prod_id" >
        <label for="prod_barcode">Barcode:</label>
        <input type="text" name="prod_barcode" id="prod_barcode" autocomplete="off">
        <label for="prod_cat">Select category:</label>
        <select name="prod_cat" id="prod_cat">
        </select>
        <label for="prod_name">Product Name:</label>
        <input type="text" name="prod_name" id="prod_name" autocomplete="off">
        <label for="prod_desc">Description:</label>
        <input type="text" name="prod_desc" id="prod_desc" autocomplete="off">
        <label for="prod_unit">Unit:</label>
        <input type="text" name="prod_unit" id="prod_unit" autocomplete="off">
        <label for="prod_price1">Price1:</label>
        <input type="text" name="prod_price1" id="prod_price1" autocomplete="off">
        <label for="prod_price2">Price2:</label>
        <input type="text" name="prod_price2" id="prod_price2" autocomplete="off">
        <label for="prod_price3">Price3:</label>
        <input type="text" name="prod_price3" id="prod_price3" autocomplete="off">
        <label for="prod_qty">Quantity:</label>
        <input type="text" name="prod_qty" id="prod_qty" autocomplete="off">
        <label for="prod_reorder_lvl">Reorder Level:</label>
        <input type="text" name="prod_reorder_lvl" id="prod_reorder_lvl" autocomplete="off">
        <label for="prod_drawer_No">Drawer No:</label>
        <input type="text" name="prod_drawer_No" id="prod_drawer_No" autocomplete="off">
        <label for="prod_status">Status:</label>
        <select name="prod_status" id="prod_status">
            <option value="">SET STATUS</option>
            <option value="Active">Active</option>
            <option value="Not Active">Not Active</option>
        </select>
    </div>

    <div class="form-group">
        <div class="btn-main-wrapper">
            <div class="btn-group-wrapper" id="btn-save-wrapper">
                <i class="fa-solid fa-floppy-disk icon"></i>
                <button class="btn-group" id="btnSave">Save</button>
            </div>
            <div class="btn-group-wrapper" id="btn-edit-wrapper">
                <i class="fa-solid fa-square-pen icon"></i>
                <button class="btn-group" id="btnEdit_Insert">Edit</button>
            </div>
            <div class="btn-group-wrapper" id="btn-clear-wrapper">
                <i class="fa-solid fa-ban icon"></i>
                <button class="btn-group" id="btnCancel_Insert" onclick="window.location.href = '../views/product-view.php'">Cancel</button>
            </div>
        </div>
    </div>
</form>
</div>
            
</body>
</html>
   