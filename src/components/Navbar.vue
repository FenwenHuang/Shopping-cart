<template>



<div class="nav">

<!-- <router-link to="/home"></router-link> -->

      

        <nav class="container-fluid navbar-expand-lg navbar-light bg-white py-4 fixed-top nav-top">

        <div class="row order-lg-0">
            <div class="col">
                <a href="header" class="navbar-brand"></a>
                <img style="width: 20px;" class=""
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Lululemon_Athletica_logo.svg/640px-Lululemon_Athletica_logo.svg.png"
                    alt="">
                <span class=" fw-lighter ms-2">
                    <a src="/" class="text-decoration-none" style="color: black;" href="/">Lululemon</a>
                    </span>
            </div>

            <div class="col order-lg-2 text-end">
                <button type="button" class="btn nav-btns position-relative ">
              <router-link to="/login">
                   <font-awesome-icon :icon="['fas', 'user']" /></router-link>
                    <span class="position-absolute translate-middle badge "></span>

                </button>
                <button type="button" class="btn nav-btns position-relative">
                    <font-awesome-icon :icon="['fas', 'shopping-cart']" />        
                    <span class="position-absolute translate-middle badge ">5</span>

                </button>
                <button type="button" class="btn nav-btns position-relative">
                   <font-awesome-icon :icon="['fas', 'heart']" />
                    <span class="position-absolute translate-middle badge bg-primary">2</span>

                </button>
                <!-- <button type="button" class="btn nav-btns position-relative">
                    <i class="fa fa-search"></i>
                    <span class="position-absolute translate-middle badge bg-primary"></span>

                </button> -->

            </div>

            <div class="col text-end">
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse order-lg-1" id="navMenu">
                    <ul class="navbar-nav  text-center">
                        <li class="nav-item px-2"><a id="nav" class="nav-link" href="/">HOME</a></li>
                        <li class="nav-item px-2"><a id="nav" class="nav-link" href="/#collection">COLLECTION</a></li>
                        <li class="nav-item px-2"><a id="nav" class="nav-link" href="/#design">PRODUCT DESIGN</a></li>
                        <li class="nav-item px-2 border-0"><a id="nav" class="nav-link" href="/#about">ABOUT US</a></li>

                    </ul>

                </div>
            </div>
            </div>

    </nav>

</div>


  


</template>