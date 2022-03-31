<?php
    class Queries extends Connection{

        //properties
        private $result;
        private $row;
        private $conn;

        //constructor
        public function __construct(){

        }

        //============================== CRUD OPERATIONS ===================================
        //select query
        public function selectRecord($sql){
            try{
                $myObj = new Connection();
                $conn = $myObj->connect();
                $result = $conn->query($sql);
    
                if ($result->num_rows > 0) {
                    // output data of each row
                    while($row = $result->fetch_assoc()) {
                        $datas[] = $row;
                    }
                    
                    return $datas;
                } 
            }catch(Exception $ex){
                echo $ex->getMessage();
            }finally{
                $conn->close();
            }
            

        }


        //insert query
        public function insertRecord($sql){
            try
            {
                $myObj = new Connection();
                $conn = $myObj->connect();
                
                if ($conn->query($sql) === TRUE) {
                    // success
                    echo 1;
                } else {
                    // error
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
                
            }catch(Exception $ex){
                echo $ex->getMessage();
            }finally{
                $conn->close();
            }

        }


         //update query
         public function updateRecord($sql){
            try
            {
                $myObj = new Connection();
                $conn = $myObj->connect();
                
                if ($conn->query($sql) === TRUE) {
                    // success
                    echo 1;
                } else {
                    // error
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
                
            }catch(Exception $ex){
                echo $ex->getMessage();
            }finally{
                $conn->close();
            }

        }

        //delete query 
        public function deleteRecord($sql){
            try
            {
                $myObj = new Connection();
                $conn = $myObj->connect();
                
                if ($conn->query($sql) === TRUE) {
                    // success
                    echo 1;
                } else {
                    // error
                    echo "Error: " . $sql . "<br>" . $conn->error;
                }
                
            }catch(Exception $ex){
                echo $ex->getMessage();
            }finally{
                $conn->close();
            }
        }

        // dummy
        public function dummyQueryFunction(){
            echo "Hello this is dummy";
        }



        
       
    }

    

