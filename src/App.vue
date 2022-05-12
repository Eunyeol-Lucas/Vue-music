<template>
  <div>
    <div class="max-w-xl mx-auto my-10 px-10 relative">
      <SearchForm />
      <AlbumLists />
      <DarkModeButton />
    </div>
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue";
import AlbumLists from "./components/AlbumLists.vue";
import DarkModeButton from "./components/DarkModeButton.vue";

export default {
  name: "App",
  components: {
    SearchForm,
    AlbumLists,
    DarkModeButton,
  },
  created() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
};
</script>

<style></style>
