import axios from "axios";

const state = {
  categories: [],
  session_url: "/api/v1/categories",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allCategories: (state) => {
    return state.categories;
  },
};

const actions = {
  async fetchCategories({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setCategories", response.data);
  },
  async addCategory({ commit, state }, category) {
    try {
      const response = await axios.post(
        state.session_url,
        category,
        state.config
      );
      if (response.data.success) {
        commit("newCategory", response.data);
        return true;
      } else {
        state.addError.push(response.data.message);
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateCategory({ commit, state }, payload) {
    try {
      // loader
      const { id, category } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        category,
        state.config
      );
      if (response.data.success) {
        commit("editCategory", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteCategory({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeCategory", id);
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
  setCategories: (state, categories) => {
    state.categories = categories;
  },
  newCategory: (state, category) => {
    state.categories.unshift(category);
  },
  removeCategory: (state, id) => {
    let index = null;
    state.categories.forEach((element) => {
      if (element.id == id) {
        index = state.categories.indexOf(element);
        if (index > -1) {
          state.categories.splice(index, 1);
        }
      }
    });
  },
  editCategory: (state, data) => {
    state.categories.forEach((element) => {
      if (element.id == data.id) {
        element = data.category;
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
