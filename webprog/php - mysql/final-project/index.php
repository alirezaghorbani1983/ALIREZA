<?php
include "./include/layout/header.php"
?>

    <body>
        <div class="container py-3">
            <header
                class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom"
            >
                <a
                    href="index.html"
                    class="fs-4 fw-medium link-body-emphasis text-decoration-none"
                >
                    webprog.io
                </a>

                <nav class="d-inline-flex mt-2 mt-md-0 me-md-auto">
                    <a
                        class="fw-bold me-3 py-2 link-body-emphasis text-decoration-none"
                        href="#"
                        >طبیعت</a
                    >
                    <a
                        class="me-3 py-2 link-body-emphasis text-decoration-none"
                        href="#"
                        >گردشگری</a
                    >
                    <a
                        class="me-3 py-2 link-body-emphasis text-decoration-none"
                        href="#"
                        >تکنولوژی</a
                    >
                    <a
                        class="me-3 py-2 link-body-emphasis text-decoration-none"
                        href="#"
                        >متفرقه</a
                    >
                </nav>
            </header>

            <main>
                <!-- Slider Section -->
                <section>
                    <div id="carousel" class="carousel slide">
                        <div class="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carousel"
                                data-bs-slide-to="0"
                                class="active"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carousel"
                                data-bs-slide-to="1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carousel"
                                data-bs-slide-to="2"
                            ></button>
                        </div>
                        <div class="carousel-inner rounded">
                            <div
                                class="carousel-item overlay carousel-height active"
                            >
                                <img
                                    src="./assets/images/1.jpg"
                                    class="d-block w-100"
                                    alt="post-image"
                                />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>لورم ایپسوم متن</h5>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی
                                        نامفهوم از صنعت چاپ و با استفاده
                                    </p>
                                </div>
                            </div>
                            <div class="carousel-item carousel-height overlay">
                                <img
                                    src="./assets/images/2.jpg"
                                    class="d-block w-100"
                                    alt="post-image"
                                />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>لورم ایپسوم متن</h5>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی
                                        نامفهوم از صنعت چاپ و با استفاده
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
                                    <h5>لورم ایپسوم متن</h5>
                                    <p>
                                        لورم ایپسوم متن ساختگی با تولید سادگی
                                        نامفهوم از صنعت چاپ و با استفاده
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

                <!-- Content Section -->
                <section class="mt-4">
                    <div class="row">
                        <!-- Posts Content -->
                        <div class="col-lg-8">
                            <div class="row g-3">
                                <div class="col-sm-6">
                                    <div class="card">
                                        <img
                                            src="./assets/images/4.jpg"
                                            class="card-img-top"
                                            alt="post-image"
                                        />
                                        <div class="card-body">
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <h5 class="card-title fw-bold">
                                                    لورم ایپسوم
                                                </h5>
                                                <div>
                                                    <span
                                                        class="badge text-bg-secondary"
                                                        >طبیعت</span
                                                    >
                                                </div>
                                            </div>
                                            <p
                                                class="card-text text-secondary pt-3"
                                            >
                                                لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم از صنعت چاپ و با
                                                استفاده از طراحان گرافیک است.
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است و برای شرایط فعلی تکنولوژی
                                                مورد نیاز و کاربردهای متنوع با
                                                هدف بهبود
                                            </p>
                                            <div
                                                class="d-flex justify-content-between align-items-center"
                                            >
                                                <a
                                                    href="single.html"
                                                    class="btn btn-sm btn-dark"
                                                    >مشاهده</a
                                                >

                                                <p class="fs-7 mb-0">
                                                    نویسنده : علی شیخ
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <img
                                            src="./assets/images/5.jpg"
                                            class="card-img-top"
                                            alt="post-image"
                                        />
                                        <div class="card-body">
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <h5 class="card-title fw-bold">
                                                    لورم ایپسوم
                                                </h5>
                                                <div>
                                                    <span
                                                        class="badge text-bg-secondary"
                                                        >گردشگری</span
                                                    >
                                                </div>
                                            </div>
                                            <p
                                                class="card-text text-secondary pt-3"
                                            >
                                                لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم از صنعت چاپ و با
                                                استفاده از طراحان گرافیک است.
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است و برای شرایط فعلی تکنولوژی
                                                مورد نیاز و کاربردهای متنوع با
                                                هدف بهبود
                                            </p>
                                            <div
                                                class="d-flex justify-content-between align-items-center"
                                            >
                                                <a
                                                    href="single.html"
                                                    class="btn btn-sm btn-dark"
                                                    >مشاهده</a
                                                >

                                                <p class="fs-7 mb-0">
                                                    نویسنده : علی شیخ
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="card">
                                        <img
                                            src="./assets/images/6.jpg"
                                            class="card-img-top"
                                            alt="post-image"
                                        />
                                        <div class="card-body">
                                            <div
                                                class="d-flex justify-content-between"
                                            >
                                                <h5 class="card-title fw-bold">
                                                    لورم ایپسوم
                                                </h5>
                                                <div>
                                                    <span
                                                        class="badge text-bg-secondary"
                                                        >متفزقه</span
                                                    >
                                                </div>
                                            </div>
                                            <p
                                                class="card-text text-secondary pt-3"
                                            >
                                                لورم ایپسوم متن ساختگی با تولید
                                                سادگی نامفهوم از صنعت چاپ و با
                                                استفاده از طراحان گرافیک است.
                                                چاپگرها و متون بلکه روزنامه و
                                                مجله در ستون و سطرآنچنان که لازم
                                                است و برای شرایط فعلی تکنولوژی
                                                مورد نیاز و کاربردهای متنوع با
                                                هدف بهبود
                                            </p>
                                            <div
                                                class="d-flex justify-content-between align-items-center"
                                            >
                                                <a
                                                    href="single.html"
                                                    class="btn btn-sm btn-dark"
                                                    >مشاهده</a
                                                >

                                                <p class="fs-7 mb-0">
                                                    نویسنده : علی شیخ
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Sidebar Section -->
                        <div class="col-lg-4">
                            <!-- Sesrch Section -->
                            <div class="card">
                                <div class="card-body">
                                    <p class="fw-bold fs-6">جستجو در وبلاگ</p>
                                    <form action="search.html">
                                        <div class="input-group mb-3">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="جستجو ..."
                                            />
                                            <button
                                                class="btn btn-secondary"
                                                type="submit"
                                            >
                                                <i class="bi bi-search"></i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <!-- Categories Section -->
                            <div class="card mt-4">
                                <div class="fw-bold fs-6 card-header">دسته بندی ها</div>
                                <ul class="list-group list-group-flush p-0">
                                    <li class="list-group-item">
                                        <a
                                            class="link-body-emphasis text-decoration-none"
                                            href="#"
                                            >طبیعت</a
                                        >
                                    </li>
                                    <li class="list-group-item">
                                        <a
                                            class="link-body-emphasis text-decoration-none"
                                            href="#"
                                            >گردشگری</a
                                        >
                                    </li>
                                    <li class="list-group-item">
                                        <a
                                            class="link-body-emphasis text-decoration-none"
                                            href="#"
                                            >تکنولوژی</a
                                        >
                                    </li>
                                    <li class="list-group-item">
                                        <a
                                            class="link-body-emphasis text-decoration-none"
                                            href="#"
                                            >متفرقه</a
                                        >
                                    </li>
                                </ul>
                            </div>

                            <!-- Subscribue Section -->
                            <div class="card mt-4">
                                <div class="card-body">
                                    <p class="fw-bold fs-6">عضویت در خبرنامه</p>

                                    <form>
                                        <div class="mb-3">
                                            <label class="form-label"
                                                >نام</label
                                            >
                                            <input
                                                type="text"
                                                class="form-control"
                                            />
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label"
                                                >ایمیل</label
                                            >
                                            <input
                                                type="email"
                                                class="form-control"
                                            />
                                        </div>
                                        <div class="d-grid gap-2">
                                            <button
                                                type="submit"
                                                class="btn btn-secondary"
                                            >
                                                ارسال
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <!-- About Section -->
                            <div class="card mt-4">
                                <div class="card-body">
                                    <p class="fw-bold fs-6">درباره ما</p>
                                    <p class="text-justify">
                                        لورم ایپسوم متن ساختگی با تولید سادگی
                                        نامفهوم از صنعت چاپ و با استفاده از
                                        طراحان گرافیک است. چاپگرها و متون بلکه
                                        روزنامه و مجله در ستون و سطرآنچنان که
                                        لازم است و برای شرایط فعلی تکنولوژی مورد
                                        نیاز و کاربردهای متنوع با هدف بهبود
                                        ابزارهای کاربردی می باشد.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <!-- Footer Section -->
            <footer class="text-center pt-4 my-md-5 pt-md-5 border-top">
                <div class="row flex-column">
                    <div>
                        <p class="">
                            کلیه حقوق محتوا این سایت متعلق به وب سایت webprog.io
                            میباشد
                        </p>
                    </div>
                    <div>
                        <a href="#"
                            ><i
                                class="bi bi-telegram fs-3 text-secondary ms-2"
                            ></i
                        ></a>
                        <a href="#"
                            ><i
                                class="bi bi-whatsapp fs-3 text-secondary ms-2"
                            ></i
                        ></a>
                        <a href="#"
                            ><i class="bi bi-instagram fs-3 text-secondary"></i
                        ></a>
                    </div>
                </div>
            </footer>
        </div>
        <script
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
            crossorigin="anonymous"
        ></script>
    </body>
</html>
