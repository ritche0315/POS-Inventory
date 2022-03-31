<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <div id="prod_cat_main">
        <div id="prod_cat_header">
            <i class="fa-solid fa-xmark icon btnClose"></i>
            <h1>Category Entry</h1>
        </div>
        <form id="prod_cat_form" onsubmit="return false">
            <div class="prod_cat_form-group">
                <label for="prod_cat_id">ID:</label>
                <input type="text" id="prod_cat_id">
                <label for="prod_cat_desc">Description:</label>
                <input type="text" id="prod_cat_desc"></input>
            </div>
            <div class="prod_cat_form-group">
                <div class="prod_cat_form-table-wrapper">
                    <table id="prod_cat_form-table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>ID</th>
                                <th>Description</th>
                                <th></th>
                            </tr>
                            
                        </thead>
                        <tbody id="prod_cat_form-tbody">
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="prod_cat_form-group">
                <div class="prod_cat_form-group-btns-wrapper">

                    <button class="prod_cat_form-group-btns" id="prod_cat_btnSave">
                        <i class="fa-solid fa-floppy-disk icon"></i>
                        <p>Save</p>
                    </button>

                    <button class="prod_cat_form-group-btns" id="prod_cat_btnEdit">
                        <i class="fa-solid fa-square-pen icon"></i>
                        <p>Edit</p>
                    </button>

                    <button class="prod_cat_form-group-btns" id="prod_cat_btnDelete">
                        <i class="fa-solid fa-trash icon"></i>
                        <p>Delete</p>
                    </button>

                    <button class="prod_cat_form-group-btns" id="prod_cat_btnClear">
                        <i class="fa-solid fa-rotate-left"></i>
                        <p>Clear</p>
                    </button>
                </div>
            </div>
        </form>
        
    </div>
</body>
</html>