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
        $sql = "SELECT A.stock_id as 'id', B.prod_id as 'product_id', A.sprice as 'supplier_price', A.qty as 'quantity', 
        C.supplier_id, D.user_id as 'account_id' FROM tblstock A 
        INNER JOIN tblproduct B on A.prod_id = B.prod_id 
        INNER JOIN tblsupplier C on A.supplier_id = C.supplier_id 
        INNER JOIN tbluser D on A.user_id = D.user_id";
        
        echo json_encode($this->query->selectRecord($sql));
    }
}

