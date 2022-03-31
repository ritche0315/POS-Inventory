var accID = document.getElementById("account-id");
var accFullname = document.getElementById("account-fullname");
var accUsername = document.getElementById("account-username");
var accPassword = document.getElementById("account-password");
var accType = document.getElementById("account-type");
var accForm = document.querySelector("form");

function insertAccount() {
    let action = "insert";
    if(validateForm(action)){
        let acc = {
            id:accID.value,
            fullName:accFullname.value,
            username:accUsername.value,
            password:accPassword.value,
            accType:accType.value
        }
    
        let data = JSON.stringify(acc);
        let xhr = createXMLHttpRequest("POST", "../controllers/account-controller.php", "insertAccount=" + data);
    
        xhr.onload = function () {
            const serverResponse = xhr.responseText;
            if(xhr.readyState == 4 && xhr.status == 200){
                if(serverResponse.trim() === "1"){
                    alert("Account "+accID.value+" successfully added to the database");
                    accForm.reset();
                    refreshTable();
                    displayAccounts();
                }
            }
       
        }
    }
   
}

function editAccount() {
    let action = "edit";
    if(validateForm(action)){
        let acc = {
            id:accID.value,
            fullName:accFullname.value,
            username:accUsername.value,
            password:accPassword.value,
            accType:accType.value
        }

        if(confirm("Are you sure do you want to update this record "+accID.value+"?")){
            let data = JSON.stringify(acc);
            let xhr = createXMLHttpRequest("POST", "../controllers/account-controller.php", "editAccount=" + data);
        
            xhr.onload = function () {
                const serverResponse = xhr.responseText;
                if(xhr.readyState == 4 && xhr.status == 200){
                    if(serverResponse.trim() === "1"){
                        alert("Account "+acc.id+" successfully updated from the database");
                        accForm.reset();
                        refreshTable();
                        displayAccounts();
                    }
                }
           
            }
        }else{
            alert("Action update was cancelled!");
        }
    
    
        
    }
}

function deleteAccount() {
    let action = "delete";
    if(validateForm(action)){
        if(confirm("Are you sure do you want to delete this record "+accID.value+"?")){
            let xhr = createXMLHttpRequest("GET", "../controllers/account-controller.php?deleteAccount="+accID.value, null);
        
            xhr.onload = function () {
                const serverResponse = xhr.responseText;
                if(xhr.readyState == 4 && xhr.status == 200){
                    if(serverResponse.trim() === "1"){
                        alert("Account "+accID.value+" successfully deleted from the database");
                        accForm.reset();
                        refreshTable();
                        displayAccounts();
                    }
                }
           
            }
        }else{
            alert("Action delete was cancelled!");
        }
    }
}

function displayAccounts() {
    let xhr = createXMLHttpRequest("GET", "../controllers/account-controller.php?getAccounts", null);

    xhr.onload = function () {
        const serverResponse = JSON.parse(xhr.responseText);

        console.log(serverResponse);
        populateTable(serverResponse);
    }


}
