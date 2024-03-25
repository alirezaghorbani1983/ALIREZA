<?php

session_start();

// $_SESSION['id'] = 10;

// $_SESSION['name'] = 'alireza ghorbani';

unset($_SESSION['id']);

session_unset();

session_destroy();

// setcookie("user", 'alireza ghorbani', time() - 3600);

// if(isset($_COOKIE['user'])){
//     echo $_COOKIE['user'];
// } else {
//     echo "cookie is not set";
// }

?>

