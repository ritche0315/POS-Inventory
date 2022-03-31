<?php

class Person{

    private $id;
    private $firstName;
    private $lastName;
    private $address;
    private $contact;

    private $dummy;

    public function __construct($id, $firstName, $lastName, $address, $contact){
        $this->id = $id;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->address = $address;
        $this->contact = $contact;

        $this->dummy = "Ritche gwapo";
    }







    // getters

    public function getPersonID(){
        return $this->id;
    }

    public function getPersonFirstName(){
        return $this->firstName;
    }

    public function getPersonLastName(){
        return $this->lastName;
    }
    
    public function getPersonAddress(){
        return $this->address;
    }

    public function getPersonContact(){
        return $this->contact;
    }

    public function getDummy(){
        return $this->dummy;
    }
}
    
