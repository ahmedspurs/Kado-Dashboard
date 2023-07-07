import axios from "axios";

const state = {
  filters: [],
  session_url: "http://localhost:5000/api/v1/filters",
  addError: [],
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allFilters: (state) => {
    return state.filters;
  },
};

const actions = {
  async fetchFilters({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setFilters", response.data);
  },
  async addFilter({ commit, state }, data) {
    try {
      const response = await axios.post(state.session_url, data, state.config);
      if (response.data.success) {
        commit("newFilter", response.data);
        return true;
      } else {
        state.addError.push(response.data.message);
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateFilter({ commit, state }, payload) {
    try {
      // loader
      const { id, data } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        data,
        state.config
      );
      if (response.data.success) {
        commit("editFilter", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteFilter({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeFilter", id);
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
  setFilters: (state, filters) => {
    state.filters = filters;
  },
  newCategory: (state, data) => {
    state.filters.unshift(data);
  },
  removeFilter: (state, id) => {
    let index = null;
    state.filters.forEach((element) => {
      if (element.id == id) {
        index = state.filters.indexOf(element);
        if (index > -1) {
          state.filters.splice(index, 1);
        }
      }
    });
  },
  editFilter: (state, data) => {
    state.filters.forEach((element) => {
      if (element.id == data.id) {
        element = data.data;
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
