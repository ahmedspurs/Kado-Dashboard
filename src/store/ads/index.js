import axios from "axios";

const state = {
  ads: [],
  session_url: "/api/v1/ads",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allAds: (state) => {
    return state.ads;
  },
};

const actions = {
  async fetchAds({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setAds", response.data);
  },
  async addAd({ commit, state }, ad) {
    try {
      const response = await axios.post(state.session_url, ad, state.config);
      if (response.data.success) {
        commit("newAd", response.data);
        return true;
      } else {
        state.addError.push(response.data.message);
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateAd({ commit, state }, payload) {
    try {
      const { id, ad } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        ad,
        state.config
      );
      if (response.data.success) {
        commit("editAd", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteAd({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeAd", id);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
};

const mutations = {
  setAds: (state, ads) => {
    state.ads = ads;
  },
  newAd: (state, ad) => {
    state.ads.unshift(ad);
  },
  removeAd: (state, id) => {
    let index = null;
    state.ads.forEach((element) => {
      if (element.id == id) {
        index = state.ads.indexOf(element);
        if (index > -1) {
          state.ads.splice(index, 1);
        }
      }
    });
  },
  editAd: (state, data) => {
    state.ads.forEach((element) => {
      if (element.id == data.id) {
        element = data.ad;
      }
    });
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
