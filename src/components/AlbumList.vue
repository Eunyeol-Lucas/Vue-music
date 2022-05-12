<template>
  <div>
    <ul>
      <AlbumCard v-for="album in albumList" :key="album.url" :album="album" />
    </ul>
    <template v-if="isFetching">
      <div
        class="animate-pulse bg-gradient-to-r from-violet-100 to-violet-300 flex mb-2 rounded-md p-2"
        v-for="index in 10"
        :key="index"
      >
        <div class="w-16 h-16 bg-slate-400 mr-3 rounded-md"></div>
        <div class="w-full flex flex-col justify-between">
          <p class="w-4/6 h-3 bg-slate-400 rounded-md"></p>
          <p class="w-3/12 h-3 bg-slate-400 rounded-md"></p>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import AlbumCard from "./AlbumCard.vue";
export default {
  name: "AlbumList",

  components: {
    AlbumCard,
  },
  computed: {
    albumList() {
      return this.$store.state.albumList;
    },
    isFetching() {
    
      return this.$store.state.isFetching;
    },
  },
};
</script>

<style></style>
