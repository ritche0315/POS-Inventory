<?php
include '../models/person-model.php';
include '../models/database-model.php';
include '../models/connection-model.php';
include '../models/queries-model.php';
include '../models/supplier-model.php';

class SupplierController extends Supplier{
    private Supplier $sup;

    public function __construct(){


        if(isset($_REQUEST['addSupplier'])){
            $data = $_REQUEST['addSupplier'];
            $this->addSupplierController($data);
        }
        if(isset($_REQUEST['editSupplier'])){
            $data = $_REQUEST['editSupplier'];
            $this->editSupplierController($data);
        }
        
        if(isset($_REQUEST['delSupplier'])){
            $data = $_REQUEST['delSupplier'];
            $this->deleteSupplierController($data);
        }
        
        if(isset($_REQUEST['showSuppliers'])){
            $this->showAllSupplierController();
        }

    }   

    private function addSupplierController($data){
        $datatoJSON = json_decode($data);
        $this->sup = new Supplier(0,0,0,$datatoJSON->address,$datatoJSON->contact,$datatoJSON->name);
        $this->sup->addSupplier();
    }
    private function editSupplierController($data){
        $datatoJSON = json_decode($data);
        $this->sup = new Supplier($datatoJSON->id,0,0,$datatoJSON->address,$datatoJSON->contact,$datatoJSON->name);
        $this->sup->editSupplier();
    }
    private function deleteSupplierController($data){
        $this->sup = new Supplier($data,0,0,0,0,0);
        $this->sup->deleteSupplier();
    }
    private function showAllSupplierController(){
        $this->sup = new Supplier(0,0,0,0,0,0);
        $this->sup->showAllSupplier();
    }
}

new SupplierController();