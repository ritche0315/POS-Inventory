
var sform = document.getElementById("content-supplier-form");
var sId = document.getElementById("content-supplier-input-id");
var Name = document.getElementById("content-supplier-input-name");
var sAddress = document.getElementById("content-supplier-input-address");
var sPhoneNo = document.getElementById("content-supplier-input-phoneNo");


function addSupplier() {
    var action = "add";
    if (validateForm(action)) {
        let sObj = {
            id: sId.value,
            name: Name.value,
            address: sAddress.value,
            contact: sPhoneNo.value
        }

        let converted_sObj = JSON.stringify(sObj);
        let xhr = createXMLHttpRequest("POST", "../controllers/supplier-controller.php", "addSupplier=" + converted_sObj);

        xhr.onload = function () {
            //do this

            if (xhr.readyState == 4 && xhr.status == 200) {
                let serverResponse = xhr.responseText;
                if (serverResponse.trim() === "1") {
                    alert("Record supplier " + sObj.id + " succesfully added to the database!");
                    sform.reset();
                    displayAllSupplier();
                }
            } else {
                alert("Something wrong on the server!");
            }

            refreshTable();
        }
    }
}

function editSupplier() {
    var action = "edit";
    if (validateForm(action)) {
        let sObj = {
            id: sId.value,
            name: Name.value,
            address: sAddress.value,
            contact: sPhoneNo.value
        }

        if (confirm("Are you sure do you want to update this record " + sObj.id + "?")) {
            let converted_sObj = JSON.stringify(sObj);
            let xhr = createXMLHttpRequest("POST", "../controllers/supplier-controller.php", "editSupplier=" + converted_sObj);

            xhr.onload = function () {
                //do this

                if (xhr.readyState == 4 && xhr.status == 200) {
                    let serverResponse = xhr.responseText;
                    if (serverResponse.trim() === "1") {
                        alert("Record supplier" + sObj.id + " is successfully updated from the database!");
                        sform.reset();
                        displayAllSupplier();
                    }
                } else {
                    alert("Something wrong on the server!");
                }
            }

            refreshTable();
        } else {
            alert("Action update was cancelled!");
        }
    }


}

function deleteSupplier() {
    var action = "delete";
    if (validateForm(action)) {
        if (confirm("Are you sure do you want to delete this record " + sId.value)) {
            let xhr = createXMLHttpRequest("GET", "../controllers/supplier-controller.php?delSupplier=" + sId.value, null);

            xhr.onload = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let serverResponse = xhr.responseText;
                    console.log(serverResponse.trim());
                    if (serverResponse.trim() === "1") {
                        alert("Record supplier " + sId.value + " is successfully deleted from the database!");
                        sform.reset();
                        displayAllSupplier();
                    }
                } else {
                    alert("Something wrong on the server!");
                }

                refreshTable();
            }
        } else {
            alert("Action delete was cancelled!");
        }
    }


}

function displayAllSupplier() {
    let xhr = createXMLHttpRequest("GET", "../controllers/supplier-controller.php?showSuppliers", null);

    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let serverResponse = JSON.parse(xhr.responseText);
            populateTable(serverResponse);
        } else {
            alert("Something wrong on the server!");
        }
    }
}




