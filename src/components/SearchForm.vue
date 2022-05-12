<template>
  <div>
    <header class="rotate-12">
      <h1
        class="text-center text-4xl text-violet-800 font-bold mb-3 tracking-wide"
      >
        VueSic Q
      </h1>
    </header>
    <form @submit.prevent class="relative mb-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 absolute text-violet-700 inset-y-1/4 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        class="bg-violet-50 rounded-full w-full px-10 py-3 focus:outline-none focus:bg-violet-100 text-violet-700 placeholder:text-violet-300 transition-colors"
        placeholder="찾고 싶은 앨범을 검색하세요."
        @input="onSearchDebounce"
      />
    </form>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "SearchForm",
  methods: {
    onSearchDebounce: _.debounce(function (e) {
      this.onSearch(e);
    }, 500),
    onSearch(event) {
      const keyword = event.target.value.trim();
      this.$store.dispatch("fetchAlbums", keyword);
    },
  },
};
</script>

<style scoped></style>
