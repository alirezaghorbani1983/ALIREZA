
// $x = 5;

// var_dump($x);

// $y = 10;

// var_dump((float)$y);
// $s = 2.99;
// var_dump(is_numeric($s));

// echo rand(0,10) . PHP_EOL;

// echo floor(6.9);

// $str = 'hello world';
// //echo str_world_count($str);
// // $str[3] = 'm';
// // echo $str;

// //echo substr($str, 6, 3);
// echo strpos($str, 'o', 5);
// echo strripos($str, 'O');
// $names = ['ali', 'liam', 'sara'];

// rsort($names);


//print_r($names);

// $x = 5;
// switch($x){
//     case 1: 
//         echo "x is 1";
//         break;
//     case 2:
//         echo "x is 2";
//         break;
//     case 3: 
//         echo "x is 3";
//         break;
//     default:
//         echo "x is $x";
//         break;
// }


// for($i = 1; $i <= 5; $i++){
//     echo $i . PHP_EOL;

//     for($j = 0; $j <= 3; $j++){
//         echo $i . '-' . $j . PHP_EOL;
//     }
// }

// for($i = 1; $i <= 5; $i++){
//     if($i == 3){
//         echo "Breaking ...";
//         break;
//     }
//     echo $i . PHP_EOL;
// }
// declare(strict_types = 1);


// function add(int|float|string $x, int $y)
// {
//     return $x + $y;
// }
// $result = add('5', 6);
// echo $result;

// function sum($x, $y, ...$numbers)
// {
//     print_r($numbers);

//     return $x + $y;
// }

// echo sum(10, 12, 4, 8, 9);

// $x = 100; //global
// function demo(){
//     global $x;
//     $y = 50; //local
//     echo $x;
// }

// demo();

// $x = 20;

// $greet = function ($name) use($x) {
//     // global $x;
//     return "hello $name - $x";
// };

// echo $greet("ali");

// $y = 50;

// $greet = fn ($name) => "hello $name - $y";

// echo $greet("liam");
// require "./other.php";
// require_once "./other.php";
// require "test.php";

// example();

<?php
echo "<pre>";
    print_r($_GET);

?>

<form action="./index.php">
    <input type="text" name="email">
    <br>
    <input type="text" name="password">
    <br>
    <button type="submit" name="send">send</button>
</form>