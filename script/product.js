var tableProduct = document.querySelector("#table-product");
var tableThead = document.querySelector("#table-product > thead")
var tableBody = document.querySelector("#table-product > tbody");


window.addEventListener("load", populateTable);

// Populate Table
function populateTable() {
  getTableColumns();
  getTableRows();
}

function getTableColumns() {
  let xhr = helperAJAXrequest("GET", "../controllers/product-controller.php?show=products", null, true)

  xhr.onload = () => {
    if (xhr.status == 200) {
      let serverResponse = JSON.parse(xhr.response);
      let keys = Object.keys(serverResponse[0]);

      var th = document.createElement("th");
      th.textContent = "#";

      tableThead.appendChild(th);
      for (let key in keys) {
        var th = document.createElement("th");
        th.textContent = keys[key];

        tableThead.appendChild(th)
      }
      var th = document.createElement("th");
      th.textContent = "Action";
      tableThead.appendChild(th);
    }

  }
}

function getTableRows() {
  let xhr = helperAJAXrequest("GET", "../controllers/product-controller.php?show=products", null, true)

  xhr.onload = () => {
    if (xhr.status == 200) {

      let serverResponse = JSON.parse(xhr.response);
      let rowCount = 1;
      for (let key in serverResponse) {
        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.textContent = rowCount;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_id;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_barcode;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_name;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_desc;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_category;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_unit;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_price1;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_price2;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_price3;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_qty;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_reorder_lvl;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_drawer_No;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = serverResponse[key].prod_status;
        tr.appendChild(td);

        // action edit/delete
        td = document.createElement("td");
        let trashIcon = document.createElement("span");
        let editIcon = document.createElement("span")
        editIcon.className = "icon-square-pen-solid edit-button";
        trashIcon.className = "icon-trash-can-solid delete-button";
        td.appendChild(editIcon);
        td.appendChild(trashIcon);
        tr.appendChild(td);


        rowCount++;
        tableBody.appendChild(tr);
      }
    }
  }
}

function getSVGIcon(path) {
  return helperAJAXrequest("GET", path, null, true);
}

// pagination


// HELPER FUNCTIONS
function helperAJAXrequest(method, url, data, type) {

  const xhr = new XMLHttpRequest();
  xhr.open(method, url, type)

  if (method == "POST") {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(data)
    return xhr;
  }
  xhr.send();
  return xhr;
}