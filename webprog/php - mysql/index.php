<?php

$file = fopen('log.txt', 'w');

fwrite($file, 'ali');

fclose($file);


file_put_contents("log.txt", 'php ...', FILE_APPEND)

?>

