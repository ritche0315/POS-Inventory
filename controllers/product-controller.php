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
        
    }
   

    private function displayProductsController(){

        $this->prod = new Product(0,0,0,0,0,0,0,0,0,0,0,0,0);

        $this->prod->getAllProducts();
        
    }
}


new ProductController();
