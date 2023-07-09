import axios from "axios";

const state = {
  secondaryCategories: [],
  session_url: "http://localhost:5000/api/v1/secondary",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allSecondaryCategories: (state) => {
    return state.secondaryCategories;
  },
};

const actions = {
  async fetchSecondaryCategories({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setSecondaryCategories", response.data);
  },
  async addSecondaryCategory({ commit, state }, secondaryCategory) {
    try {
      const response = await axios.post(
        state.session_url,
        secondaryCategory,
        state.config
      );
      if (response.data.success) {
        commit("newSecondaryCategory", response.data);
        return true;
      } else {
        state.addError.push(response.data.message);
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateSecondaryCategory({ commit, state }, payload) {
    try {
      // loader
      const { id, secondaryCategory } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        secondaryCategory,
        state.config
      );
      if (response.data.success) {
        commit("editSecondaryCategory", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteSecondaryCategory({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeSecondaryCategory", id);
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
  setSecondaryCategories: (state, secondaryCategories) => {
    state.secondaryCategories = secondaryCategories;
  },
  newSecondaryCategory: (state, secondaryCategory) => {
    state.secondaryCategories.unshift(secondaryCategory);
  },
  removeSecondaryCategory: (state, id) => {
    let index = null;
    state.secondaryCategories.forEach((element) => {
      if (element.id == id) {
        index = state.secondaryCategories.indexOf(element);
        if (index > -1) {
          state.secondaryCategories.splice(index, 1);
        }
      }
    });
  },
  editSecondaryCategory: (state, data) => {
    state.secondaryCategories.forEach((element) => {
      if (element.id == data.id) {
        element = data.secondaryCategory;
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
