import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    albumList: [],
    isFetching: false,
    keyword: "",
  },
  getters: {},
  mutations: {
    updateAlbumList(state, albumList) {
      state.albumList = albumList;
    },
    toggleFetchingStatus(state) {
      state.isFetching = !state.isFetching;
    },
    setKeyWord(state, keyword) {
      state.keyword = keyword;
    },
  },
  actions: {
    async fetchAlbums(context, keyword) {
      if (!keyword) {
        return context.commit("updateAlbumList", []);
      }
      const LAST_FM_ALBUM_SEARCH_URL = "https://ws.audioscrobbler.com/2.0/";
      const API_KEY = "532a93b709dc0a84f67fae3ecaa6a3a6";
      const params = {
        method: "album.search",
        api_key: API_KEY,
        album: keyword,
        format: "json",
      };
      context.commit("toggleFetchingStatus");
      const response = await axios.get(LAST_FM_ALBUM_SEARCH_URL, { params });
      context.commit("toggleFetchingStatus");
      const albumList = response.data.results.albummatches.album;
      console.log(albumList);
      context.commit("updateAlbumList", albumList);
    },
  },
});
