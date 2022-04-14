<?php
include '../models/database-model.php';
include '../models/connection-model.php';
include '../models/queries-model.php';
include '../models/login-model.php';
session_start();

class LoginController extends Login{
    private Login $login;
    public function __construct() {
        $this->login = new Login();


        if(isset($_REQUEST['login'])){

            $data = json_decode($_REQUEST['login']);
            $username_data = $data->username;
            $password_data = md5($data->password);
            $this->login->validateCredentials($username_data, $password_data);
        }
    }
    
}

new LoginController();




   

