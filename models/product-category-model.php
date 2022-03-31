<?php

class ProductCategory extends Queries{
    //properties
    public $prod_cat_id;
    public $prod_cat_desc;

    //methods
    public function __construct($prod_cat_id, $prod_cat_desc){
        $this->prod_cat_id = $prod_cat_id;
        $this->prod_cat_desc = $prod_cat_desc;
    }

    public function addCategory(){
        $prodcatdesc = $this->prod_cat_desc;
        $q = new Queries();

        $sql = "INSERT INTO tblproductcategory(description)VALUES('$prodcatdesc')";

        $q->insertRecord($sql);
    }

    public function editCategory(){
        $prodID = $this->prod_cat_id;
        $prodDesc = $this->prod_cat_desc;
        $q = new Queries();
        $sql = "UPDATE tblproductcategory SET description='$prodDesc' WHERE cat_id='$prodID'";

        $q->updateRecord($sql);
    }

    public function deleteCategory(){
        
        $q = new Queries();
        $prodCatId = $this->prod_cat_id;

        $sql = "DELETE FROM tblproductcategory WHERE cat_id='$prodCatId'";
        $q->deleteRecord($sql);
    }
}