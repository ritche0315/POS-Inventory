var tableProduct = document.querySelector("#table-product");
var tableThead = document.querySelector("#table-product > thead")
var tableBody = document.querySelector("#table-product > tbody");

var records = [];
var page = 1;
var max_visible_pages = 5;
var page_count = 0;
window.addEventListener("load", populateTable);

// Populate Table
function populateTable() {
  getTableColumns();
  getTableRows();
  setRowsPerPage();
  searchProduct();
  modal();
  populateSelectCategory();
}

function searchProduct(){
  const search_input_el = document.getElementById("search");
  search_input_el.addEventListener("keyup", function(){

    if(search_input_el.value == ""){
      // refresh table
      getTableRows();
    }
    let req = helperAJAXrequest("GET", "../controllers/product-controller.php?prod="+search_input_el.value, null, true); 

    req.onload = function(){
      if(req.status == 200){
        let serverResponse = JSON.parse(req.response);
        records = serverResponse;
        console.log(records)
        page_count = Math.ceil(records.length / max_visible_pages);

        displayList(records, page, max_visible_pages);
        paginationButtons(page_count, max_visible_pages);
      }
    }

  });
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
      records = serverResponse;
      page_count = Math.ceil(records.length / max_visible_pages);

      displayList(records, page, max_visible_pages);
      paginationButtons(page_count, max_visible_pages);

    }
  }
}

function getSVGIcon(path) {
  return helperAJAXrequest("GET", path, null, true);
}

// pagination
function pageRange(totalPages, maxVisiblePage){

  const half  =  Math.round(maxVisiblePage / 2);
  let to = maxVisiblePage;

  if(page + half >= totalPages)
  {
      to = totalPages;
  }
  

  else if(page > half)
  {
      to = page + half;
  }


  let from = to - maxVisiblePage;
  return Array.from({length:maxVisiblePage}, (_, i) => (i+1) + from);

}
function paginationButtons(totalPages, maxPages){
  const pagination_buttons = document.getElementById("page-numbers");

  let pages = pageRange(totalPages, maxPages);
  // clear prev page range
  while(pagination_buttons.firstChild){
      pagination_buttons.removeChild(pagination_buttons.firstChild);
  }
  
  for(let i = 0; i < pages.length; i++){
    
    console.log(i)
    if(pages[i] < 1){
        continue;
    }
    else
    {
      if(page == pages[i]){
          const button_pageNumber_el = document.createElement("button");
          button_pageNumber_el.value = pages[i];
          button_pageNumber_el.className = "page active";
          button_pageNumber_el.textContent = pages[i];

          pagination_buttons.appendChild(button_pageNumber_el);
      }else{

          const button_pageNumber_el = document.createElement("button");
          button_pageNumber_el.value = pages[i];
          button_pageNumber_el.className = "page";
          button_pageNumber_el.textContent = pages[i];

          pagination_buttons.appendChild(button_pageNumber_el);
      }
    }



  }


   // add action event

  const page_number_btn = document.getElementsByClassName("page");
  for(let i = 0; i < page_number_btn.length; i++){
      page_number_btn[i].addEventListener("click", function(){
          // removeClass();
          page = parseInt(page_number_btn[i].value);

          displayList(records, page, max_visible_pages);
          paginationButtons(page_count, max_visible_pages);
      });
  }

  
  const btn_next_el = document.getElementById("nextPage-btn");
  btn_next_el.addEventListener("click", nextPage);

  const btn_prev_el = document.getElementById("prevPage-btn");
  btn_prev_el.addEventListener("click", prevPage);

  const btn_fisrt_el = document.getElementById("firstPage-btn");
  btn_fisrt_el.addEventListener("click", firstPage);

  const btn_last_el = document.getElementById("lastPage-btn");
  btn_last_el.addEventListener("click", lastPage);
  
  if(page >= page_count){
      btn_next_el.style.display= "none";
      btn_last_el.style.display= "none";
  }else{
      btn_next_el.style.display= "block";
      btn_last_el.style.display= "block";
  }

  if(page == 1){
      btn_fisrt_el.style.display= "none";
      btn_prev_el.style.display= "none";
  }else{
      btn_fisrt_el.style.display= "block";
      btn_prev_el.style.display= "block";
  }
}

function nextPage(){
  if(page < page_count){
      page++;
      displayList(records, page, max_visible_pages);
      paginationButtons(page_count, max_visible_pages);
  }
  
}

function prevPage(){
  if(page > 1){
      page--;
      displayList(records, page, max_visible_pages);
      paginationButtons(page_count, max_visible_pages);
  }
  
}

function firstPage(){
  page = 1;
  displayList(records, page, max_visible_pages);
  paginationButtons(page_count, max_visible_pages);
  
}

function lastPage(){
  page = page_count;
  displayList(records, page, max_visible_pages);
  paginationButtons(page_count, max_visible_pages);
  
}

function displayList(dataSource, currentPage, records_per_page){
  currentPage--;

  let start = currentPage * records_per_page;
  let end = start + records_per_page;
  
  let html = ``;
  for(let i = start; i < end; i++){
      if(dataSource[i] == undefined){
          break;
      }

      let rowCount = i+1;
      html += `<tr>
              <td>`+rowCount+`</td>
              <td>`+dataSource[i].prod_id+`</td>
              <td>`+dataSource[i].prod_barcode+`</td>
              <td>`+dataSource[i].prod_name+`</td>
              <td>`+dataSource[i].prod_desc+`</td>
              <td>`+dataSource[i].prod_category+`</td>
              <td>`+dataSource[i].prod_unit+`</td>
              <td>`+dataSource[i].prod_price1+`</td>
              <td>`+dataSource[i].prod_price2+`</td>
              <td>`+dataSource[i].prod_price3+`</td>
              <td>`+dataSource[i].prod_qty+`</td>
              <td>`+dataSource[i].prod_reorder_lvl+`</td>
              <td>`+dataSource[i].prod_drawer_No+`</td>
              <td>`+dataSource[i].prod_status+`</td>
              <td>
                <i class="fa-solid fa-square-pen edit-btn"></i>
                <i class="fa-solid fa-trash-can delete-btn"></i>
              </td>
              </tr>`;

  }
  
  tableBody.innerHTML = html;

  
    // display showing entries from - to
    const entries_el = document.getElementById("entries");
    entries_el.textContent = "Showing "+(start+1)+"-"+(end);
    const total_entries_el = document.getElementById("total-entries");
    if(records.length > 0){
      total_entries_el.textContent = "of "+records.length+" entries";
    }

}


// End of pagination code 

function setRowsPerPage(){
  const cmb_entries_el = document.getElementById("cmb-entries");
  cmb_entries_el.addEventListener("change", function(){
        max_visible_pages = parseInt(cmb_entries_el[cmb_entries_el.selectedIndex].value);
        getTableRows();
        page = 1;
        console.log("page=", page, " page_count=",page_count, " max_visible=", max_visible_pages)
  });
}

// modals
function modal(){
  
    // (1) ADD BUTTON

  const addNew_btn_el = document.getElementById("addNew_btn");
  addNew_btn_el.addEventListener("click", function(){
    // set action to insert
    action = "insert";
    // hide id number field and label
    const prod_id_el = document.getElementsByClassName("prod_id");
    for(let i = 0; i < prod_id_el.length; i++){
      prod_id_el[i].style.display = "none";
    }
    const insert_modal = document.getElementById("insert-modal");
    insert_modal.showModal();
    // close modal
    const close_btn_el = document.getElementById("close_btn");
    close_btn_el.addEventListener("click", function(){
      
      resetForm();
      insert_modal.close();
    });
  });


  // (2) EDIT BUTTON/ ICON
  tableBody.onclick = function(e){
    var tgt = e.target;
    var cur = e.currentTarget;
    var Rows = cur.rows;
    console.log(tgt)
    console.log(cur)
    console.log(Rows)

    if (tgt !== cur && tgt.matches('.edit-btn')) {
        for (let i = 0; i < Rows.length; i++) {
            if (Rows[i].contains(tgt)) {
                console.log(Rows[i].cells[0].innerText)
            }
        }
    }
  }



}

function test(td){
  let selectedTd = td;
  // if(selectedTd.className == "edit-btn"){
  //   console.log("edit button clicked!")
  // }
  if(selectedTd.matches('edit-btn')){
    console.log("found")
    console.log(td);
  }

}

// end of the insert modal code
// HELPER FUNCTIONS

function resetForm(){
   // reset / clear form
   const insert_success = document.querySelector(".insert_success");
  //  insert_success.style.display = "none";
  for(let i=0; i < form_group.length; i++){
    form_group[i].removeEventListener("keyup", styleValidation);
  }
  for(let i = 1; i < form_group.length; i++){
      form_group[i].style.backgroundColor = "white";
      form_group[i].style.borderColor = border_base_color;
      form_group[i].style.color = "black";
      form_group[i].placeholder = '';
  }
  // hide popup insertion success message in 3s.
  setTimeout(() => {
      insert_success.style.display = "none";
  }, 3000);
  form_el.reset();
}
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

