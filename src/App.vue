<script setup>
import { RouterView } from "vue-router";
import HeaderArea from "./components/header/HeaderArea.vue";
import { onMounted } from "vue";

onMounted(() => {
  let jquery = document.createElement("script");
  jquery.setAttribute("src", "/src/assets/js/vendor/jquery-1.12.4.min.js");
  document.head.append(jquery);
  let popper = document.createElement("script");
  popper.setAttribute("src", "/src/assets/js/popper.js");

  document.head.append(popper);
  let bootstrapjs = document.createElement("script");
  bootstrapjs.setAttribute("src", "/src/assets/js/bootstrap.min.js");

  document.head.append(bootstrapjs);

  let plugins = document.createElement("script");
  plugins.setAttribute("src", "/src/assets/js/plugins.js");

  document.head.append(plugins);
  let mainjs = document.createElement("script");
  mainjs.setAttribute("src", "/src/assets/js/main.js");

  document.head.append(mainjs);
});
</script>

<template>
  <HeaderArea />

  <RouterView />
</template>
