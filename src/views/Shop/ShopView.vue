<script setup>
import BreadCrumbs from "../../components/breadcrumbs.vue";
import ShopToolbar from "../../components/shop/ShopToobar.vue";
import ShopProduct from "../../components/shop/ShopProducts.vue";
</script>

<template>
  <!--breadcrumbs area start-->
  <BreadCrumbs />
  <!--breadcrumbs area end-->

  <!--shop wrapper start-->
  <div class="shop_wrapper shop_fullwidth">
    <div class="container">
      <!--shop toolbar start-->
      <ShopToolbar />
      <!--shop toolbar end-->

      <!--shop tab product-->
      <ShopProduct />
      <!--shop tab product end-->

      <!--pagination style start-->
      <div class="row">
        <div class="col-12">
          <div class="pagination_style fullwidth">
            <ul>
              <li class="current_number">1</li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">»</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!--pagination style end-->
    </div>
  </div>
  <!--shop wrapper end-->
</template>
