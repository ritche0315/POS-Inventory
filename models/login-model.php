<?php

class Login extends Queries{
    private $user;

    public function __construct() {
        $this->user = "";
    }

    public function getCredentials($username, $password){
           $isExist = false;
           $sql = "SELECT * FROM tbluser WHERE username='$username' AND userpass='$password'";
          
           $myObj = new Queries();
           $data = $myObj->selectRecord($sql);
           if($data != null){
                foreach($data as $row){
                    if(trim(strtolower($username)) == trim(strtolower($row['username'])) && trim(strtolower($password)) == trim(strtolower($row['userpass']))){
                        $isExist = true;
                        $this->user = $row['name'];
                        return $isExist;
                        break;
                    }
                }

                if(!$isExist){
                    return $isExist;
                }
           }
    }
    
     public function validateCredentials($username, $password){
        if($this->getCredentials($username, $password)){
            $data = [];
            $data["isExist"] = 1; 
            $data["user"] = $this->user;
            echo json_encode($data);
            $_SESSION['loginSession'] = "Valid";
        }else{
            $data = [];
            $data["isExist"] = 2; 
            $data["user"] = $this->user;
            echo json_encode($data);
            $_SESSION['loginSession'] = "Invalid";
        }

    }
    
}