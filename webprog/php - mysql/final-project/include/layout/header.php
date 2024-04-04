<?php


include "./include/config.php";
include "./include/db.php";


$query= "SELECT * FROM categories";

$categories= $db->query($query);

// echo "<pre>";
// print_r($categories->fetchAll());

?>

<!DOCTYPE html>
<html dir="ltr" lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>php project</title>

        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        />
        <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
            crossorigin="anonymous"
        />

        <link rel="stylesheet" href="./assets/css/style.css" />
    </head>

    
    <body>
        <header class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">

            <nav class="d-inline-flex mt-2 mt-md-0 me-md-auto">

            <!-- <?php //foreach($categories as $category){ ?>
                    <a class="fw-bold me-3 py-2 link-body-emphasis text-decoration-none" href="#"><?php //echo $category['title'] ?></a>
            <?php //} ?> -->

                <?php if($categories->rowCount() > 0) : ?>  
                <?php foreach($categories as $category): ?>
                    <a class="fw-bold me-3 py-2 link-body-emphasis text-decoration-none" href="#"><?= $category['title'] ?></a>
                <?php endforeach ?>
                <?php endif ?>
            </nav>
            
            <a href="index.html" class="fs-4 fw-medium link-body-emphasis text-decoration-none">sample.com

            </a>
        </header>
    </body>