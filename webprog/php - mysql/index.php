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

$result = $connection-> query("SELECT * FROM users");

echo "<pre>";

// print_r($result-> fetch());

print_r($result-> fetch(pdo::FETCH_ASSOC));

?>

