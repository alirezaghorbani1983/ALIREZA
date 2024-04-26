<?php 

class Person {

    public $name;
    public $family;

    public function showInfo(){
        echo $this->name . " " . $this->family;
    }
    
}