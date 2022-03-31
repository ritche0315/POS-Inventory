<?php

class Product extends Queries{
    //properties
    
    public $prodID;
    public $prodBarcode;
    public $prodCategory;
    public $prodName;
    public $prodDesc;
    public $prodUnit;
    public $prodPrice1;
    public $prodPrice2;
    public $prodPrice3;
    public $prodQuantity;
    public $prodReorder;
    public $prodDrawerNo;
    public $prodStatus;
    
    
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

    //CRUD OPERATIONS
    public function addProduct(){
        
        $barcode = $this->prodBarcode;
        $prod_name = $this->prodName;
        $prod_desc = $this->prodDesc;
        $prod_cat = $this->prodCategory;
        $prod_unit = $this->prodUnit;
        $prod_price1 = $this->prodPrice1;
        $prod_price2 = $this->prodPrice2;
        $prod_price3= $this->prodPrice3;
        $prod_qty= $this->prodQuantity;
        $prod_reorder_lvl= $this->prodReorder;
        $prod_drawer_No= $this->prodDrawerNo;
        $prod_status= $this->prodStatus;
        
        
        $q = new Queries();
        
        $sql = "INSERT INTO tblproduct(barcode,name,description,cat_id,unit,price1,price2,price3,qty,reorderlvl,drawerNo,pstatus)
                VALUES('$barcode','$prod_name','$prod_desc','$prod_cat','$prod_unit','$prod_price1','$prod_price2','$prod_price3', 
                '$prod_qty','$prod_reorder_lvl','$prod_drawer_No','$prod_status')";
        
        $q->insertRecord($sql);
    }
    
    public function editProduct(){
        $prod_id = $this->prodID;
        $barcode = $this->prodBarcode;
        $prod_name = $this->prodName;
        $prod_desc = $this->prodDesc;
        $prod_cat = $this->prodCategory;
        $prod_unit = $this->prodUnit;
        $prod_price1 = $this->prodPrice1;
        $prod_price2 = $this->prodPrice2;
        $prod_price3= $this->prodPrice3;
        $prod_qty= $this->prodQuantity;
        $prod_reorder_lvl= $this->prodReorder;
        $prod_drawer_No= $this->prodDrawerNo;
        $prod_status= $this->prodStatus;

        $q = new Queries();
        $sql = "UPDATE tblproduct SET barcode='$barcode', name='$prod_name', description='$prod_desc', cat_id='$prod_cat', unit='$prod_unit', 
        price1='$prod_price1', price2='$prod_price2', price3='$prod_price3', qty='$prod_qty', reorderlvl='$prod_reorder_lvl', drawerNo='$prod_drawer_No', 
        pstatus='$prod_status' WHERE prod_id='$prod_id'";

        $q->updateRecord($sql);
    }
    public function deleteProduct(){
        $prod_id = $this->prodID;

        $q = new Queries();
        $sql = "DELETE FROM tblproduct WHERE prod_id='$prod_id'";

        $q->deleteRecord($sql);
    }

    public function getProductCategory(){
        $q = new Queries();
        $sql = "SELECT cat_id, description FROM tblproductcategory";

        echo json_encode($q->selectRecord($sql));
    }

    public function searchProduct($data){
        $q = new Queries();
        $sql = "SELECT A.prod_id as 'prod_id', A.barcode as 'prod_barcode', A.name as 'prod_name', A.description 
        as 'prod_desc', B.description as 'prod_category', A.unit as 'prod_unit', A.price1 as 'prod_price1', 
        A.price2 as 'prod_price2', A.price3 as 'prod_price3', A.qty as 'prod_qty', A.reorderlvl as 'prod_reorder_lvl', 
        A.drawerNo as 'prod_drawer_No', A.pstatus as 'prod_status' FROM tblproduct A INNER JOIN tblproductcategory B 
        ON A.cat_id = B.cat_id WHERE A.prod_id ='$data' OR A.barcode='$data' OR A.name='$data' ORDER BY A.prod_id ASC";

        echo json_encode($q->selectRecord($sql));
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

   
    
   
}



