<?php

session_start();

$_SESSION['id'] = 10;

$_SESSION['name'] = 'alireza ghorbani';

// setcookie("user", 'alireza ghorbani', time() - 3600);

// if(isset($_COOKIE['user'])){
//     echo $_COOKIE['user'];
// } else {
//     echo "cookie is not set";
// }

?>