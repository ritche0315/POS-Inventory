const prod_id = document.getElementById("prod-id");
const prod_barcode = document.getElementById("prod-barcode");
const prod_name = document.getElementById("prod-name");
const prod_desc = document.getElementById("prod-desc");
const prod_select_category = document.getElementById("select-category");
const prod_unit = document.getElementById("prod-unit");
const prod_price1 = document.getElementById("prod-price1");
const prod_price2 = document.getElementById("prod-price2");
const prod_price3= document.getElementById("prod-price3");
const prod_qty= document.getElementById("prod-qty");
const prod_reorder_lvl= document.getElementById("prod-reorder-lvl");
const prod_drawer_no= document.getElementById("prod-drawer-no");
const prod_status = document.getElementById("select-status");
const form_el = document.getElementById("form");

function populateSelectCategory(){
    const req = helperAJAXrequest("GET", "../controllers/product-controller.php?cat=categories", null, true);
    const select_category_el = document.getElementById("select-category");
    
    req.onload = function() {
        if(req.status == 200){
            let serverResponse = JSON.parse(req.response);
            let html = ``;
            for(let i = 0; i < serverResponse.length; i++){
                html += `<option value='`+serverResponse[i].cat_id+`'>`+serverResponse[i].description+`</option>`;
            }
            select_category_el.innerHTML += html;
        }
    }
}



// CRUD
function insertProduct(){
    let prod_info =
        {
            "prod_id":prod_id.value,
            "prod_barcode":prod_barcode.value,
            "prod_name": prod_name.value,
            "prod_desc":prod_desc.value,
            "prod_select_category":prod_select_category[prod_select_category.selectedIndex].value,
            "prod_unit":prod_unit.value,
            "prod_price1":prod_price1.value,
            "prod_price2":prod_price2.value,
            "prod_price3":prod_price3.value,
            "prod_qty":prod_qty.value,
            "prod_reorder_lvl": prod_reorder_lvl.value,
            "prod_drawer_no":prod_drawer_no.value,
            "prod_status":prod_status[prod_status.selectedIndex].value

        }
    return JSON.stringify(prod_info);
}
// VALIDATION

function formValidate(action){
    var validateEmpty = [];
    var validateNumbers = [];

    if(action == "insert"){
        if(prod_barcode.value == ''){
            validateEmpty.push("Barcode");
        }
        if(prod_name.value == ''){
            validateEmpty.push("Product Name");
        }
        if(prod_desc.value == ''){
            validateEmpty.push("Description");
        }
        if(prod_select_category[prod_select_category.selectedIndex].value == '0'){
            validateEmpty.push("Category");
        }
        if(prod_unit.value == ''){
            validateEmpty.push("Unit");
        }
        if(prod_price1.value == ''){
            validateEmpty.push("Price1");
        }
        if(prod_price2.value == ''){
            validateEmpty.push("Price2");
        }
        if(prod_price3.value == ''){
            validateEmpty.push("Price3");
        }
        if(prod_qty.value == ''){
            validateEmpty.push("Quantity");
        }
        if(prod_reorder_lvl.value == ''){
            validateEmpty.push("Re-Order");
        }
        if(prod_drawer_no.value == ''){
            validateEmpty.push("Drawer No.")
        }
        if(prod_status[prod_status.selectedIndex].value == '0'){
            validateEmpty.push("status");
        }
        
        if(isNaN(parseInt(prod_qty.value))){
            validateNumbers.push("Quantity");
        }
        if(isNaN(parseInt(prod_price1.value))){
            validateNumbers.push("Price1");
        }
        if(isNaN(parseInt(prod_price2.value))){
            validateNumbers.push("Price2");
        }
        if(isNaN(parseInt(prod_price3.value))){
            validateNumbers.push("Price3");
        }
        if(isNaN(parseInt(prod_reorder_lvl.value))){
            validateNumbers.push("Re-Order");
        }
        
    }
    else if(action == "edit"){
        if(prod_id.value == ''){
            validateEmpty.push("Product ID");
        }
        if(prod_barcode.value == ''){
            validateEmpty.push("Barcode");
        }
        if(prod_name.value == ''){
            validateEmpty.push("Product Name");
        }
        if(prod_desc.value == ''){
            validateEmpty.push("Description");
        }
        if(prod_select_category[prod_select_category.selectedIndex].value == '0'){
            validateEmpty.push("Category");
        }
        if(prod_unit.value == ''){
            validateEmpty.push("Unit");
        }
        if(prod_price1.value == ''){
            validateEmpty.push("Price1");
        }
        if(prod_price2.value == ''){
            validateEmpty.push("Price2");
        }
        if(prod_price3.value == ''){
            validateEmpty.push("Price3");
        }
        if(prod_qty.value == ''){
            validateEmpty.push("Quantity");
        }
        if(prod_reorder_lvl.value == ''){
            validateEmpty.push("Re-Order");
        }
        if(prod_drawer_no.value == ''){
            validateEmpty.push("Drawer No.")
        }
        if(prod_status[prod_status.selectedIndex].value == '0'){
            validateEmpty.push("status");
        }
    }
    else{

    }
    
    return {
        "validateEmpty":validateEmpty,
        "validateNumbers":validateNumbers
    }
}

// SAVE FUNCTION
const save_btn_el = document.getElementById("save_btn");
save_btn_el.addEventListener("click", function(){
    let validation = formValidate("insert");

    // if no errors then insert ot database
    if(validation.validateEmpty.length <= 0 && validation.validateNumbers.length <= 0){
        let values = insertProduct();
        const xhr = helperAJAXrequest("POST", "../controllers/product-controller.php", "insert="+values, true);
        xhr.onload = function(){
            if(xhr.status == 200){
                if(parseInt(xhr.response) === 1){
                    const insert_success = document.querySelector(".insert_success");
                    insert_success.textContent = "Record successfully added to the database!";
                    insert_success.style.display = "block";
                    form_el.reset();
                }
            }
        
        }
    }else{
        let str = "";
        //else then display the errors
        if(validation.validateEmpty.length > 0){
            str += "Please fill in all the requried fields ! \n\n EMPTY FIELDS: \n\n";
            for(let i=0; i < validation.validateEmpty.length; i++){
                str += "["+(i+1)+"] "+validation.validateEmpty[i] + " *\n";
            }
    
        }
        

        if(validation.validateNumbers.length > 0){

            str += "\n\nPlease enter valid number on these following fields: \n\n";
            for(let i=0; i < validation.validateNumbers.length; i++){
                str += "["+(i+1)+"] "+validation.validateNumbers[i] + " *\n";
            }
        }
        
        alert(str)
    }
    
});

