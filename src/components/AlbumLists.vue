<template>
  <div>
    <ul>
      <AlbumCard v-for="album in albumList" :key="album.url" :album="album" />
    </ul>
    <p v-if="lastKeyword && !hasAlbum">
      "{{ lastKeyword }}" 앨범이 존재하지 않습니다.
    </p>
    <TheTrigger @triggerIntersected="fetchAlbumList(keyword)" />
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
import TheTrigger from "./TheTrigger.vue";

import axios from "axios";

export default {
  name: "AlbumLists",
  data() {
    return {
      page: 0,
      albumList: [],
      lastKeyword: "",
      isFetching: false,
      hasAlbum: true,
    };
  },
  methods: {
    resetAlbumList() {
      this.lastKeyword = "";
      this.albumList = [];
    },
    toggleFetchStatus() {
      this.isFetching = !this.isFetching;
    },
    async fetchAlbumList(keyword) {
      if (!keyword) return;
      if (keyword !== this.lastKeyword) {
        this.page = 0;
        this.albumList = [];
        this.lastKeyword = keyword;
      }
      this.page += 1;
      const LAST_FM_ALBUM_SEARCH_URL = "https://ws.audioscrobbler.com/2.0/";
      const API_KEY = "532a93b709dc0a84f67fae3ecaa6a3a6";
      const params = {
        method: "album.search",
        api_key: API_KEY,
        album: keyword,
        format: "json",
        page: this.page,
        limit: 20,
      };
      this.toggleFetchStatus();
      const response = await axios.get(LAST_FM_ALBUM_SEARCH_URL, { params });
      this.toggleFetchStatus();
      const albums = response.data.results.albummatches.album;
      this.albumList = [...this.albumList, ...albums];
      this.checkAlbumLength();
    },
    checkAlbumLength() {
      this.hasAlbum = this.albumList.length;
    },
  },
  computed: {
    keyword() {
      return this.$store.state.keyword;
    },
  },
  watch: {
    keyword() {
      if (!this.keyword.trim()) return this.resetAlbumList();
      this.fetchAlbumList(this.keyword);
    },
  },
  components: {
    AlbumCard,
    TheTrigger,
  },
};
</script>

<style></style>
