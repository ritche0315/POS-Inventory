<?php

class Connection extends Database{
   
        protected function connect(){
            try{
                $obj = new Database();
                $conn = new mysqli($obj->getServerName(), $obj->getUsername(),$obj->getPassword(), $obj->getDbName());
                $this->checkConnection($conn);
        
                return $conn;
            }catch(Exception $e){
                
            }
        
        }
    
        public function checkConnection($conn)
        {       
                try{
                    if($conn->connect_error){
                        // throw new Exception("Connection failed: " . $conn->connect_error);
                        throw new Exception("CONNECTION FAILED: ".$conn->connect_error);
                    }
                }catch(Exception $e){
                    
                }
                
        }
    
}
?>