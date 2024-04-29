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

// class Time{
//     private $hour;
//     private $min;
//     private $sec;

//     function __construct($hour = 0, $min = 0, $sec = 0)
//     {
//         $this->hour = $hour;
//         $this->min = $min;
//         $this->sec = $sec;
//     }

//     public function getTime(){
//     return $this->hour . " : " . $this->min . " : " . $this->sec;
//     }

// }

// $time = new Time(12,20,35);
// echo $time->getTime();

// class Person {

//     public function save(){
//         echo "saving this object to database...";
//     }

//     public function  __destruct()
//     {
//         $this->save();
//     }
// }

// $person = new Person();

// unset($person);

// $person2 = new person();
// die("Error !");

// static method

// class Car{

//     public static function KPL($kms, $liters){
//         return ($kms/$liters);
//     }
// }

// echo Car::KPL(165,9);

// $car = new Car();
// echo $car::KPL(150, 8);

// class Math{

//     const PI = 3.14;

//     public static function sum($x, $y){
//         return $x + $y;
//     }

//     public static function substraction($x, $y){
//         return $x - $y;
//     }

// }

// $sum = Math::sum(12, 66);

// echo $sum;


// class Car {

//     public $property = 10;
//     public static $staticProperty = 160;

//     public static function myMethod() {

//         echo Car::$staticProperty;

//         // echo  $this->property;
        
//     }
// }

// Car::myMethod();


// class Account {

//     private $balance = 0;  // balance : current money in account

//     public function push($amount){
//         $this->balance += $amount;
//     }

//     public function cash($amount){
//         if($amount < $this->balance){
//             $this->balance -= $amount;
//         }else {
//             die("your balance is low");
//         }
//     }

//     public function getTotalBalance(){
//         return $this->balance. " Euro";
//     }
// }

// $a = new Account;

// $a->push(500);

// $a->cash(100);

// echo $a->getTotalBalance() . "<br>";

// $a->cash(1000);


// class Time 
// {
//     private $hour = 0;
//     private $min = 0;
//     private $sec = 0;

//     public function __construct($hour = 0, $min = 0, $sec = 0)
//     {
//         if (is_int($hour) && $hour >= 0 && $hour < 24){
//             $this->hour = $hour;
//         }

//         if (is_int($min) && $min >= 0 && $min < 60){
//             $this->min = $min;
//         }

//         if (is_int($sec) && $sec >= 0 && $sec < 60){
//             $this->sec = $sec;
//         }
        
//     }

//     public function __set($property, $value)
//     {
//         if($property == "hour" || $property == "min" || $property == "sec")
//         {
//             if ($property == "hour"){

//                 if (is_int($value) && $value >=0 && $value < 24){
//                     $this->hour = $value;
//                 }
//             }

//             if ($property == "min"){

//                 if (is_int($value) && $value >=0 && $value < 60){
//                     $this->min = $value;
//                 }
//             }

//             if ($property == "sec"){

//                 if (is_int($value) && $value >=0 && $value < 60){
//                     $this->sec = $value;
//                 }
//             }
//         }
//     }

//     public function __get($property)
//     {
//         if($property == "hour" || $property == "min" || $property == "sec"){
//             return $this->$property;
//         }
//     }

//     public function getTime(){
//         return $this->hour . " : " . $this->min . " : " . $this->sec;

//     }
        
// }

// $time = new Time();

// //set
// $time->hour = 12;
// $time->min = 70;
// $time->sec = 19;

// echo $time->getTime();

// class Car{

//     public function __get($propertyName){
//         return "Red";
//     }
// }

// $car = new Car;

// $value = $car->size;

// echo "the color is $value";

// class Shape {
//     //Code
// }

// class Circle extends Shape {
//     // Code
// }

// class ParentClass
// {
//     public function myMethod()
//     {
//         return "Parent Method";
//     }
// }

// class ChildClass extends ParentClass
// {
    // public function myMethod()
    // {
    //     return "Child Method";
    // }
// }

// $parentObj = new ParentClass();

// echo $parentObj->myMethod(). "</br>";

// $childObj = new ChildClass();
// echo $childObj->myMethod();

// final class ParentClass{
//     public function myMethod(){
//         echo "Parent Method";       
//     }
// }

// class ChildClass extends ParentClass{
//     public function myMethod(){
//         echo "Child Methdo";
//     }
// }

// class ParentClass{
//     final public function myMethod(){
//         echo "Parent Method";       
//     }
// }

// class ChildClass extends ParentClass{
//     public function myMethod(){
//         echo "Child Methdo";
//     }
// }

// abstract class Car {
//     protected $name ;
//     protected $color;

//     //code
// }

// $car = new Car();

// abstract class Car {
//     protected $name;
//     protected $color;

//     abstract public function break();

//     public function getName(){
//         return $this->name;
//     }
// }

// class ChildCar extends Car{
//     //Code
// }