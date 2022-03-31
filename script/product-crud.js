
window.addEventListener("load", loadComponents);

function loadComponents() {
    btnEventListeners();
    displayCategories();

}

function btnEventListeners() {

    //==================== PRODUCT ENTRY -==============================
    const btnsave = document.getElementById("btnSave");
    btnsave.setAttribute("onclick", "addProduct()");
    const btnedit = document.getElementById("btnEdit_Insert");
    btnedit.setAttribute("onclick", "editProduct()");

    var prod_price1 = document.getElementById("prod_price1");
    prod_price1.addEventListener("keyup", function () {
        if (isNaN(prod_price1.value)) {
            alert("Product price(1) must be a number !");
            prod_price1.value = "";
            prod_price1.focus();
        }
    });
    var prod_price2 = document.getElementById("prod_price2");
    prod_price2.addEventListener("keyup", function () {
        if (isNaN(prod_price2.value)) {
            alert("Product price(2) must be a number !");
            prod_price2.value = "";
            prod_price2.focus();
        }
    });
    var prod_price3 = document.getElementById("prod_price3");
    prod_price3.addEventListener("keyup", function () {
        if (isNaN(prod_price3.value)) {
            alert("Product price(3) must be a number !");
            prod_price3.value = "";
            prod_price3.focus();
        }
    });
    var prod_qty = document.getElementById("prod_qty");
    prod_qty.addEventListener("keyup", function () {
        if (isNaN(prod_qty.value)) {
            alert("Product quantity must be a number !");
            prod_qty.value = "";
            prod_qty.focus();
        }
    });
    var prod_reorder_lvl = document.getElementById("prod_reorder_lvl");
    prod_reorder_lvl.addEventListener("keyup", function () {
        if (isNaN(prod_reorder_lvl.value)) {
            alert("Product reorder level must be a number !");
            prod_reorder_lvl.value = "";
            prod_reorder_lvl.focus();
        }
    });

    // ========================== END OF PRODUCT ENTRY ============================


    var prod_cat_btnSave = document.getElementById("prod_cat_btnSave");
    prod_cat_btnSave.addEventListener("click", function () {
        addProductCategory();
    });

    var prod_cat_btnClear = document.getElementById("prod_cat_btnClear");
    prod_cat_btnClear.addEventListener("click", function () {
        const prod_cat_form = document.getElementById("prod_cat_form");
        prod_cat_form.reset();
    });


    var prod_cat_btnEdit = document.getElementById("prod_cat_btnEdit");
    prod_cat_btnEdit.addEventListener("click", function () {
        editProductCategory();
    });

    var prod_cat_btnDelete = document.getElementById("prod_cat_btnDelete");
    prod_cat_btnDelete.addEventListener("click", function () {
        deleteProductCategory();
    });
}

// ============================= PRODUCT ENTRY ======================================
function productValidation() {
    try {
        //GET VALUES
        var prod_barcode = document.getElementById("prod_barcode");
        var prod_cat = document.getElementById("prod_cat");
        var prod_name = document.getElementById("prod_name");
        var prod_desc = document.getElementById("prod_desc");
        var prod_unit = document.getElementById("prod_unit");
        var prod_price1 = document.getElementById("prod_price1");
        var prod_price2 = document.getElementById("prod_price2");
        var prod_price3 = document.getElementById("prod_price3");
        var prod_qty = document.getElementById("prod_qty");
        var prod_reorder_lvl = document.getElementById("prod_reorder_lvl");
        var prod_drawer_No = document.getElementById("prod_drawer_No");
        var prod_status = document.getElementById("prod_status");



        if (prod_barcode.value == "" && prod_cat.options[prod_cat.selectedIndex].value == "null" && prod_name.value == "" && prod_desc.value == "" && prod_unit.value == ""
            && prod_price1.value == "" && prod_price2.value == "" && prod_price3.value == "" && prod_qty.value == "" && prod_reorder_lvl.value == ""
            && prod_drawer_No.value == "" && prod_status.options[prod_status.selectedIndex].value == "") {
            alert("ERROR: PLEASE FILL IN ALL THE REQUIRED FIELDS ! :(");
            prod_barcode.focus();
            return false;
        }
        if (prod_barcode.value == "") {
            prod_barcode.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_barcode.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_barcode.focus();
            return false;
        }
        if (prod_cat.options[prod_cat.selectedIndex].value == "null") {
            prod_cat.options[prod_cat.selectedIndex].text = "CHOOSE CATEGORY !";
            prod_cat.style.color = "red";
            prod_cat.style.backgroundColor = "#fff8a8";
            prod_cat.focus();
            return false;
        }
        if (prod_name.value == "") {
            prod_name.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_name.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_name.focus();
            return false;
        }
        if (prod_desc.value == "") {
            prod_desc.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_desc.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_desc.focus();
            return false;
        }
        if (prod_unit.value == "") {
            prod_unit.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_unit.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_unit.focus();
            return false;
        }
        if (prod_price1.value == "") {
            prod_price1.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_price1.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_price1.focus();
            return false;
        }
        if (prod_price2.value == "") {
            prod_price2.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_price2.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_price2.focus();
            return false;
        }
        if (prod_price3.value == "") {
            prod_price3.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_price3.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_price3.focus();
            return false;
        }

        if (prod_qty.value == "") {
            prod_qty.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_qty.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_qty.focus();
            return false;
        }

        if (prod_reorder_lvl.value == "") {
            prod_reorder_lvl.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_reorder_lvl.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_reorder_lvl.focus();

            return false;
        }
        if (prod_drawer_No.value == "") {
            prod_drawer_No.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_drawer_No.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_drawer_No.focus();

            return false;

        }
        if (prod_status.options[prod_status.selectedIndex].value == "") {
            prod_status.options[prod_status.selectedIndex].text = "SET STATUS!";

            prod_status.style.color = "red";
            prod_status.style.backgroundColor = "#fff8a8";

            prod_status.focus();
            return false;
        }
        //additional validations

        if (parseInt(prod_reorder_lvl.value) > parseInt(prod_qty.value)) {
            alert("Reorder level value " + prod_reorder_lvl.value + " must not be greather than quantity value ! " + prod_qty.value);
            prod_reorder_lvl.value = "";
            prod_reorder_lvl.focus();
            return false;
        }
        else {
            return true;
        }

    } catch (error) {
        console.log(error);
    }


}

function addProduct() {
    if (!productValidation()) {
        return;
    } else {
        //GET VALUES
        var prod_barcode = document.getElementById("prod_barcode").value;
        var prod_cat = document.getElementById("prod_cat");
        var selIdx = prod_cat.selectedIndex;
        var prod_name = document.getElementById("prod_name").value;
        var prod_desc = document.getElementById("prod_desc").value;
        var prod_unit = document.getElementById("prod_unit").value;
        var prod_price1 = document.getElementById("prod_price1").value;
        var prod_price2 = document.getElementById("prod_price2").value;
        var prod_price3 = document.getElementById("prod_price3").value;
        var prod_qty = document.getElementById("prod_qty").value;
        var prod_reorder_lvl = document.getElementById("prod_reorder_lvl").value;
        var prod_drawer_No = document.getElementById("prod_drawer_No").value;
        var prod_status = document.getElementById("prod_status").value;

        //create an object and store all the gathered data.
        var vals = {
            "prod_barcode": prod_barcode,
            "prod_cat": selIdx,
            "prod_name": prod_name,
            "prod_desc": prod_desc,
            "prod_unit": prod_unit,
            "prod_price1": prod_price1,
            "prod_price2": prod_price2,
            "prod_price3": prod_price3,
            "prod_qty": prod_qty,
            "prod_reorder_lvl": prod_reorder_lvl,
            "prod_drawer_No": prod_drawer_No,
            "prod_status": prod_status
        }
        const xhr = new XMLHttpRequest();
        const url = "../controllers/product-controller.php";
        const method = "POST";

        xhr.open(method, url, true);
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                let serverResponse = xhr.responseText();
                if (serverResponse.trim() === "1") {
                    alert("Record product successfully added to the database!");
                    if (confirm("Do you want to continue?")) {
                        const insertform = document.getElementById("insert-form");
                        insertform.reset();
                    }
                    else {
                        window.location.href = "../views/product-view.php"
                    }
                }
            } else {
                console.log("ERROR");
            }
        }

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        const toJSON = JSON.stringify(vals);
        xhr.send("json=" + toJSON);
    }
}

function editProduct() {
    //GET VALUES
    var prod_id = document.getElementById("prod_id").value;
    var prod_barcode = document.getElementById("prod_barcode").value;
    var prod_cat = document.getElementById("prod_cat");
    var selIdx = prod_cat.selectedIndex;
    var prod_name = document.getElementById("prod_name").value;
    var prod_desc = document.getElementById("prod_desc").value;
    var prod_unit = document.getElementById("prod_unit").value;
    var prod_price1 = document.getElementById("prod_price1").value;
    var prod_price2 = document.getElementById("prod_price2").value;
    var prod_price3 = document.getElementById("prod_price3").value;
    var prod_qty = document.getElementById("prod_qty").value;
    var prod_reorder_lvl = document.getElementById("prod_reorder_lvl").value;
    var prod_drawer_No = document.getElementById("prod_drawer_No").value;
    var prod_status = document.getElementById("prod_status").value;

    //create an object and store all the gathered data.
    var vals = {
        "prod_id": prod_id,
        "prod_barcode": prod_barcode,
        "prod_cat": selIdx,
        "prod_name": prod_name,
        "prod_desc": prod_desc,
        "prod_unit": prod_unit,
        "prod_price1": prod_price1,
        "prod_price2": prod_price2,
        "prod_price3": prod_price3,
        "prod_qty": prod_qty,
        "prod_reorder_lvl": prod_reorder_lvl,
        "prod_drawer_No": prod_drawer_No,
        "prod_status": prod_status
    }
    const xhr = new XMLHttpRequest();
    const url = "../controllers/product-controller.php";
    const method = "POST";
    xhr.open(method, url, true);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(typeof xhr.responseText);
            if (serverResponse.trim() === "1") {
                alert("Record product "+prod_id+" is successfully updated from the database!");
                window.location.href = "../views/product-view.php"

            }
        } else {
            console.log("ERROR");
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    const toJSON = JSON.stringify(vals);

    //form validate then send
    if (!productValidation()) {
        return false;
    } else {
        if (confirm("Are you sure do you want to update this record "+prod_id+"?")) {
            xhr.send("editProd=" + toJSON);
        } else {
            alert("Action update is cancelled!");
            return;
        }

    }

    return false;
}


function deleteProduct(id) {
    const xhr = new XMLHttpRequest();
    const url = "../controllers/product-controller.php";
    const method = "POST";
    xhr.open(method, url, true);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const serverResponse = xhr.responseText;
            if (serverResponse.trim() === "1") {
                alert("Record product "+id+" is successfully deleted from the database!");
                window.location.href = "../views/product-view.php"
            }
        } else {
            console.log("ERROR");
        }
    }
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    if (confirm("Are you sure do you want to delete this " + id + "?")) {
        xhr.send("delProd=" + id);
    } else {
        alert("Action delete is cancelled!");
        return;
    }

}

// =============================== END OF PRODUCT ENTRY ==================================

// ================================ START OF PRODUCT CATEGORY ENTRY ==========================

function validateProductCategory() {
    try {
        const prod_cat_id = document.getElementById("prod_cat_id");
        const prod_cat_desc = document.getElementById("prod_cat_desc");

        if (prod_cat_desc.value == "") {
            prod_cat_desc.setAttribute("placeholder", "Please fill in this field!");
            const addcss = document.createElement("style");
            addcss.textContent = "::placeholder{color: red}";
            prod_cat_desc.style.backgroundColor = "#fff8a8";
            document.body.appendChild(addcss);
            prod_cat_desc.focus();
            return false;
        } else {
            return true;
        }


    }
    catch (error) {
        console.log(error);
    }


}
function addProductCategory() {
    if (!validateProductCategory()) {
        return;
    } else {
        const prod_cat_desc = document.getElementById("prod_cat_desc").value;

        const xhr = new XMLHttpRequest();
        const url = "../controllers/product-controller.php";
        const method = "POST";

        xhr.open(method, url, true);
        xhr.onload = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                console.log(typeof xhr.responseText);
                if (serverResponse.trim() === "1") {
                    alert("Record category" + prod_cat_desc + " is successfully added to the database!");
                    const catForm = document.getElementById("prod_cat_form");
                    catForm.reset();
                    displayCategories();
                }
            } else {
                console.log("ERROR");
            }
            // Refresh
            refreshTable();
        }

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send("prodCatDesc=" + prod_cat_desc);
    }

}

function editProductCategory() {
    if (!validateProductCategory()) {
        return;
    } else {

        const prod_cat_id = document.getElementById("prod_cat_id").value;
        const prod_cat_desc = document.getElementById("prod_cat_desc").value;

        const jsonData = {
            "prod_cat_id": prod_cat_id,
            "prod_cat_desc": prod_cat_desc
        }

        if (confirm("Are you sure do you want to update this record" + prod_cat_id + "?")) {
            const xhr = new XMLHttpRequest();
            const url = "../controllers/product-controller.php";
            const method = "POST";

            xhr.open(method, url);

            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(typeof xhr.responseText);
                    if (serverResponse.trim() === "1") {
                        alert("Record category" + prod_cat_id + " is successfully updated from the database!");
                        const catForm = document.getElementById("prod_cat_form");
                        catForm.reset();
                        displayCategories();
                    }
                } else {
                    console.log("ERROR");
                }

                // Refresh
                refreshTable();
            }

            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send("prodCatDescEdit=" + JSON.stringify(jsonData));


        } else {
            alert("Action update was cancelled!");

        }



    }
}

function refreshTable() {
    const e = document.getElementById("prod_cat_form-tbody");
    //e.firstElementChild can be used.
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }

}

function deleteProductCategory() {


    if (!validateProductCategory()) {
        return;
    } else {

        const prod_cat_id = document.getElementById("prod_cat_id").value;

        if (confirm("Are you sure do you want to delete this record "+prod_cat_id+"?")) {
            const xhr = new XMLHttpRequest();
            const url = "../controllers/product-controller.php?delProdCat_Id=" + prod_cat_id;
            const method = "GET";

            xhr.open(method, url);

            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(typeof xhr.responseText);
                    if (serverResponse.trim() === "1") {
                        alert("Record category " + prod_cat_id + " is successfully deleted from the database!");
                        const catForm = document.getElementById("prod_cat_form");
                        catForm.reset();
                        displayCategories();
                    }
                } else {
                    console.log("ERROR");
                }

                // Refresh
                refreshTable();
            }

            xhr.send();

        } else {
            alert("Action delete was cancelled!");
        }


    }

}

function displayCategories() {
    const xhr = new XMLHttpRequest();
    const url = "../controllers/product-controller.php";
    const method = "POST";

    xhr.open(method, url, true);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

            const data = JSON.parse(xhr.responseText);
            populateCategoryTable(data);
        } else {
            console.log("ERROR");
        }
    }

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send("prodCatDisplay=?");


    function populateCategoryTable(data) {
        const tableEl = document.getElementById("prod_cat_form-table");
        const tbodyEl = document.getElementById("prod_cat_form-tbody");
        var counts = 1;

        for (obj in data) {
            const tr = document.createElement("tr");
            const seq_td = document.createElement("td");
            const prod_cat_id_td = document.createElement("td");
            const prod_cat_desc_td = document.createElement("td");
            const prod_cat_action_td = document.createElement("td");
            const prod_cat_action_selectbtn = document.createElement("button");

            prod_cat_action_selectbtn.className = "prodCatSelectBtn";

            //textContent
            seq_td.textContent = counts;
            prod_cat_id_td.textContent = data[obj].cat_id;
            prod_cat_desc_td.textContent = data[obj].description;
            prod_cat_action_selectbtn.textContent = "SELECT";

            //appends
            tr.appendChild(seq_td);
            tr.appendChild(prod_cat_id_td);
            tr.appendChild(prod_cat_desc_td);
            prod_cat_action_td.appendChild(prod_cat_action_selectbtn);
            tr.appendChild(prod_cat_action_td);

            counts++;
            tbodyEl.appendChild(tr);
        }

        tableEl.addEventListener("click", getSelectedRow);
    }

    function getSelectedRow(e) {
        var tgt = e.target;
        var cur = e.currentTarget;
        var Rows = cur.rows;
        var _prod_cat_id, _prod_cat_desc = "";

        if (tgt !== cur && tgt.matches('.prodCatSelectBtn')) {
            for (let i = 0; i < Rows.length; i++) {
                if (Rows[i].contains(tgt)) {
                    _prod_cat_id = Rows[i].cells[1].textContent;
                    _prod_cat_desc = Rows[i].cells[2].textContent;

                }
            }

            const prod_cat_id_El = document.getElementById("prod_cat_id");
            const prod_cat_desc_El = document.getElementById("prod_cat_desc");

            prod_cat_id_El.value = _prod_cat_id;
            prod_cat_desc_El.value = _prod_cat_desc;
        }
    }
}