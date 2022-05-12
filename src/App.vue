<template>
  <div>
    <div class="max-w-xl mx-auto my-10 px-10 relative">
      <SearchForm />
      <AlbumList />
      <DarkModeButton />
    </div>
  </div>
</template>

<script>
import SearchForm from "./components/SearchForm.vue";
import AlbumList from "./components/AlbumList.vue";
import DarkModeButton from "./components/DarkModeButton.vue";

export default {
  name: "App",
  components: {
    SearchForm,
    AlbumList,
    DarkModeButton,
  },
};
</script>

<style></style>
