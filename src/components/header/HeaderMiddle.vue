<script setup></script>

<template>
  <!--header middel start-->
  <div class="header_middel">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-4">
          <div class="logo">
            <a href="index.html"
              ><img src="../../assets/img/logo/logo.png" alt=""
            /></a>
          </div>
        </div>
        <div class="col-lg-7 col-md-5">
          <div class="search_bar">
            <form action="#">
              <input placeholder="Search entire store here..." type="text" />
              <button type="submit">
                <i class="ion-ios-search-strong"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-2 col-md-3">
          <div class="cart_area">
            <div class="wishlist_link">
              <a href="#"><i class="ion-ios-heart-outline"></i></a>
            </div>
            <div class="cart_link">
              <a href="javascript:void(0)"
                ><i class="ion-ios-cart-outline"></i>My Cart</a
              >
              <span class="cart_count">2</span>
              <!--mini cart-->
              <div class="mini_cart">
                <div class="items_nunber">
                  <span>2 Items in Cart</span>
                </div>
                <div class="cart_button checkout">
                  <a href="checkout.html">Proceed to Checkout</a>
                </div>
                <div class="cart_item">
                  <div class="cart_img">
                    <a href="#"
                      ><img src="../../assets/img/cart/cart1.jpg" alt=""
                    /></a>
                  </div>
                  <div class="cart_info">
                    <a href="#">Mr.Coffee 12-Cup</a>
                    <form action="#">
                      <input min="0" max="100" type="number" />
                      <span>$60.00</span>
                    </form>
                  </div>
                </div>
                <div class="cart_item">
                  <div class="cart_img">
                    <a href="#"
                      ><img src="../../assets/img/cart/cart2.jpg" alt=""
                    /></a>
                  </div>
                  <div class="cart_info">
                    <a href="#">Lid Cover Cookware</a>
                    <form action="#">
                      <input min="0" max="100" type="number" />
                      <span>$160.00</span>
                    </form>
                  </div>
                </div>
                <div class="cart_button view_cart">
                  <a href="#">View and Edit Cart</a>
                </div>
              </div>
              <!--mini cart end-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--header middel end-->
</template>
