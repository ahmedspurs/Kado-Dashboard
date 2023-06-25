import axios from "axios";

const state = {
  subCategories: [],
  session_url: "/api/v1/subcategories",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allSubCategories: (state) => {
    return state.subCategories;
  },
};

const actions = {
  async fetchSubCategories({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setSubCategories", response.data);
  },
  async addSubCategory({ commit, state }, subCategory) {
    try {
      const response = await axios.post(
        state.session_url,
        subCategory,
        state.config
      );
      if (response.data.success) {
        commit("newSubCategory", response.data);
        return true;
      } else {
        state.addError.push(response.data.message);
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateSubCategory({ commit, state }, payload) {
    try {
      // loader
      const { id, subCategory } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        subCategory,
        state.config
      );
      if (response.data.success) {
        commit("editSubCategory", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteSubCategory({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeSubCategory", id);
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
  setSubCategories: (state, subCategories) => {
    state.subCategories = subCategories;
  },
  newSubCategory: (state, subCategory) => {
    state.subCategories.unshift(subCategory);
  },
  removeSubCategory: (state, id) => {
    let index = null;
    state.subCategories.forEach((element) => {
      if (element.id == id) {
        index = state.subCategories.indexOf(element);
        if (index > -1) {
          state.subCategories.splice(index, 1);
        }
      }
    });
  },
  editSubCategory: (state, data) => {
    state.subCategories.forEach((element) => {
      if (element.id == data.id) {
        element = data.subCategory;
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
