import axios from "axios";

const state = {
  brands: [],
  session_url: "http://localhost:5000/api/v1/brands",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allBrands: (state) => {
    return state.brands;
  },
};

const actions = {
  async fetchBrands({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setBrands", response.data);
  },
  async addBrand({ commit, state }, ad) {
    try {
      const response = await axios.post(state.session_url, ad, state.config);
      if (response.data.success) {
        commit("newBrand", response.data);
        return true;
      } else {
        state.addError.push(response.data.message);
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateBrand({ commit, state }, payload) {
    try {
      const { id, brand } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        brand,
        state.config
      );
      if (response.data.success) {
        commit("editBrand", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteBrand({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeBrand", id);
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
  setBrands: (state, brands) => {
    state.brands = brands;
  },
  newBrand: (state, brand) => {
    state.brands.unshift(brand);
  },
  removeBrand: (state, id) => {
    let index = null;
    state.brands.forEach((element) => {
      if (element.id == id) {
        index = state.brands.indexOf(element);
        if (index > -1) {
          state.brands.splice(index, 1);
        }
      }
    });
  },
  editBrand: (state, data) => {
    state.brands.forEach((element) => {
      if (element.id == data.id) {
        element = data.brand;
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
