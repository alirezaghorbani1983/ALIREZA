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

    <!-- <input type="checkbox" name="php"> php;
    <br>
    <input type="checkbox" name="laravel" value="laravel"> laravel;
    <br> -->
    <!-- <input type="radio" name="vue.js"> Vue.js;
    <br>
    <input type="radio" name="raect.js" value="raect"> React.js;
    <br> -->

    <!-- <textarea name="textarea" id="" cols="30" rows="10">welkom</textarea>
    <br> -->

    <select multiple name="lang[]" id="">
        <option value="java">Java</option>
        <option value="numby" >Numby</option>
        <option value="python">python</option>

    </select>
    <br>
    <button type="submit" name="send">send</button>
</form>