<?php

// if(isset($_POST['sned'])){
//     echo $_POST['email'];
// }

$errors =[];
if (isset($_POST['send'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    if(empty($email)){
        array_push($errors, "email required");
    } elseif (! filter_var($email, FILTER_VALIDATE_EMAIL)) {
        array_push($errors, "invalid email");
    }

    if(empty($password)){
        array_push($errors, "password required");
    } elseif(strlen($password) < 5) {
        array_push($errors, "password cannot be less than 5 characters");
    }    

    if(empty($errors)){
        echo $email, $password;
    } 
}
?>

<div style="color : red">
    <?php foreach($errors as $error): ?>
        <p><?= $error ?></p>
        <?php endforeach ?>

</div>

<form action="./index.php" method="post">
    <input type="text" name="email">
    <br>
    <input type="text" name="password">
    <br>
    <br>
    <button type="submit" name="send">send</button>
</form>