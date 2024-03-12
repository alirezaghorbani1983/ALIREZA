<?php
$name = "Ali";
$name = "reza";

$newName = &$name;

$newName = "Mohsen";
echo $newName;

echo $name;
?>