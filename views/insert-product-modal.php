<dialog class="insert-modal" id="insert-modal">
    <form onsubmit="return false" id="form">
        <div class="row-1">
            <p class="title-header">Add New Product</p>
        </div>
        <div class="row-2">
            <label for="prod-id" class="prod_id">ID No.</label>
            <input type="text" id="prod-id" class="prod_id form-group-fields">
            <label for="prod-barcode">Barcode</label>
            <input type="text" id="prod-barcode" class="form-group-fields">
            <label for="prod-name">Name</label>
            <input type="text" id="prod-name" class="form-group-fields">
            <label for="prod_desc">Description</label>
            <input type="text" id="prod-desc" class="form-group-fields">
            <label for="select-category">Category</label>
            <select id="select-category" class="form-group-fields">
                <option value="0">select category</option>
            </select>
            <label for="prod-unit">Unit</label>
            <input type="text" id="prod-unit" class="form-group-fields">
            <label for="prod-price1">Price 1</label>
            <input type="text" id="prod-price1" class="form-group-fields">
            <label for="prod-price2">Price 2</label>
            <input type="text" id="prod-price2" class="form-group-fields">
            <label for="prod-price3">Price 3</label>
            <input type="text" id="prod-price3" class="form-group-fields">
            <label for="prod-qty">Quantity</label>
            <input type="text" id="prod-qty" class="form-group-fields">
            <label for="prod-reorder-lvl">Re-Order</label>
            <input type="text" id="prod-reorder-lvl" class="form-group-fields">
            <label for="prod-drawer-no">Drawer No.</label>
            <input type="text" id="prod-drawer-no" class="form-group-fields">
            <label for="prod-status">Status</label>
            <select id="select-status" class="form-group-fields">
                <option value="1">Active</option>
                <option value="2">Not Active</option>
            </select>
        </div>

        <div class="row-3">
            <button id="close_btn">CLOSE</button>
            <button id="save_btn">SAVE</button>
        </div>

        <div class="insert_success">

        </div>
    </form>
</dialog>