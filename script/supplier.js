var sform = document.getElementById("content-supplier-form");
var sIdLabel = document.getElementById("content-supplier-input-id-label");
var sId = document.getElementById("content-supplier-input-id");
var sName = document.getElementById("content-supplier-input-name");
var sAddress = document.getElementById("content-supplier-input-address");
var sPhoneNo = document.getElementById("content-supplier-input-phoneNo");


// input buttons
var btnSave = document.getElementById("content-supplier-input-btnSave");
var btnEdit = document.getElementById("content-supplier-input-btnEdit");
var btnDelete = document.getElementById("content-supplier-input-btnDelete");
var btnClear = document.getElementById("content-supplier-input-btnClear");

window.addEventListener("load", loadComponents);

function loadComponents() {
    initEventListeners();
    displayAllSupplier();
    btnNew_btnUpdateDelete_EntryClicked();
}



function createXMLHttpRequest(method, url, data) {
    try {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        if (method == "POST") {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhr.send(data);

            return xhr;
        }

        xhr.send();
        return xhr;
    } catch (error) {
        console.log(error);
    }

}

function initEventListeners() {

    // add event Listener
    btnSave.addEventListener("click", addSupplier);
    btnEdit.addEventListener("click", editSupplier);
    btnDelete.addEventListener("click", deleteSupplier);
    btnClear.addEventListener("click", () => {
        const supplierForm = document.getElementById("content-supplier-form");
        supplierForm.reset();
    });

    //add event listener to button select.
    getSelectedRowData();

    // ======== filter table ========
    const searchInput = document.getElementById("content-supplier-search-input");

    // add event listener
    searchInput.addEventListener("keyup", filterTable);

    // ========== End of filter table =============
}

function btnNew_btnUpdateDelete_EntryClicked(){
    const btnNewEntry = document.getElementById("content-supplier-button-btnNewEntry");
    btnNewEntry.addEventListener("click",() =>{
        const groupWrapper1 = document.getElementsByClassName("content-supplier-input-text-group-wrapper")[0];
        groupWrapper1.style.display = "flex";
        const groupWrapper2 = document.getElementsByClassName("content-supplier-input-button-group-wrapper")[0];
        groupWrapper2.style.display = "flex";

        sIdLabel.style.display = "none";
        sId.style.display = "none";
        btnDelete.style.display = "none";
        btnEdit.style.display = "none";
        btnNewEntry.style.display = "none";
        btnUpdateDelete.style.display = "none";

        

    });

    const btnUpdateDelete = document.getElementById("content-supplier-button-btnEditDeleteEntry");
    btnUpdateDelete.addEventListener("click",() =>{
        const groupWrapper1 = document.getElementsByClassName("content-supplier-input-text-group-wrapper")[0];
        groupWrapper1.style.display = "flex";
        const groupWrapper2 = document.getElementsByClassName("content-supplier-input-button-group-wrapper")[0];
        groupWrapper2.style.display = "flex";


        btnSave.style.display = "none";
        btnNewEntry.style.display = "none";
        btnUpdateDelete.style.display = "none";

        displaySelectButton();
    });


}


function displaySelectButton(){
    var x = document.getElementsByClassName("content-supplier-table-btnSelect");
    for(let i=0; i< x.length; i++){
        x[i].style.display = "block";
    }
}

function getSelectedRowData() {
    const tbodyEl = document.getElementById("content-supplier-table-body");

    tbodyEl.addEventListener("click", btnSelectClicked);

    function btnSelectClicked(e) {

        var tgt = e.target;
        var cur = e.currentTarget;
        var Rows = cur.rows;
        if (tgt !== cur && tgt.matches('.content-supplier-table-btnSelect')) {
            for (let i = 0; i < Rows.length; i++) {
                if (Rows[i].contains(tgt)) {
                    const id = document.getElementById("content-supplier-input-id");
                    const sname = document.getElementById("content-supplier-input-name");
                    const address = document.getElementById("content-supplier-input-address");
                    const phoneNo = document.getElementById("content-supplier-input-phoneNo");

                    id.value = Rows[i].cells[1].textContent;
                    sname.value = Rows[i].cells[2].textContent;
                    address.value = Rows[i].cells[3].textContent;
                    phoneNo.value = Rows[i].cells[4].textContent;
                }
            }
        }

    }


}



function filterTable() {
    var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2, txtValue3;
    input = document.getElementById("content-supplier-search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("content-supplier-table-body");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td1 = tr[i].getElementsByTagName("td")[1];
        td2 = tr[i].getElementsByTagName("td")[2];
        if (td1 && td2) {
            txtValue1 = td1.textContent || td1.innerText;
            txtValue2 = td2.textContent || td2.innerText;
            if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}
// form validation
function validateForm(action) {
    let errors = [];
    let errorStr = "";

    if (action.toLowerCase() === "add") {
        if (sName.value == "") {
            errors.push("Name is empty");
        }

        if (sAddress.value == "") {
            errors.push("Address is empty");
        }

        if (sPhoneNo.value == "") {
            errors.push("Contact No. is empty");
        }

    } else if (action.toLowerCase() == "edit" || action.toLowerCase() == "delete") {
        if (sId.value == "") {
            errors.push("ID is Empty");
        }

        if (sName.value == "") {
            errors.push("Name is empty");
        }

        if (sAddress.value == "") {
            errors.push("Address is empty");
        }

        if (sPhoneNo.value == "") {
            errors.push("Contact No. is empty");
        }


    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            errorStr += errors[i] + "\n";
        }

        alert("ERROR:\n" + errorStr);

        return false;
    } else {
        return true;
    }

}

function populateTable(serverResponse) {


    let counts = 1;
    for (objData in serverResponse) {
        const tbodyEl = document.getElementById("content-supplier-table-body");
        const tr = document.createElement("tr");

        const idTd_El = document.createElement("td");
        const snameTd_El = document.createElement("td");
        const addressTd_El = document.createElement("td");
        const phoneNoTd_El = document.createElement("td");
        const selectTd_El = document.createElement("td");
        const seqTd_El = document.createElement("td");
        const selectBtn = document.createElement("button");


        selectBtn.className = "content-supplier-table-btnSelect";
        selectBtn.textContent = "SELECT";
        seqTd_El.textContent = counts;
        idTd_El.textContent = serverResponse[objData].supplier_id;
        snameTd_El.textContent = serverResponse[objData].name;
        addressTd_El.textContent = serverResponse[objData].address;
        phoneNoTd_El.textContent = serverResponse[objData].phoneNo;


        selectTd_El.appendChild(selectBtn);
        tr.appendChild(seqTd_El);
        tr.appendChild(idTd_El);
        tr.appendChild(snameTd_El);
        tr.appendChild(addressTd_El);
        tr.appendChild(phoneNoTd_El);
        tr.appendChild(selectTd_El);


        counts++;
        tbodyEl.appendChild(tr);
    }
}

function refreshTable() {
    const e = document.getElementById("content-supplier-table-body");
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }

}

