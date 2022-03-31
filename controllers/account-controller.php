<?php
include '../models/database-model.php';
include '../models/connection-model.php';
include '../models/queries-model.php';
include '../models/account-model.php';

class AccountController extends Account{

    public function __construct(){


        if(isset($_REQUEST['insertAccount'])){
            $data = $_REQUEST['insertAccount'];
            $this->insertAccountController($data);
        }

        if(isset($_REQUEST['editAccount'])){
            $data = $_REQUEST['editAccount'];
            $this->editAccountController($data);
        }

        if(isset($_REQUEST['deleteAccount'])){
            $data = $_REQUEST['deleteAccount'];
            $this->deleteAccountController($data);
        }

        if(isset($_REQUEST['getAccounts'])){
            $this->displayAccountsController();
        }
    }

    public function insertAccountController($data){
        $data = json_decode($data);
        $acc = new Account($data->id, $data->fullName, $data->username, $data->password, $data->accType);

        $acc->insertAccount();
    }

    public function editAccountController($data){
        $data = json_decode($data);
        $acc = new Account($data->id, $data->fullName, $data->username, $data->password, $data->accType);

        $acc->editAccount();
    }

    public function deleteAccountController($data){
        $acc = new Account($data, 0,0,0,0);

        $acc->deleteAccount();
    }

    public function displayAccountsController(){
        $acc = new Account(0,0,0,0,0);
        $acc->displayAccounts();
    }
}


new AccountController();