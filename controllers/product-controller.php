<?php
include '../models/database-model.php';
include '../models/connection-model.php';
include '../models/queries-model.php';
include '../models/product-model.php';

class ProductController{
    private Product $prod;

    public function __construct() {

      
        
        if(isset($_REQUEST['show'])){
            $this->displayProductsController();
        }
          
        if(isset($_REQUEST['prod'])){
            $data = $_REQUEST['prod'];
            $this->searchProductController($data);
        }

        if(isset($_REQUEST['cat'])){
            $this->getCategoriesController();
        }
        
        if(isset($_REQUEST['insert'])){
            $data = $_REQUEST['insert'];
            $this->insertProductController($data);
        }
    }
   

    private function displayProductsController(){

        $this->prod = new Product(0,0,0,0,0,0,0,0,0,0,0,0,0);

        $this->prod->getAllProducts();
        
    }

    private function searchProductController($search_item){
        $this->prod = new Product(0,0,0,0,0,0,0,0,0,0,0,0,0);
        $this->prod->searchProduct($search_item);
        
    }

    private function getCategoriesController(){
        $this->prod = new Product(0,0,0,0,0,0,0,0,0,0,0,0,0);
        $this->prod->getCategories();
    }

    private function insertProductController($data){
        $decoded_data = json_decode($data);
        $this->prod = new Product($decoded_data->prod_id, $decoded_data->prod_barcode,$decoded_data->prod_select_category,$decoded_data->prod_name,$decoded_data->prod_desc, 
        $decoded_data->prod_unit, $decoded_data->prod_price1,$decoded_data->prod_price2,$decoded_data->prod_price3,$decoded_data->prod_qty, 
        $decoded_data->prod_reorder_lvl,$decoded_data->prod_drawer_no,$decoded_data->prod_status);
        $this->prod->insertProduct();
    }
}


new ProductController();
