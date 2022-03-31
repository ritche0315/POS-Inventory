<?php
include '../models/database-model.php';
include '../models/connection-model.php';
include '../models/queries-model.php';
include '../models/product-model.php';
include '../models/product-category-model.php';

class ProductController extends Product{
    
    public function __construct() {
        
        
     
        // // TO BE FIXED PA....
        if(isset($_REQUEST["prod"]))
        {
            $data = $_REQUEST["prod"];
            $this->searchProduct($data);
        }
        elseif(isset($_REQUEST['json']))
        {
            $data = $_REQUEST['json'];
            $this->addProductController($data);
        }
        elseif(isset($_REQUEST['cmbcategory']))
        {
            $this->getProductCategory();
        }
        elseif(isset($_REQUEST['editProd']))
        {
            $data = $_REQUEST['editProd'];
            $this->editProductController($data);
        }
        elseif(isset($_REQUEST['delProd']))
        {
            $prodid = $_REQUEST['delProd'];
            $this->deleteProductController($prodid);
        }
        elseif(isset($_REQUEST['prodCatDesc']))
        {
            $data = $_REQUEST['prodCatDesc'];
            $this->addProductCategoryController($data);
        }
        elseif(isset($_REQUEST['prodCatDisplay']))
        {
            $this->getProductCategory();
        }
        elseif(isset($_REQUEST['prodCatDescEdit']))
        {
            $data = $_REQUEST['prodCatDescEdit'];
            $this->editProductCategoryController($data);
        }
        elseif(isset($_REQUEST['delProdCat_Id'])){
            $data = $_REQUEST['delProdCat_Id'];
            $this->deleteProductCategoryController($data);
        }
        else
        {
            $this->getAllProducts();
        }
       


        
    }
   
    public function getAllProducts(){
        parent::getAllProducts();
    }
    public function searchProduct($data){
        parent::searchProduct($data);
        
    }

    public function getProductCategory(){
        parent::getProductCategory();
    }

    public function addProductController($data){
          //GET ALL REQUEST DATA AS JSON FILE
        //CHECK REQUEST DATA IF ALREADY SET.
            $decoded = json_decode($data);
    
    
            $prodBarcode = $decoded->prod_barcode;
            $prodCategory = $decoded->prod_cat;
            $prodName = $decoded->prod_name;
            $prodDesc = $decoded->prod_desc;
            $prodUnit = $decoded->prod_unit;
            $prodPrice1 = $decoded->prod_price1;
            $prodPrice2= $decoded->prod_price2;
            $prodPrice3= $decoded->prod_price3;
            $prodQuantity= $decoded->prod_qty;
            $prodReorder= $decoded->prod_reorder_lvl;
            $prodDrawerNo= $decoded->prod_drawer_No;
            $prodStatus= $decoded->prod_status;
            //INSTANTIATE PRODUCT AND PASS ALL REQUEST DATA
            $prod = new Product(0,$prodBarcode,$prodCategory,$prodName,$prodDesc,$prodUnit, 
            $prodPrice1,$prodPrice2,$prodPrice3,$prodQuantity,$prodReorder,$prodDrawerNo,$prodStatus);
            
            $prod->addProduct();
        
      
    }

    public function editProductController($data){
            $decoded = json_decode($data);
    
            $prodID = $decoded->prod_id;
            $prodBarcode = $decoded->prod_barcode;
            $prodCategory = $decoded->prod_cat;
            $prodName = $decoded->prod_name;
            $prodDesc = $decoded->prod_desc;
            $prodUnit = $decoded->prod_unit;
            $prodPrice1 = $decoded->prod_price1;
            $prodPrice2= $decoded->prod_price2;
            $prodPrice3= $decoded->prod_price3;
            $prodQuantity= $decoded->prod_qty;
            $prodReorder= $decoded->prod_reorder_lvl;
            $prodDrawerNo= $decoded->prod_drawer_No;
            $prodStatus= $decoded->prod_status;

            $prod = new Product($prodID,$prodBarcode,$prodCategory,$prodName,$prodDesc,$prodUnit, 
            $prodPrice1,$prodPrice2,$prodPrice3,$prodQuantity,$prodReorder,$prodDrawerNo,$prodStatus);
            
            $prod->editProduct();
    }

    public function deleteProductController($prodid){
        $prod = new Product($prodid,0,0,0,0,0,0,0,0,0,0,0,0);
        $prod->deleteProduct();
    }


    public function addProductCategoryController($prod_cat_desc){
        $prod = new ProductCategory(0, $prod_cat_desc);
        $prod->addCategory();
    }

    public function editProductCategoryController($data){
        $decoded = json_decode($data);

        $prodCatID = $decoded->prod_cat_id;
        $prodCatDesc = $decoded->prod_cat_desc;
        
        $prod = new ProductCategory($prodCatID, $prodCatDesc);
        $prod->editCategory();
    }

    public function deleteProductCategoryController($data){
        $prodCatID = $data;
        $prod = new ProductCategory($prodCatID, 0);
        $prod->deleteCategory();

    }
}


new ProductController();
