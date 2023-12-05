<script setup>
import { ref, reactive } from "vue";
import Breadcrumbs from "../../components/BreadCrumbs.vue";
import Login from "../../components/auth/AuthLogin.vue";

let name = ref("");
let errors = reactive({ message: [] });
let loading = ref(false);
let customer = reactive({
  name: "test",
  email: "test2@tesddt.cosm",
  phone_number: "123242343",
  password: "admin12345",
  password_confirmation: "admin12345",
});
console.log(name.value);
async function registerCustomer() {
  alert(customer);
  loading.value = true;
  errors.message = [];
  // if (customer.name == "") {
  //   errors.message.push("Name are required");
  // }
  // if (customer.email == "") {
  //   errors.message.push("Email are required");
  // }
  // if (customer.phoneNumber == "") {
  //   errors.message.push("Phone Number are required");
  // }
  // if (customer.address == "") {
  //   errors.message.push("Adsress are required");
  // }
  // if (customer.password == "" || customer.password_confirmaton == "") {
  //   errors.message.push("Password fields are required");
  // }
  // if (customer.password != customer.password_confirmaton) {
  //   errors.message.push("Password fail");
  //   loading.value = false;
  //   return;
  // }
  if (
    customer.name
    // customer.email &&
    // customer.phoneNumber &&
    // customer.address &&
    // customer.password &&
    // customer.password_confirmaton
  ) {
    try {
      let response = await fetch("http://127.0.0.1:8000/api/registerr", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify(customer),
      });
      if (!response.ok) {
        let data = await response.json();
        for (let error in data.errors) {
          console.log("eee".error);
          errors.message.push(error);
        }

        // console.log(data.errors);
        console.log(errors.message);
      }
    } catch (error) {
      alert("eeeeeeeeeeee");
      loading.value = false;
    } finally {
      loading.value = false;
    }
  } else {
    loading.value = false;
    errors.message.push("check your fields correctly");
  }
}
</script>

<template>
  <!--breadcrumbs area start-->
  <Breadcrumbs />
  <!--breadcrumbs area end-->

  <!-- customer login start -->
  <div class="customer_login">
    <div class="container">
      <div class="row">
        <!--login area start-->
        <div class="col-lg-6 col-md-6">
          <div class="account_form login">
            <h2>login</h2>
            <form action="#">
              <p>
                <label>Username or email <span>*</span></label>
                <input type="text" />
              </p>
              <p>
                <label>Passwords <span>*</span></label>
                <input type="password" />
              </p>
              <div class="login_submit">
                <button type="submit">login</button>
                <label for="remember">
                  <input id="remember" type="checkbox" />
                  Remember me
                </label>
                <a href="#">Lost your password?</a>
              </div>
            </form>
          </div>
        </div>
        <!--login area start-->

        <!--register area start-->
        <div class="col-lg-6 col-md-6">
          <div class="account_form register">
            <h2>Register</h2>
            <form @submit.prevent="registerCustomer">
              <p>
                <label>Name<span>*</span></label>
                <input type="text" v-model="customer.name" />
              </p>
              <p>
                <label>Email address <span>*</span></label>
                <input type="email" v-model="customer.email" />
              </p>
              <p>
                <label>Phine number <span>*</span></label>
                <input type="phone" v-model="customer.phoneNumber" />
              </p>
              <p>
                <label>Address <span>*</span></label>
                <textarea rows="3" v-model="customer.address"></textarea>
              </p>
              <p>
                <label>Passwords <span>*</span></label>
                <input type="password" v-model="customer.password" />
              </p>
              <p>
                <label>Confirm password <span>*</span></label>
                <input
                  type="password_confirmaton"
                  v-model="customer.password_confirmaton"
                />
              </p>
              <span v-if="errors.message">
                <p
                  class="text-danger"
                  v-for="error in errors.message"
                  :key="error"
                >
                  {{ error }}
                </p>
              </span>
              <div v-show="!loading" class="login_submit">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
        <!--register area end-->
      </div>
    </div>
  </div>
  <!-- customer login end -->
</template>
