<script setup>
import SliderArea from "../../components/home/SliderArea.vue";
import ShippingArea from "../../components/home/ShippingArea.vue";
import CategoriesBanner from "../../components/home/CategoriesBanner.vue";
import DealsArea from "../../components/home/DealsArea.vue";
import BannerArea from "../../components/home/BannerArea.vue";
import ProductsArea from "../../components/home/ProductsArea.vue";
import DiscountBanner from "../../components/home/DiscountBanner.vue";
import HomeBannerSection from "../../components/home/HomeBannerSection.vue";
import ConsolesProducts from "../../components/home/ConsolesProducts.vue";
import CustomProducts from "../../components/home/CustomProducts.vue";
import BrandsArea from "../../components/home/BrandsArea.vue";
import FooterArea from "../../components/footer/FooterArea.vue";
</script>

<template>
  <!--Slider area start-->
  <SliderArea />
  <!--slider area end-->

  <!--shipping area start-->
  <ShippingArea />
  <!--shipping area end-->

  <!--categories banner start-->
  <CategoriesBanner />
  <!--categories banner end-->

  <!-- Deals area start -->
  <DealsArea />
  <!-- Deals area end -->

  <!-- Banner area start -->
  <BannerArea />
  <!-- Banner area end -->

  <!-- Banner areat start -->
  <ProductsArea />
  <!-- Banner areat end -->

  <DiscountBanner />

  <HomeBannerSection />
  <ConsolesProducts />
  <DiscountBanner />
  <CustomProducts />
  <BrandsArea />

  <FooterArea />
</template>
