<template>
  <div
    class="bg-gradient-to-r from-violet-100 to-violet-300 flex mb-2 rounded-md p-2 hover:scale-105 transition-all ease-in-out duration-300"
  >
    <div class="w-16 mr-3 rounded-md overflow-hidden">
      <div
        v-if="!album.image[1]['#text']"
        class="h-16 rounded-md hover:scale-110 transition-all ease-in-out duration-300 bg-slate-500"
      ></div>
      <img
        v-else
        loading="lazy"
        class="h-full rounded-md hover:scale-110 transition-all ease-in-out duration-300 bg-slate-500"
        :src="album.image[1]['#text']"
        :alt="album.name"
        width="64"
        height="64"
      />
    </div>
    <div class="flex flex-col justify-between">
      <p class="dark:text-white font-bold">{{ album.name }}</p>
      <p class="dark:text-white">{{ album.artist }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlbumCard",
  props: ["album"],
  watch: {
    album() {
      console.log(this.album);
    },
  },
};
</script>

<style></style>
