<?php
include '../models/database-model.php';
include '../models/connection-model.php';
include '../models/account-model.php';
include '../models/person-model.php';
include '../models/supplier-model.php';
include '../models/queries-model.php';
include '../models/stock-model.php';

class StockController extends Stock{

    private Stock $stock;
    public function __construct(){
        $this->stock = new Stock();
        if(isset($_REQUEST['view-stocks'])){
            $this->displayAllStockController();
        }
    }


    function displayAllStockController(){
        $this->stock->displayAllStock();
    }
}


new StockController();