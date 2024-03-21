<?php

if(isset($_POST['sned'])){
    echo $_POST['email'];
}

?>

<form action="./index.php" method="post">
    <input type="text" name="email">
    <br>
    <input type="text" name="password">
    <br>
    <button type="submit" name="send">send</button>
</form>