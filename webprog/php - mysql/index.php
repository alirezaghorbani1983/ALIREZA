<?php

// $file = fopen('log.txt', 'r');

// $content = fread($file, filesize('log.txt'));

// echo $content;

// fclose($file);

// echo file_get_contents('log.txt');

//copy file

// copy('log.txt', 'log_copy.txt');

//rename file

// rename('log_copy.txt', 'log_renamed.txt');

// unlink('log_renamed.txt');

//create a directory

// mkdir('dir');

//rename a directory
// rename('dir', 'dir_renamed');

//remove a directory

// rmdir('dir_renamed');


//new PDO(dns, username, password)

$connection = new PDO("mysql:host=localhost;dbname=mysql_sandbox;charset=utf8","root", "");

// $result = $connection-> query("SELECT * FROM users");

echo "<pre>";

// print_r($result-> fetch());

// print_r($result-> fetch(pdo::FETCH_ASSOC));
// print_r($result-> fetch(pdo::FETCH_NUM));
// print_r($result-> fetch(pdo::FETCH_BOTH));

// print_r($result-> fetchAll());

// print_r($result-> fetchall(pdo::FETCH_ASSOC));

// print_r($result-> fetchall(pdo::FETCH_NUM));
// print_r($result-> fetchall(pdo::FETCH_BOTH));


// $result = $connection-> query("DELETE FROM users WHERE id = 9");

$result = $connection-> query("INSERT INTO users (`name`) VALUES ('ahmad')");

echo $result->rowCount() . " inserted";

// echo $result->rowCount();

// foreach($result as $row){
//     echo $row['name'] . "<br>";
// }

// $result = $connection-> query("DELETE FROM users WHERE id = 9");

// echo $result->rowCount() . " deleted";

// $result = $connection->query("INSERT INTO users (name) VALUES ('ahmad')");

// echo $result->rowCount() . " inserted";

// $result = $connection->query("UPDATE users SET name  = 'matin' WHERE id = 10");

// echo $result->rowCount() . " inserted";

$query = "UPDATE users SET name  = 'matin' WHERE id = 10";

$result = $connection->query($query);

echo $result->rowCount() . " updated";

?>

