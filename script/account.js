var accID = document.getElementById("account-id");
var accFullname = document.getElementById("account-fullname");
var accUsername = document.getElementById("account-username");
var accPassword = document.getElementById("account-password");
var accType = document.getElementById("account-type");

var btnInsert = document.getElementById("btnInsert");
var btnEdit = document.getElementById("btnEdit");
var btnDelete = document.getElementById("btnDelete");
var btnClear = document.getElementById("btnClear");

var accForm = document.querySelector("form");

window.addEventListener("load", init);

function init() {
    displayAccounts();
    getSelectedRowdata();

    document.getElementById("account-search-input").addEventListener("keyup", filterTable);
    // button action
    btnInsert.addEventListener("click", insertAccount);
    btnEdit.addEventListener("click", editAccount);
    btnDelete.addEventListener("click", deleteAccount);
    btnClear.addEventListener("click", () =>{
        accForm.reset();
    });
    btnNew_btnUpdateDelete_EntryClicked();
}

function btnNew_btnUpdateDelete_EntryClicked(){
    const btnNew = document.getElementById("account-entry-btnNew");
    const btnUpdateDelete = document.getElementById("account-entry-btnUpdateDelete");
    const entryWrapper = document.getElementsByClassName("account-entry-wrapper")[0];
    btnNew.addEventListener("click", ()=>{
        const a = document.getElementsByClassName("form-inputfield-group")[0];
        const b = document.getElementsByClassName("form-button-group")[0];
        const c = document.getElementById("account-id-label");

        c.style.display = "none";
        accID.style.display = "none";
        a.style.display = "grid";
        b.style.display = "grid";
        btnEdit.style.display = "none";
        btnDelete.style.display = "none";
        entryWrapper.style.display = "none";
    });

    btnUpdateDelete.addEventListener("click", ()=>{
        const a = document.getElementsByClassName("form-inputfield-group")[0];
        const b = document.getElementsByClassName("form-button-group")[0];

        a.style.display = "grid";
        b.style.display = "grid";
        btnInsert.style.display = "none";

        entryWrapper.style.display = "none";

        displaySelectButton();
    });
}

function validateForm(action) {
    let errors = [];
    let errorStr = "";
    console.log(accType.value);
    if (action.toLowerCase() === "insert") {
        if (accFullname.value == "") {
            errors.push("Name is empty");
        }

        if (accUsername.value == "") {
            errors.push("Username is empty");
        }

        if (accPassword.value == "") {
            errors.push("Password is empty");
        }

        if (accType.value == "null") {
            errors.push("Type is empty");
        }

    } else if (action.toLowerCase() == "edit" || action.toLowerCase() == "delete") {
        if (accID.value == "") {
            errors.push("ID is Empty");
        }

        if (accFullname.value == "") {
            errors.push("Name is empty");
        }

        if (accUsername.value == "") {
            errors.push("Username is empty");
        }

        if (accPassword.value == "") {
            errors.push("Password is empty");
        }

        if (accType.value == "null") {
            errors.push("Type is empty");
        }


    }

    if (errors.length > 0) {
        for (let i = 0; i < errors.length; i++) {
            errorStr += "("+i+") "+errors[i] + "\n";
        }

        alert("ERROR:\n" + errorStr);

        return false;
    } else {
        return true;
    }

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



function getSelectedRowdata() {
    const tbodyEl = document.getElementById("account-table-tbody");

    tbodyEl.addEventListener("click", btnSelectClicked);

    function btnSelectClicked(e) {

        var tgt = e.target;
        var cur = e.currentTarget;
        var Rows = cur.rows;
        if (tgt !== cur && tgt.matches('.btnSelect')) {
            for (let i = 0; i < Rows.length; i++) {
                if (Rows[i].contains(tgt)) {
                    accID.value = Rows[i].cells[1].textContent;
                    accFullname.value = Rows[i].cells[2].textContent;
                    accUsername.value = Rows[i].cells[3].textContent;
                    accPassword.value = Rows[i].cells[4].textContent;
                    accType.value = Rows[i].cells[5].textContent;
                }
            }
        }
    }
}


function filterTable() {
    var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2, txtValue3;
    input = document.getElementById("account-search-input");
    filter = input.value.toUpperCase();
    table = document.getElementById("account-table-tbody");
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


function populateTable(serverResponse) {


    let counts = 1;
    for (objData in serverResponse) {
        const tbodyEl = document.getElementById("account-table-tbody");
        const tr = document.createElement("tr");

        const idTd_El = document.createElement("td");
        const fullNameTd_El = document.createElement("td");
        const usernameTd_El = document.createElement("td");
        const passwordTd_El = document.createElement("td");
        const accTypeTd_El = document.createElement("td");
        const seqTd_El = document.createElement("td");
        const selectTd_El = document.createElement("td");
        const selectBtn = document.createElement("button");


        selectBtn.className = "btnSelect";
        selectBtn.textContent = "SELECT";
        seqTd_El.textContent = counts;
        idTd_El.textContent = serverResponse[objData].id;
        fullNameTd_El.textContent = serverResponse[objData].full_Name;
        usernameTd_El.textContent = serverResponse[objData].username;
        passwordTd_El.textContent = serverResponse[objData].password;
        accTypeTd_El.textContent = serverResponse[objData].accType;

        selectTd_El.appendChild(selectBtn);
        tr.appendChild(seqTd_El);
        tr.appendChild(idTd_El);
        tr.appendChild(fullNameTd_El);
        tr.appendChild(usernameTd_El);
        tr.appendChild(passwordTd_El);
        tr.appendChild(accTypeTd_El);
        tr.appendChild(selectTd_El);


        counts++;
        tbodyEl.appendChild(tr);
    }
}

function hideSelectButton(){
    const tbody = document.getElementById("account-table-tbody");
    for(let i=0; i < tbody.rows.length; i++){
        tbody.rows[i].cells[6].firstChild.style.display = "none";
    }
}

function displaySelectButton(){
    const tbody = document.getElementById("account-table-tbody");
    for(let i=0; i < tbody.rows.length; i++){
        tbody.rows[i].cells[6].firstChild.style.display = "block";
    }
}

function refreshTable() {
    const e = document.getElementById("account-table-tbody");
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }

}