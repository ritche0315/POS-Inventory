const prod_id = document.getElementById("prod-id");
const prod_barcode = document.getElementById("prod-barcode");
const prod_name = document.getElementById("prod-name");
const prod_desc = document.getElementById("prod-desc");
const prod_select_category = document.getElementById("select-category");
const prod_unit = document.getElementById("prod-unit");
const prod_price1 = document.getElementById("prod-price1");
const prod_price2 = document.getElementById("prod-price2");
const prod_price3 = document.getElementById("prod-price3");
const prod_qty = document.getElementById("prod-qty");
const prod_reorder_lvl = document.getElementById("prod-reorder-lvl");
const prod_drawer_no = document.getElementById("prod-drawer-no");
const prod_status = document.getElementById("select-status");

const form_el = document.getElementById("form");
let form_group = document.getElementsByClassName("form-group-fields");


var warning_bg_color = "#FFCDD2";
var warning_border_color = "#D32F2F";
var border_base_color = "#78909C";

var action = "";
function populateSelectCategory() {
    const req = helperAJAXrequest("GET", "../controllers/product-controller.php?cat=categories", null, true);
    const select_category_el = document.getElementById("select-category");

    req.onload = function () {
        if (req.status == 200) {
            let serverResponse = JSON.parse(req.response);
            let html = ``;
            for (let i = 0; i < serverResponse.length; i++) {
                html += `<option value='` + serverResponse[i].cat_id + `'>` + serverResponse[i].description + `</option>`;
            }
            select_category_el.innerHTML += html;
        }
    }
}



// CRUD
function getInputValues() {
    let prod_info =
    {
        "prod_id": prod_id.value,
        "prod_barcode": prod_barcode.value,
        "prod_name": prod_name.value,
        "prod_desc": prod_desc.value,
        "prod_select_category": prod_select_category[prod_select_category.selectedIndex].value,
        "prod_unit": prod_unit.value,
        "prod_price1": prod_price1.value,
        "prod_price2": prod_price2.value,
        "prod_price3": prod_price3.value,
        "prod_qty": prod_qty.value,
        "prod_reorder_lvl": prod_reorder_lvl.value,
        "prod_drawer_no": prod_drawer_no.value,
        "prod_status": prod_status[prod_status.selectedIndex].value

    }
    return JSON.stringify(prod_info);
}
// VALIDATION

function formValidate(action_crud) {
    var isValid = false;

    // ADD product
    if (action_crud == "insert") {
        for (let i = 1; i < form_group.length; i++) {
            if (form_group[i].id == 'select-category') {
                if (parseInt(form_group[i].value) == 0) {
                    isValid = true;
                    form_group[i].style.backgroundColor = warning_bg_color;
                    form_group[i].style.borderColor = warning_border_color;
                    form_group[i].style.color = warning_border_color;
                }

                if (parseInt(form_group[i].value) != 0) {
                    form_group[i].style.backgroundColor = "white";
                    form_group[i].style.borderColor = border_base_color;
                    form_group[i].style.color = "black";
                }
            } else {
                if (form_group[i].value == '') {
                    isValid = true;
                    form_group[i].style.backgroundColor = warning_bg_color;
                    form_group[i].style.borderColor = warning_border_color;
                    form_group[i].placeholder = 'This field is required';
                    form_group[1].focus();
                }

                // check each character if not a number.
                if (form_group[i].id == 'prod-price1' || form_group[i].id == 'prod-price2' || form_group[i].id == 'prod-price3'
                    || form_group[i].id == 'prod-qty' || form_group[i].id == 'prod-reorder-lvl') {

                    if (form_group[i].value != '') {
                        let temp = form_group[i].value;
                        for (let j = 0; j < temp.length; j++) {
                            if (isNaN(temp[j])) {
                                isValid = true;
                                form_group[i].value = '';
                                form_group[i].style.backgroundColor = warning_bg_color;
                                form_group[i].style.borderColor = warning_border_color;
                                form_group[i].placeholder = 'Please input valid number only!';
                            }
                        }
                    }
                }

                if(form_group[i].id == 'prod-reorder-lvl'){
                    if(parseInt(prod_reorder_lvl.value) > parseInt(prod_qty.value)){
                        isValid = true;
                        form_group[i].value = '';
                        form_group[i].style.backgroundColor = warning_bg_color;
                        form_group[i].style.borderColor = warning_border_color;
                        form_group[i].placeholder = 'reorder level must not be greater than quantity!';
                    }
                }

            }
        }

        for (let i = 1; i < form_group.length; i++) {
            form_group[i].addEventListener("keyup", resetHandler);
        }
    }
    else if (action_crud == "edit") {
        for (let i = 0; i < form_group.length; i++) {
            if (form_group[i].id == 'select-category') {
                if (parseInt(form_group[i].value) == 0) {
                    isValid = true;
                    form_group[i].style.backgroundColor = warning_bg_color;
                    form_group[i].style.borderColor = warning_border_color;
                    form_group[i].style.color = warning_border_color;
                }

                if (parseInt(form_group[i].value) != 0) {
                    form_group[i].style.backgroundColor = "white";
                    form_group[i].style.borderColor = border_base_color;
                    form_group[i].style.color = "black";
                }
            } else {
                if (form_group[i].value == '') {
                    isValid = true;
                    form_group[i].style.backgroundColor = warning_bg_color;
                    form_group[i].style.borderColor = warning_border_color;
                    form_group[i].placeholder = 'This field is required';
                    form_group[1].focus();
                }
            }


        }
        for (let i = 0; i < form_group.length; i++) {
            form_group[i].addEventListener("keyup", resetHandler);
        }
    }


    return isValid;
}

function styleValidation(indexStart) {
    for (let i = indexStart; i < form_group.length; i++) {
        if (form_group[i].value == '') {
            form_group[i].style.backgroundColor = warning_bg_color;
            form_group[i].style.borderColor = warning_border_color;
            form_group[i].placeholder = 'This field is required';
            form_group[i].style.color = warning_border_color;
        } else {
            form_group[i].style.backgroundColor = "white";
            form_group[i].style.borderColor = border_base_color;
            form_group[i].style.color = "black";
            form_group[i].placeholder = 'This field is required';
        }
    }
}

// SAVE FUNCTION
const save_btn_el = document.getElementById("save_btn");
save_btn_el.addEventListener("click", function () {
    // if no errors then insert ot database
    if (!formValidate(action)) {

        if (action == "insert") {
            let values = getInputValues();
            const xhr = helperAJAXrequest("POST", "../controllers/product-controller.php", "insert=" + values, true);
            xhr.onload = function () {
                if (xhr.status == 200) {
                    if (parseInt(xhr.response) === 1) {
                        const insert_success = document.querySelector(".insert_success");
                        insert_success.textContent = "Record successfully added to the database!";
                        insert_success.style.display = "block";
                        resetForm();
                        // hide popup insertion success message in 3s.
                        setTimeout(() => {
                            insert_success.style.display = "none";
                        }, 3000);
                        getTableRows();
                    }
                }

            }
        } else if (action == "edit") {
            let values = getInputValues();
            let toJSON = JSON.parse(values);
            const xhr = helperAJAXrequest("POST", "../controllers/product-controller.php", "update=" + values, true);
            xhr.onload = function () {
                if (xhr.status == 200) {
                    if (parseInt(xhr.response) === 1) {
                        const update_success = document.querySelector(".update_success");
                        update_success.textContent = "Record with ID of " + toJSON.prod_id + " successfully updated from the database!";
                        update_success.style.display = "block";
                        resetForm();
                        // hide popup insertion success message in 3s.
                        setTimeout(() => {
                            update_success.style.display = "none";
                            // reset to default insert title header
                            const title_header = document.querySelector(".title-header");
                            title_header.innerText = "Add New Product";
                            // close modal
                            const update_modal = document.getElementsByClassName("update-modal");
                            update_modal[0].close();
                        }, 3000);

                        getTableRows();
                    }
                }

            }
        }

    }
});

