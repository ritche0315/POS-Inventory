<?php
class Supplier extends Person{
    // Add properties for supplier(Optional)
    public Queries $query;
    public $sql;

    private $supplierFullName;

    function __construct($id, $firstName, $lastName, $address, $contact,$supplierFullName){
        parent::__construct($id, $firstName, $lastName, $address, $contact);
        $this->query = new Queries();
        $this->supplierFullName = $supplierFullName;
    }


    function addSupplier(){
        $sName = $this->supplierFullName;
        $sAddress = $this->getPersonAddress();
        $sContact = $this->getPersonContact();

        $sql = "INSERT INTO tblsupplier(name,address,phoneNo)VALUES('$sName','$sAddress','$sContact')";

        $this->query->insertRecord($sql);
    }

    function editSupplier(){
        $sId = $this->getPersonID();
        $sName = $this->supplierFullName;
        $sAddress = $this->getPersonAddress();
        $sContact = $this->getPersonContact();

        $sql = "UPDATE tblsupplier SET name='$sName', address='$sAddress', phoneNo='$sContact' WHERE supplier_id='$sId'";

        $this->query->updateRecord($sql);
    }

    function deleteSupplier(){
        $sId = $this->getPersonID();
        $sql = "DELETE FROM tblsupplier WHERE supplier_id='$sId'";
        $this->query->deleteRecord($sql);
    }

    public function showAllSupplier(){
        $sql = "SELECT * FROM tblsupplier";
        echo json_encode($this->query->selectRecord($sql));
        
    }
    

    


}
