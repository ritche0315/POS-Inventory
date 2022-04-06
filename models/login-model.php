<?php

class Login extends Queries{
    
    public function __construct() {
    }

    public function getCredentials($username, $password){
           $isExist = false;
           $sql = "SELECT * FROM tbluser WHERE username='$username' AND userpass='$password'";
          
           $myObj = new Queries();
           $data = $myObj->selectRecord($sql);
           if($data != null){
                foreach($data as $row){
                    if($username == $row['username'] && $password == $row['userpass']){
                        $isExist = true;
                        return $isExist;
                        break;
                    }
                }

                if(!$isExist){
                    return $isExist;
                }
           }
    }
    
     public function validateCredentials(){
        if(isset($_REQUEST['username']) && isset($_REQUEST['password'])){
            $username = $_REQUEST['username'];
            $password = md5($_REQUEST['password']);
            
            if($this->getCredentials($username, $password)){
                 echo 1;
                 $_SESSION['loginSession'] = "Valid";
            }else{
                 echo 2;
                 $_SESSION['loginSession'] = "Invalid";
            }
        }

    }
    
}