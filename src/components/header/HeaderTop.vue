<script setup>
import { useAuth } from "../../stores/auth";

let auth = useAuth();
</script>

<template>
  <!--header top start-->
  <div class="header_top">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 col-md-6">
          <div class="welcome_text">
            <p>Pakistan Fastest Online Shopping Destination</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6">
          <div class="top_right text-end">
            <ul>
              <li v-if="!auth.isAuth" class="top_links">
                <RouterLink to="/login">Login</RouterLink>
              </li>
              <li v-if="auth.isAuth" class="top_links">
                <a href="#" @click.prevent
                  >My Account <i class="ion-chevron-down"></i
                ></a>
                <ul class="dropdown_links">
                  <li>
                    <RouterLink to="/my-whishlist">My Wish List</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/my-account">My Wish List</RouterLink>
                  </li>
                  <li><a href="#">Sign Out</a></li>
                </ul>
              </li>
              <li class="currency">
                <a href="#">USD <i class="ion-chevron-down"></i></a>
                <ul class="dropdown_currency">
                  <li><a href="#">EUR</a></li>
                  <li><a href="#">BRL</a></li>
                </ul>
              </li>
              <li class="language">
                <a href="#"
                  ><img src="../../assets/img/logo/language.png" alt="" />
                  English <i class="ion-chevron-down"></i
                ></a>
                <ul class="dropdown_language">
                  <li>
                    <a href="#"
                      ><img src="../../assets/img/logo/cigar.jpg" alt="" />
                      French</a
                    >
                  </li>
                  <li>
                    <a href="#"
                      ><img
                        src="../../assets/img/logo/language2.png"
                        alt=""
                      />German</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--header top start-->
</template>
