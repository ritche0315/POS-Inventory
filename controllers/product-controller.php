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

        
    }
   

    private function displayProductsController(){

        $this->prod = new Product(0,0,0,0,0,0,0,0,0,0,0,0,0);

        $this->prod->getAllProducts();
        
    }

    private function searchProductController($search_item){
        $this->prod = new Product(0,0,0,0,0,0,0,0,0,0,0,0,0);
        $this->prod->searchProduct($search_item);
        
    }
}


new ProductController();
