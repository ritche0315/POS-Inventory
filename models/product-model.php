<?php

class Product extends Queries{
    //properties
    
    private $prodID;
    private $prodBarcode;
    private $prodCategory;
    private $prodName;
    private $prodDesc;
    private $prodUnit;
    private $prodPrice1;
    private $prodPrice2;
    private $prodPrice3;
    private $prodQuantity;
    private $prodReorder;
    private $prodDrawerNo;
    private $prodStatus;
    
    
    // methods
    public function __construct($prodID, $prodBarcode,$prodCategory,$prodName,$prodDesc,$prodUnit,$prodPrice1,$prodPrice2,$prodPrice3,$prodQuantity,$prodReorder,$prodDrawerNo,$prodStatus) {
        $this->prodID = $prodID;
        $this->prodBarcode = $prodBarcode;
        $this->prodCategory = $prodCategory;
        $this->prodName = $prodName;
        $this->prodDesc = $prodDesc;
        $this->prodUnit = $prodUnit;
        $this->prodPrice1 = $prodPrice1;
        $this->prodPrice2 = $prodPrice2;
        $this->prodPrice3 = $prodPrice3;
        $this->prodQuantity = $prodQuantity;
        $this->prodReorder = $prodReorder;
        $this->prodDrawerNo = $prodDrawerNo;
        $this->prodStatus = $prodStatus;
    }

    public function getAllProducts(){

        $q = new Queries();
        $sql = "SELECT A.prod_id as 'prod_id', A.barcode as 'prod_barcode', A.name as 'prod_name', A.description 
        as 'prod_desc', B.description as 'prod_category', A.unit as 'prod_unit', A.price1 as 'prod_price1', 
        A.price2 as 'prod_price2', A.price3 as 'prod_price3', A.qty as 'prod_qty', A.reorderlvl as 'prod_reorder_lvl', 
        A.drawerNo as 'prod_drawer_No', A.pstatus as 'prod_status' FROM tblproduct A INNER JOIN tblproductcategory B 
        ON A.cat_id = B.cat_id ORDER BY A.prod_id ASC";

       
        echo  json_encode($q->selectRecord($sql));
      
    }


    public function searchProduct($search_item){

        $q = new Queries();
        $sql = "SELECT A.prod_id as 'prod_id', A.barcode as 'prod_barcode', A.name as 'prod_name', A.description 
        as 'prod_desc', B.description as 'prod_category', A.unit as 'prod_unit', A.price1 as 'prod_price1', 
        A.price2 as 'prod_price2', A.price3 as 'prod_price3', A.qty as 'prod_qty', A.reorderlvl as 'prod_reorder_lvl', 
        A.drawerNo as 'prod_drawer_No', A.pstatus as 'prod_status' FROM tblproduct A  INNER JOIN tblproductcategory B 
        ON A.cat_id = B.cat_id WHERE A.prod_id = '$search_item' or A.name = '$search_item' ORDER BY A.prod_id ASC";

       
        echo  json_encode($q->selectRecord($sql));
      
    }

   
    
   
}



