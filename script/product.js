
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
      populateTableProduct(server_response);
    }
  }

  var tableEl = document.getElementById("product-table");
  var tbodyEl = document.getElementById("myTableBody");


  function populateTableProduct(data) {
    var counts = 1;
    for (obj in data) {


      const tr = document.createElement("tr");
      const seq = document.createElement("td");
      const prod_id = document.createElement("td");
      const prod_barcode = document.createElement("td");
      const prod_cat = document.createElement("td");
      const prod_name = document.createElement("td");
      const prod_desc = document.createElement("td");
      const prod_unit = document.createElement("td");
      const prod_p1 = document.createElement("td");
      const prod_p2 = document.createElement("td");
      const prod_p3 = document.createElement("td");
      const prod_qty = document.createElement("td");
      const prod_reorder_lvl = document.createElement("td");
      const prod_drawer_no = document.createElement("td");
      const prod_status = document.createElement("td");
      const editCol = document.createElement("td");
      const delCol = document.createElement("td");
      const btnDelete = document.createElement("button");
      const btnEdit = document.createElement("button");

      const iconEdit = document.createElement("i");
      const textEdit = document.createElement("p");
      const textDelete = document.createElement("p");
      const iconDelete = document.createElement("i");


      // setAttributes
      iconDelete.className = "fa-solid fa-trash-can icon deleteGroup";
      btnDelete.className = "btnDelete deleteGroup";
      textDelete.className = "deleteGroup";
      btnEdit.className = "btnEdit editGroup";
      iconEdit.className = "fa-solid fa-pen-to-square icon editGroup";
      textEdit.className = "editGroup";
      //textContent
      textEdit.textContent = "EDIT";
      textDelete.textContent = "DELETE";

      seq.textContent = counts;
      prod_id.textContent = data[obj].prod_id;
      prod_barcode.textContent = data[obj].prod_barcode;
      prod_cat.textContent = data[obj].prod_category;
      prod_name.textContent = data[obj].prod_name;
      prod_desc.textContent = data[obj].prod_desc;
      prod_unit.textContent = data[obj].prod_unit;
      prod_p1.textContent = data[obj].prod_price1;
      prod_p2.textContent = data[obj].prod_price2;
      prod_p3.textContent = data[obj].prod_price3;
      prod_qty.textContent = data[obj].prod_qty;
      prod_reorder_lvl.textContent = data[obj].prod_reorder_lvl;
      prod_drawer_no.textContent = data[obj].prod_drawer_No;
      prod_status.textContent = data[obj].prod_status;


      //appends
      tr.appendChild(seq);
      tr.appendChild(prod_id);
      tr.appendChild(prod_barcode);
      tr.appendChild(prod_cat);
      tr.appendChild(prod_name);
      tr.appendChild(prod_desc);
      tr.appendChild(prod_unit);
      tr.appendChild(prod_p1);
      tr.appendChild(prod_p2);
      tr.appendChild(prod_p3);
      tr.appendChild(prod_qty);
      tr.appendChild(prod_reorder_lvl);
      tr.appendChild(prod_drawer_no);
      tr.appendChild(prod_status);

      btnEdit.appendChild(iconEdit);
      btnEdit.appendChild(textEdit);
      editCol.appendChild(btnEdit);
      tr.appendChild(editCol);
      btnDelete.appendChild(iconDelete);
      btnDelete.appendChild(textDelete);
      delCol.appendChild(btnDelete);
      tr.appendChild(delCol);

      counts++;
      tbodyEl.appendChild(tr);

    }




    tableEl.addEventListener("click", actionColumn);
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

