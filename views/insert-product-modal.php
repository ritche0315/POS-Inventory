<dialog class="insert-modal" id="insert-modal">
    <form onsubmit="return false" id="form">
        <div class="row-1">
            <p>Add New Product</p>
        </div>
        <div class="row-2 form-input-fields">
            <label for="prod-id" class="prod_id">ID No.</label>
            <input type="text" id="prod-id" class="prod_id">
            <label for="prod-barcode">Barcode</label>
            <input type="text" id="prod-barcode">
            <label for="prod-name">Name</label>
            <input type="text" id="prod-name">
            <label for="prod_desc">Description</label>
            <input type="text" id="prod-desc">
            <label for="select-category">Category</label>
            <select id="select-category">
                <option value="0">select category</option>
            </select>
            <label for="prod-unit">Unit</label>
            <input type="text" id="prod-unit">
            <label for="prod-price1">Price 1</label>
            <input type="text" id="prod-price1">
            <label for="prod-price2">Price 2</label>
            <input type="text" id="prod-price2">
            <label for="prod-price3">Price 3</label>
            <input type="text" id="prod-price3">
            <label for="prod-qty">Quantity</label>
            <input type="text" id="prod-qty">
            <label for="prod-reorder-lvl">Re-Order</label>
            <input type="text" id="prod-reorder-lvl">
            <label for="prod-drawer-no">Drawer No.</label>
            <input type="text" id="prod-drawer-no">
            <label for="prod-status">Status</label>
            <select id="select-status">
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