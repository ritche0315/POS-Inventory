<?php
include '../models/database-model.php';
include '../models/connection-model.php';
include '../models/queries-model.php';
include '../models/login-model.php';
session_start();

class LoginController extends Login{
    
    public function __construct() {
        $this->validateCredentials();
    }
    
    public function validateCredentials() {
        parent::validateCredentials();
    }
}

new LoginController();




   

