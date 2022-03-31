<?php
session_start();
$_SESSION['loginSession'] = "Invalid";
header("Location:../views/login-view.php");

