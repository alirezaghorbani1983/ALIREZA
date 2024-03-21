<?php

// if(isset($_POST['sned'])){
//     echo $_POST['email'];
// }

if (isset($_POST['send'])) {
    echo '<pre>';
    print_r($_POST);
}
?>

<form action="./index.php" method="post">
    <!-- <input type="text" name="email">
    <br>
    <input type="text" name="password">
    <br> -->

    <input type="checkbox" name="php"> php;
    <br>
    <input type="checkbox" name="laravel" value="laravel"> laravel;
    <br>
    <button type="submit" name="send">send</button>
</form>