
<?php
class Database{
    
        private $servername;
        private $username;
        private $password;
        private $dbName;

        protected function __construct(){
            $this->servername = "localhost";
            $this->username = "root";
            $this->password = "";
            $this->dbName = "db_pos";
        }


        public function getDbName(){
            return $this->dbName;
        }
        public function getServername(){
            return $this->servername;
        }

        public function getUsername(){
            return $this->username;
        }

        public function getPassword(){
            return $this->password;
        }

    
    }
?>