
window.addEventListener("load", loadComponents);

function loadComponents() {

  displayProducts();
  btnCloseClicked();
  populateComboBoxCategory();
}
// ==================================== START CATEGORY ENTRY =======================
function btnCategoryEntryClicked() {

  //hide product dashboard
  const entryWrapper = document.getElementsByClassName("product-entry-wrapper");
  const searchWrapper = document.getElementsByClassName("product-search-wrapper");
  const tableWrapper = document.getElementsByClassName("product-table-wrapper");

  changeDisplay(entryWrapper, "none");
  changeDisplay(searchWrapper, "none");
  changeDisplay(tableWrapper, "none");

  //change grid format, remove unnecessary rows
  const mainContent = document.getElementsByClassName("content-maincontent-container");
  changeGridFormat(mainContent, "1fr");

  const prodcatid = document.getElementById("prod_cat_id");
  prodcatid.disabled = true;
  const catForm = document.getElementById("prod_cat_main");
  catForm.style.display = "block";

  function changeDisplay(coll, display) {

    for (var i = 0, len = coll.length; i < len; i++) {
      coll[i].style["display"] = display;
    }


  }

  function changeGridFormat(coll, format) {

    for (var i = 0, len = coll.length; i < len; i++) {
      coll[i].style["grid-template-rows"] = format;
    }


  }
}
// ===================================== END CATEGORY ENTRY =====================
// =================================== START PRODUCT ENTRY ==================================



function btnCloseClicked() {
  const btnclose = document.getElementsByClassName("btnClose");
  getBtnClose(btnclose)

  function getBtnClose(coll) {

    for (var i = 0, len = coll.length; i < len; i++) {
      coll[i].addEventListener("click", function () {
        window.location.href = "../views/product-view.php";
      });

    }


  }


}


function btnProductEntryClicked() {

  //hide product dashboard
  const entryWrapper = document.getElementsByClassName("product-entry-wrapper");
  const searchWrapper = document.getElementsByClassName("product-search-wrapper");
  const tableWrapper = document.getElementsByClassName("product-table-wrapper");

  changeDisplay(entryWrapper, "none");
  changeDisplay(searchWrapper, "none");
  changeDisplay(tableWrapper, "none");

  //change grid format, remove unnecessary rows
  const mainContent = document.getElementsByClassName("content-maincontent-container");
  changeGridFormat(mainContent, "1fr");

  //hide button edit
  const btnEditWrapper = document.getElementById("btn-edit-wrapper");
  btnEditWrapper.style.display = "none";

  //hide prod_id entry fields
  const btnProdID = document.getElementById("prod_id");
  btnProdID.style.display = "none";
  const prodID_Label = document.getElementById("prod_id_label");
  prodID_Label.style.display = "none";


  //display product entry
  const insertMain = document.getElementById("insert-main");
  insertMain.style.display = "block";


  function changeDisplay(coll, display) {

    for (var i = 0, len = coll.length; i < len; i++) {
      coll[i].style["display"] = display;
    }


  }

  function changeGridFormat(coll, format) {

    for (var i = 0, len = coll.length; i < len; i++) {
      coll[i].style["grid-template-rows"] = format;
    }


  }
}
// -====================== END OF PRODUCT ENTRY ===================================

function populateComboBoxCategory() {
  var prod_cat_select = document.getElementById("prod_cat");
  //create http object
  const xhr2 = new XMLHttpRequest();
  // const url = "../models/productModel.php";
  // const url = "../controllers/product-controller.php";
  const url = "../controllers/product-controller.php";
  const method = "POST";

  //open request
  xhr2.open(method, url, true);

  //callback function
  xhr2.onload = function () {
    //do this
    if (xhr2.readyState == 4 && xhr2.status == 200) {
      const data = JSON.parse(xhr2.responseText);
      const defaultOpt = document.createElement("option");
      defaultOpt.textContent = "CHOOSE CATEGORY";
      defaultOpt.value = null;
      prod_cat_select.appendChild(defaultOpt);
      for (x in data) {
        const opt = document.createElement("option");
        opt.id = data[x].cat_id;
        opt.value = data[x].description;
        opt.textContent = data[x].description;
        prod_cat_select.appendChild(opt);
      }
    } else {
      console.log("ERROR");
    }
  }

  //set type of request
  xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr2.send("cmbcategory=?");
}
// ======================== START OF PRODUCT EDIT =================================

function btnEditProductClicked(_prodID, _prodBarcode, _prodCat, _prodName, _prodDesc, _prodUnit, _prodPrice1, _prodPrice2, _prodPrice3, _prodQty,
  _prodReorderLvl, _prodDrawerNo, _prodStatus) {

  //hide product dashboard
  const entryWrapper = document.getElementsByClassName("product-entry-wrapper");
  const searchWrapper = document.getElementsByClassName("product-search-wrapper");
  const tableWrapper = document.getElementsByClassName("product-table-wrapper");

  changeDisplay(entryWrapper, "none");
  changeDisplay(searchWrapper, "none");
  changeDisplay(tableWrapper, "none");

  //change format remove unnecessary rows
  const mainContent = document.getElementsByClassName("content-maincontent-container");
  changeGridFormat(mainContent, "1fr");

  //hide button save
  const btnSaveWrapper = document.getElementById("btn-save-wrapper");
  btnSaveWrapper.style.display = "none";

  //change format title heading
  const titleHeading = document.getElementById("title-heading");
  titleHeading.textContent = "Product Update";
  //populateCategory

  //display product entry
  const insertMain = document.getElementById("insert-main");
  insertMain.style.display = "block";

  //GET DATA FROM THE TABLE AND SET DISABLED
  var prod_id = document.getElementById("prod_id");
  prod_id.disabled = true;
  prod_id.value = _prodID;
  var prod_barcode = document.getElementById("prod_barcode");
  prod_barcode.value = _prodBarcode;
  var prod_cat = document.getElementById("prod_cat");
  prod_cat.value = _prodCat;
  var prod_name = document.getElementById("prod_name");
  prod_name.value = _prodName;
  var prod_desc = document.getElementById("prod_desc");
  prod_desc.value = _prodDesc;
  var prod_unit = document.getElementById("prod_unit");
  prod_unit.value = _prodUnit;
  var prod_price1 = document.getElementById("prod_price1");
  prod_price1.value = _prodPrice1;
  var prod_price2 = document.getElementById("prod_price2");
  prod_price2.value = _prodPrice2;
  var prod_price3 = document.getElementById("prod_price3");
  prod_price3.value = _prodPrice3;
  var prod_qty = document.getElementById("prod_qty");
  prod_qty.value = _prodQty;
  var prod_reorder_lvl = document.getElementById("prod_reorder_lvl");
  prod_reorder_lvl.value = _prodReorderLvl;
  var prod_drawer_No = document.getElementById("prod_drawer_No");
  prod_drawer_No.value = _prodDrawerNo;
  var prod_status = document.getElementById("prod_status");
  prod_status.value = _prodStatus;

  function changeDisplay(coll, display) {

    for (var i = 0, len = coll.length; i < len; i++) {
      coll[i].style["display"] = display;
    }


  }

  function changeGridFormat(coll, format) {

    for (var i = 0, len = coll.length; i < len; i++) {
      coll[i].style["grid-template-rows"] = format;
    }


  }


}

// ====================================== END OF PRODUCT EDIT ====================================


function filterTable() {
  // Declare variables
  var input, filter, table, tr, td1, td2, td3, i, txtValue1, txtValue2, txtValue3;
  input = document.getElementById("product-search-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTableBody");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[4];
    if (td1 && td2 && td3) {
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;
      if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }

}


//Create ajax method

function establishServerConnection(method, url) {
  const xhr = new XMLHttpRequest(method, url);
  xhr.open(method, url);
  if (method == "POST") {
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  }
  xhr.send();

  return xhr;
}
// Display Product
function displayProducts() {
  const xhr = establishServerConnection("POST", "../controllers/product-controller.php")

  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const server_response = JSON.parse(this.responseText);
      console.log(server_response);
      populateTable(server_response);
    }
  }

  var tableEl = document.getElementsByClassName("product-table")[0];
  var tbody = document.getElementsByClassName("product-table-tbody")[0];
  var thead = document.getElementsByClassName("product-table-thead")[0];

  function populateTable(serverResponse) {

      let rowCount = 1;
  
  
      // get column names
      helperAppendElement(thead, helperCreateElement("th", "#"));
      let tableColumns = Object.keys(serverResponse[0])
  
      for (let i = 0; i < tableColumns.length; i++) {
  
          helperAppendElement(thead, helperCreateElement("th", tableColumns[i]));
      }
  
      
  
      // get each row data
  
      for (let data in serverResponse) {
  
          var tr = helperCreateElement("tr");
          helperAppendElement(tr, helperCreateElement("td", rowCount));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_id));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_barcode));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_category));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_name));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_desc));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_unit));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_price1));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_price2));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_price3));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_qty));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_reorder_lvl));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_drawer_No));
          helperAppendElement(tr, helperCreateElement("td", serverResponse[data].prod_status));
  
  
          rowCount++;
          tbody.appendChild(tr);
      }
      
      tableEl.addEventListener("click", actionColumn);
  }
  
  
  function helperCreateElement(el, textcontent) {
      let elcreated = document.createElement(el);
      elcreated.textContent = textcontent;
      return elcreated;
  }
  
  function helperAppendElement(appendTo, child){
      appendTo.appendChild(child);
  }

  function actionColumn(e) {
    editRow(e);
    deleteRow(e);
  }

  function editRow(e) {
    var tgt = e.target;
    var cur = e.currentTarget;
    var Rows = cur.rows;
    var _prodID, _prodBarcode, _prodCat, _prodName, _prodDesc, _prodUnit, _prodPrice1, _prodPrice2, _prodPrice3,
      _prodQty, _prodReorderLvl, _prodDrawerNo, _prodStatus = "";

    console.log(typeof tgt, tgt);
    console.log(typeof cur, cur);
    if (tgt !== cur && tgt.matches('.editGroup')) {
      for (let i = 0; i < Rows.length; i++) {
        if (Rows[i].contains(tgt)) {
          _prodID = Rows[i].cells[1].textContent;
          _prodBarcode = Rows[i].cells[2].textContent;
          _prodCat = Rows[i].cells[3].textContent;
          _prodName = Rows[i].cells[4].textContent;
          _prodDesc = Rows[i].cells[5].textContent;
          _prodUnit = Rows[i].cells[6].textContent;
          _prodPrice1 = Rows[i].cells[7].textContent;
          _prodPrice2 = Rows[i].cells[8].textContent;
          _prodPrice3 = Rows[i].cells[9].textContent;
          _prodQty = Rows[i].cells[10].textContent;
          _prodReorderLvl = Rows[i].cells[11].textContent;
          _prodDrawerNo = Rows[i].cells[12].textContent;
          _prodStatus = Rows[i].cells[13].textContent;

        }
      }
      console.log(_prodID);
      btnEditProductClicked(_prodID, _prodBarcode, _prodCat, _prodName, _prodDesc, _prodUnit, _prodPrice1, _prodPrice2, _prodPrice3, _prodQty,
        _prodReorderLvl, _prodDrawerNo, _prodStatus);
    }
  }

  function deleteRow(e) {
    var tgt = e.target;
    var cur = e.currentTarget;
    var Rows = cur.rows;
    var _prodID = "";

    if (tgt !== cur && tgt.matches('.deleteGroup')) {
      for (let i = 0; i < Rows.length; i++) {
        if (Rows[i].contains(tgt)) {
          _prodID = Rows[i].cells[1].textContent;
        }
      }

      console.log(_prodID);
      deleteProduct(_prodID);
    }
  }


}

