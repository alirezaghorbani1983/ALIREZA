<?php

// if(isset($_POST['sned'])){
//     echo $_POST['email'];
// }

if (isset($_POST['send'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if(empty($email)){
        echo "email required";
    }

}
?>

<form action="./index.php" method="post">
    <input type="text" name="email">
    <br>
    <input type="text" name="password">
    <br>
    <br>
    <button type="submit" name="send">send</button>
</form>