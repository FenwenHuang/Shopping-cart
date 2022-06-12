<template>
<footer class="bg-dark py-5">
    <div class="container">
        <div class="row text-white g-4">
            <div class="col-md-6 col-lg-3">
                <a href="product.html" class="text-decoration-none brand text-white">Lululemon</a>
                <p class="text-white text-muted mt-3">
                    Founded in Vancouver BC in 1998, the first lululemon store shared its retail space with a yoga studio. We've been growing ever since, and our technical yoga clothes and apparel can now be found in locations across Canada, the United States, Europe, and Asia Pacific.
                </p>
            </div>

            <div class="col-md-6 col-lg-3">
                <h5 class="fw-light">Links</h5>
                <ul class="">
                    <li class="my-3">
                        <a href="/" class="text-white text-decoration-none text-muted">
                            <i class="fas fa-chevron-right me-1"></i>Home
                        </a>
                    </li>
                    <li class="my-3">
                        <a href="/collection" class="text-white text-decoration-none text-muted">
                            <i class="fas fa-chevron-right me-1"></i>Collection
                        </a>
                    </li>
                    <li class="my-3">
                        <a href="/design" class="text-white text-decoration-none text-muted">
                            <i class="fas fa-chevron-right me-1"></i>Product Design
                        </a>
                    </li>
                    <li class="my-3">
                        <a href="/" class="text-white text-decoration-none text-muted">
                            <i class="fas fa-chevron-right me-1"></i>About Us
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 col-lg-3">
                <h5 class="fw-light mb-3">Contact Us</h5>
                <div class="d-flex justify-content-start align-items-start my-2 text-muted">
                    <span class="me-3">
                        <i class="fas fa-map-marked-alt"></i>
                    </span>
                    <span class="fw-light">
                        athletica 1818 Cornwall Ave, Vancouver BC V6J 1C7
                    </span>
                </div>
                <div class="d-flex justify-content-start align-items-start my-2 text-muted">
                    <span class="me-3">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="fw-light">
                       lululemon@gmail.com
                    </span>
                </div>
                <div class="d-flex justify-content-start align-items-start my-2 text-muted">
                    <span class="me-3">
                        <i class="fas fa-phone-alt"></i>
                    </span>
                    <span class="fw-light">
                        1.877.263.9300
                    </span>
                </div>
            </div>

            <div class="col-md-6 col -lg-3">
                <h6 class="fw-light mb-3">Follow Us</h6>
                <div class="d-flex">
                    <ul class="list-unstyled d-flex">
                        <li>
                            <a href="https://facebook.com/lululemon" class="text-white text-decoration-none text-muted fs-4 me-4">
                                <font-awesome-icon :icon="['fab', 'facebook']"/>

                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/lululemon" class="text-white text-decoration-none text-muted fs-4 me-4">
                                <i class="fab fa-twitter"></i>
                                <font-awesome-icon :icon="['fab', 'twitter']"/>

                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com/lululemon" class="text-white text-decoration-none text-muted fs-4 me-4">
                                <font-awesome-icon :icon="['fab', 'instagram']"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://pinterest.com/lululemon" class="text-white text-decoration-none text-muted fs-4 me-4">
                                <i class="fab fa-pinterest"></i>
                                <font-awesome-icon :icon="['fab', 'pinterest']"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</footer>

</template>