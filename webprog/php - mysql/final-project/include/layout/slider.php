<?php
$sliders = $db->query("SELECT * FROM posts_slider");
// $sliders = $db->query("SELECT * FROM posts_slider");

// echo "<pre>";
// print_r($sliders->fetchAll());

// foreach($sliders as $slider){
//     // print_r($slider['post_id']);
//     $postId = $slider['post_id'];
//     $post = $db->query('SELECT * FROM posts WHERE id = $postId');

//     echo "<pre>";
//     print_r($post-> fetch());

// }

// foreach($sliders as $slider){
//     $postId = $slider['post_id'];
//     $post = $db->query("SELECT * FROM posts WHERE id = $postId");

//     echo "<pre>";
//     print_r($post->fetch());
// }

?>

<section>
    <div id="carousel" class="carousel slide">
        <div class="carousel-indicators">
            <button type="button"  data-bs-target="#carousel" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
        </div>   
        <div class="carousel-inner rounded">
            <div class="carousel-item overlay carousel-height active">
                <img
                    src="./assets/images/1.jpg"
                    class="d-block w-100"
                    alt="post-image"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Lorem Ipsum text</h5>
                    <p>
                        Ipsum is dummy text with simplicity production, unintelligible from the printing industry, and using" in English. </p>
                </div>
            </div>
            <div class="carousel-item carousel-height overlay">
                <img
                    src="./assets/images/2.jpg"
                    class="d-block w-100"
                    alt="post-image"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5>Lorem Ipsum text</h5>
                    <p>
                        Ipsum is dummy text with simplicity production, unintelligible from the printing industry, and using" in English.
                    </p>
                </div>
            </div>
            <div class="carousel-item carousel-height overlay">
                <img
                    src="./assets/images/3.jpg"
                    class="d-block w-100"
                    alt="post-image"
                />
                <div class="carousel-caption d-none d-md-block">
                    <h5> Lorem Ipsum text</h5>
                    <p>
                        Ipsum is dummy text with simplicity production, unintelligible from the printing industry, and using" in English.                                        
                    </p>
                </div>
            </div>
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carousel"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>