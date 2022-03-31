<?php

class Account{
    
    private $id;
    private $fullName;
    private $username;
    private $password;
    private $accType;

    private Queries $query;
    private $sql;
    public function __construct($id, $fullName, $username, $password, $accType){
       $this->id = $id;
       $this->fullName = $fullName;
       $this->username = $username;
       $this->password = $password;
       $this->accType = $accType;

       $this->query = new Queries();
    }


    protected function insertAccount(){
        $hashedPassword = md5($this->password);
        $sql = "INSERT INTO tbluser(name,username,userpass,accType)VALUES('$this->fullName','$this->username','$hashedPassword ','$this->accType')";
        $this->query->insertRecord($sql);
    }

    protected function editAccount(){
        $hashedPassword = md5($this->password);
        $sql = "UPDATE tbluser SET name='$this->fullName',username='$this->username',userpass='$hashedPassword',accType='$this->accType' WHERE user_id='$this->id'";
        $this->query->updateRecord($sql);
    }

    protected function deleteAccount(){
        $sql = "DELETE FROM tbluser WHERE user_id='$this->id'";
        $this->query->deleteRecord($sql);
    }

    protected function displayAccounts(){
        $sql = "SELECT user_id as 'id', name as 'full_Name', username, userpass as 'password', accType as 'accType' FROM tbluser";
        
        echo json_encode($this->query->selectRecord($sql));
    }

    // getters
    
    public function getID(){
        return $this->id;
    }

    public function getFullName(){
        return $this->fullName();
    }

    public function getUsername(){
        return $this->username;
    }

    public function getPassword(){
        return $this->password;
    }

    public function getaccType(){
        return $this->accType;
    }



}