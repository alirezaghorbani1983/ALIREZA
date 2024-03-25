<?php

$file = fopen('log.txt', 'r');

$content = fread($file, filesize('log.txt'));

echo $content;

fclose($file);

echo file_get_contents('log.txt');

?>

