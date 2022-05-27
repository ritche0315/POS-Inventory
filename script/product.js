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
   
    let req = helperAJAXrequest("GET", "../controllers/product-controller.php?prod="+search_input_el.value, null, true); 

    req.onload = function(){
      if(req.status == 200){
        try {
          if(search_input_el.value === ''){
            // refresh table
            getTableRows();
          }
          let serverResponse = JSON.parse(req.response);
          records = serverResponse;
          page_count = Math.ceil(records.length / max_visible_pages);
    
          displayList(records, page, max_visible_pages);
          paginationButtons(page_count, max_visible_pages);
        } catch (e) {
          tableBody.innerHTML = "";
          const entries_el = document.getElementById("entries");
          const total_entries_el = document.getElementById("total-entries");
          entries_el.innerHTML = "";
          total_entries_el.innerHTML = "Data Not Found!";
          }
        
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

    if (tgt !== cur && tgt.matches('.edit-btn')) {
        for (let i = 0; i < Rows.length; i++) {
            if (Rows[i].contains(tgt)) {
                //set action to edit 
                action = "edit";
                // change title header
                const title_header = document.querySelector(".title-header");
                title_header.innerText = "Update Record";
                // set visible prod_id
                const prod_id_el = document.getElementsByClassName("prod_id");
                const prod_id_id = document.getElementById("prod-id");
                prod_id_id.disabled = true;
                for(let i = 0; i < prod_id_el.length; i++){
                  prod_id_el[i].style.display = "block";
                }
                const update_modal = document.getElementsByClassName("update-modal");
                update_modal[0].showModal();
                
                prod_id.value = Rows[i].cells[1].innerText;
                prod_barcode.value = Rows[i].cells[2].innerText;
                prod_name.value = Rows[i].cells[3].innerText;
                prod_desc.value = Rows[i].cells[4].innerText;

                for(let j =0; j < prod_select_category.length; j++){
                  if(prod_select_category[j].innerText == Rows[i].cells[5].innerText){
                    prod_select_category.value = prod_select_category[j].value;
                    break;
                  }
                }
                prod_unit.value = Rows[i].cells[6].innerText;
                prod_price1.value = Rows[i].cells[7].innerText;
                prod_price2.value = Rows[i].cells[8].innerText;
                prod_price3.value = Rows[i].cells[9].innerText;
                prod_qty.value = Rows[i].cells[10].innerText;
                prod_reorder_lvl.value = Rows[i].cells[11].innerText;
                prod_drawer_no.value = Rows[i].cells[12].innerText;

                
                for(let j =0; j < prod_status.length; j++){
                  if(prod_status[j].innerText == Rows[i].cells[13].innerText){
                    prod_status.value = prod_status[j].value;
                    break;
                  }
                }
                
                // close modal
                const close_btn_el = document.getElementById("close_btn");
                close_btn_el.addEventListener("click", function(){
                  
                  resetForm();
                  update_modal[0].close();
                });
                
            }
        }
    }

    if (tgt !== cur && tgt.matches('.delete-btn')) {
      for (let i = 0; i < Rows.length; i++) {
        if (Rows[i].contains(tgt)) {
          
            let id_to_delete = Rows[i].cells[1].innerText;
            if(confirm("Are you sure do you want to delete this record "+id_to_delete)){
              action = "delete";
              const xhr = helperAJAXrequest("POST", "../controllers/product-controller.php", "delete="+id_to_delete, true);
              
              xhr.onload = function(){
                if(xhr.status == 200){
                    if(parseInt(xhr.response) === 1){
                        alert("Record "+id_to_delete+" successfully deleted from the database!");
                    }
                }
            
              }
            }
             
        }
      }
    }
  }



}


// end of the insert modal code
// HELPER FUNCTIONS

function resetForm(){
   // reset / clear form
   if(action == "insert"){
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
   else if(action == "edit"){
    const update_success = document.querySelector(".update_success");
    for(let i=0; i < form_group.length; i++){
      form_group[i].removeEventListener("keyup", styleValidation);
    }
    for(let i = 0; i < form_group.length; i++){
        form_group[i].style.backgroundColor = "white";
        form_group[i].style.borderColor = border_base_color;
        form_group[i].style.color = "black";
        form_group[i].placeholder = '';
    }
    // hide popup insertion success message in 3s.
    setTimeout(() => {
        update_success.style.display = "none";
        const update_modal = document.getElementsByClassName("update-modal");
        update_modal[0].close();
    }, 3000);
    form_el.reset();
   }
   
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

