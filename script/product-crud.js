
window.addEventListener("load", init);


function init(){
    displayProducts();
    populateTable();
}
// CRUD 
function insertProduct(){

}

function editProduct(){

}

function deleteProduct(){

}

function displayProducts(){
   let  xhr = helperAJAXrequest("GET","../controllers/product-controller.php?show=products",null,true)

   xhr.onload = () => {
       if(xhr.status == 200){
           console.log(JSON.parse(xhr.response))
       }
   }
}

