<?php

class Stock{

    
    private $stockId;
    private $stockQty;
    private $stockDate;
    private Supplier $sup;
    private Product $prod;

    private Queries $query;

    public function __construct(){
        $this->query = new Queries();
    }

    protected function addStock(){

    }

    protected function deleteStock(){

    }

    protected function updateStock(){

    }

    protected function displayAllStock(){
        $sql = "SELECT stock_id as 'id', prod_id as 'product_id', sprice as 'supplier_price', qty as 'quantity', supplier_id, user_id as 'account_id' FROM tblstock";
        
        echo json_encode($this->query->selectRecord($sql));
    }
}

