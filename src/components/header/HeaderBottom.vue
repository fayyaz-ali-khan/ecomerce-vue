<script setup>
const mainLiks = [
  {
    path: "/",
    title: "Home",
    active: true,
  },
  {
    path: "/shop",
    title: "Shop",
    active: false,
  },
  {
    path: "/contact-us",
    title: "Contact Us",
    active: false,
  },
];
</script>

<template>
  <!--header bottom satrt-->
  <div class="header_bottom sticky-header">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-5">
          <div class="categories_menu">
            <div class="categories_title">
              <h2 class="categori_toggle">All categories</h2>
            </div>
            <div class="categories_menu_inner">
              <ul>
                <li class="categorie_list">
                  <a href="#"
                    >Laptop & Computer <i class="fa fa-angle-right"></i
                  ></a>
                  <ul class="categories_mega_menu">
                    <li>
                      <a href="#">Headphoness</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Dell Laptops</a></li>
                          <li><a href="">HP Laptops</a></li>
                          <li><a href="">Lenovo Laptops</a></li>
                          <li><a href="">Apple Laptops</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Laptop & Computers</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Digital Cameras</a></li>
                          <li><a href="">Camcorders</a></li>
                          <li><a href="">Photo Accessories</a></li>
                          <li><a href="">Memory Cards</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Camera & Photos</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Apple Phones</a></li>
                          <li><a href="">Samsung Phones</a></li>
                          <li><a href="">Motorola Phones</a></li>
                          <li><a href="">Lenovo Phones</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <img
                        src="../../assets/img/categorie/categorie.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#"> Fashion <i class="fa fa-angle-right"></i></a>
                  <ul class="categories_mega_menu">
                    <li>
                      <a href="#">Dresses</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Sweater</a></li>
                          <li><a href="">Evening</a></li>
                          <li><a href="">Day</a></li>
                          <li><a href="">Sports</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Handbags</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Shoulder</a></li>
                          <li><a href="">Satchels</a></li>
                          <li><a href="">kids</a></li>
                          <li><a href="">coats</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">shoes</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Ankle Boots</a></li>
                          <li><a href="">Clog sandals </a></li>
                          <li><a href="">run</a></li>
                          <li><a href="">Books</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Clothing</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Coats Jackets </a></li>
                          <li><a href="">Raincoats</a></li>
                          <li><a href="">Jackets</a></li>
                          <li><a href="">T-shirts</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Furnitured & Decor <i class="fa fa-angle-right"></i
                  ></a>
                  <ul class="categories_mega_menu column_3">
                    <li>
                      <a href="#">Chair</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Dining room</a></li>
                          <li><a href="">bedroom</a></li>
                          <li><a href=""> Home & Office</a></li>
                          <li><a href="">living room</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Lighting</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Ceiling Lighting</a></li>
                          <li><a href="">Wall Lighting</a></li>
                          <li><a href="">Outdoor Lighting</a></li>
                          <li><a href="">Smart Lighting</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Sofa</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Fabric Sofas</a></li>
                          <li><a href="">Leather Sofas</a></li>
                          <li><a href="">Corner Sofas</a></li>
                          <li><a href="">Sofa Beds</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    Toys & Hobbies <i class="fa fa-angle-right"></i
                  ></a>
                  <ul class="categories_mega_menu column_2">
                    <li>
                      <a href="#">Boys' Toys</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Building Toys</a></li>
                          <li><a href="">Electronics Toys</a></li>
                          <li><a href="">action figures </a></li>
                          <li><a href="">specialty & boutique toy</a></li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">Girls' Toys</a>
                      <div class="categorie_sub_menu">
                        <ul>
                          <li><a href="">Dolls for Girls</a></li>
                          <li><a href="">Girls' Learning Toys</a></li>
                          <li><a href="">Arts and Crafts for Girls</a></li>
                          <li><a href="">Video Games for Girls</a></li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </li>
                <li><a href="#"> Accessories</a></li>
                <li><a href="#"> Jewelry & Watches</a></li>
                <li><a href="#"> Health & Beauty</a></li>
                <li><a href="#">Books & Office</a></li>
                <li><a href="#"> Sport & Outdoor</a></li>
                <li id="cat_toggle" class="has-sub">
                  <a href="#"> More Categories</a>
                  <ul class="categorie_sub">
                    <li><a href="#"> Computer - Laptop</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-7 position-relative">
          <div class="main_menu_inner">
            <div class="main_menu d-none d-lg-block">
              <ul>
                <li
                  v-for="route in mainLiks"
                  :class="{ active: route.active }"
                  :key="route.path"
                >
                  <RouterLink :to="route.path"> {{ route.title }} </RouterLink>
                </li>
              </ul>
            </div>
            <div class="mobile-menu d-lg-none">
              <nav>
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                    <ul>
                      <li><a href="index.html">Home 1</a></li>
                      <li><a href="index-2.html">Home 2</a></li>
                      <li><a href="index-3.html">Home 3</a></li>
                      <li><a href="index-4.html">Home 4</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop.html">shop</a>
                    <ul>
                      <li>
                        <a href="#">Shop Layouts</a>
                        <ul>
                          <li><a href="shop-fullwidth.html">Full Width</a></li>
                          <li>
                            <a href="shop-fullwidth-list.html"
                              >Full Width list</a
                            >
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">Right Sidebar </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar-list.html">
                              Right Sidebar list</a
                            >
                          </li>
                          <li><a href="shop-list.html">List View</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">other Pages</a>
                        <ul>
                          <li><a href="portfolio.html">portfolio</a></li>
                          <li>
                            <a href="portfolio-details.html"
                              >portfolio details</a
                            >
                          </li>
                          <li><a href="cart.html">cart</a></li>
                          <li><a href="checkout.html">Checkout</a></li>
                          <li><a href="my-account.html">my account</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Product Types</a>
                        <ul>
                          <li>
                            <a href="product-details.html">product details</a>
                          </li>
                          <li>
                            <a href="product-sidebar.html">product sidebar</a>
                          </li>
                          <li>
                            <a href="product-gallery.html">product gallery</a>
                          </li>
                          <li>
                            <a href="product-slider.html">product slider</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="blog.html">blog</a>
                    <ul>
                      <li>
                        <a href="#">Blog Layouts</a>
                        <ul>
                          <li><a href="blog-details.html">blog details</a></li>
                          <li><a href="blog-sidebar.html">blog Sidebar</a></li>
                          <li>
                            <a href="blog-fullwidth.html">blog fullwidth</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">blog Pages</a>
                        <ul>
                          <li><a href="#">Author</a></li>
                          <li><a href="blog-sidebar.html">Category</a></li>
                          <li><a href="#">Blog tag</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Post Formats</a>
                        <ul>
                          <li><a href="blog-sidebar.html">blog sidebar</a></li>
                          <li>
                            <a href="blog-fullwidth.html">blog fullwidth</a>
                          </li>
                          <li>
                            <a href="blog-sidebar.html">Gallery Format</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">pages</a>
                    <ul>
                      <li><a href="about.html">About Us</a></li>
                      <li><a href="services.html">services</a></li>
                      <li><a href="faq.html">Frequently Questions</a></li>
                      <li><a href="login.html">login</a></li>
                      <li><a href="my-account.html">my account</a></li>
                      <li><a href="wishlist.html">Wishlist</a></li>
                      <li><a href="404.html">Error 404</a></li>
                      <li><a href="compare.html">Compare</a></li>
                      <li><a href="coming-soon.html">Coming soon</a></li>
                    </ul>
                  </li>
                  <li><a href="contact.html">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="contact_phone">
            <div class="contact_icone">
              <span class="pe-7s-headphones"></span>
            </div>
            <div class="contact_number">
              <p>Call Us:</p>
              <span>(92) 3038282952</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--header bottom end-->
</template>
