<?php 

// class Person {

//     public $name;
//     public $family;

//     public function showInfo(){
//         echo $this->name . " " . $this->family;
//     }
    
// }


// now we moet een object van deze class creeren
// als we een object van deze class gaan ontwerpen, moeten we deze 
// attribute een naam geven zoals $name   ali and $family  ghorbani

// $myPerson = new Person();

// $myPerson-> name ="Ali";
// $myPerson->family = "Ghorbani";
// $myPerson->showInfo();

// echo '<br>';

// $myPerson2 = new Person();

// $myPerson2-> name ="Reza";
// $myPerson2->family = "Mohammadi";
// $myPerson2->showInfo();

// class Person {

//     public $name;
//     public $family;
//     const AGE = 27;

//     public function showInfo(){
//         echo $this->name . " " . $this->family . " " . Person::AGE;
//     }
//     //double colon   
// }

// $myPerson = new Person();

// //get const property
// $myPerson-> name ="Ali";
// $myPerson->family = "Ghorbani";
// $myPerson->showInfo();

//static property

// class Car{
//     public $model;
//     public static $numberSold = 0;
// }

// //Get static property

// echo CAR::$numberSold;

// Number Visibility => public, private , protected

// Class Car
// {
//     public $speed;

//     public function getSpeed()
//     {
//         return $this ->speed;
//     }
// }

// $myCar = new Car();

// $myCar->speed = 100;

// echo $myCar->getSpeed();

// Class Car
// {
//     private $speed;

//     public function getSpeed()
//     {
//         return $this ->speed;
//     }
// }

// $myCar = new Car();

// $myCar->speed = 100;

// echo $myCar->getSpeed();

// Class Car
// {
//     protected $speed;

//     public function getSpeed()
//     {
//         return $this ->speed;
//     }
// }

// $myCar = new Car();

// $myCar->speed = 100;

// echo $myCar->getSpeed();

class Time{
    private $hour;
    private $min;
    private $sec;

    function __construct($hour = 0, $min = 0, $sec = 0)
    {
        $this->hour = $hour;
        $this->min = $min;
        $this->sec = $sec;
    }

    public function getTime(){
    return $this->hour . " : " . $this->min . " : " . $this->sec;
    }

}

$time = new Time(12);
echo $time->getTime();

