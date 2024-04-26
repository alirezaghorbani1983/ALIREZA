<?php 

class Person {

    public $name;
    public $family;

    public function showInfo(){
        echo $this->name . " " . $this->family;
    }
    
}


// now we moet een object van deze class creeren
// als we een object van deze class gaan ontwerpen, moeten we deze 
// attribute een naam geven zoals $name   ali and $family  ghorbani

$myPerson = new Person();

$myPerson-> name ="Ali";
$myPerson->family = "Ghorbani";
$myPerson->showInfo();