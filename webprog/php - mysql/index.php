<?php

$file = fopen('log.txt', 'r');

$content = fread($file, 2);

echo $content;

?>

