import axios from "axios";

const state = {
  deliveries: [],
  session_url: "http://localhost:5000/api/v1/deliveries",
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allDeliveries: (state) => {
    return state.deliveries;
  },
};

const actions = {
  async fetchDeliveries({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setDeliveries", response.data);
  },
  async addDelivery({ commit, state }, delivery) {
    try {
      const response = await axios.post(
        state.session_url,
        delivery,
        state.config
      );
      if (response.data.success) {
        commit("newDelivery", response.data);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateDelivery({ commit, state }, payload) {
    try {
      const { id, delivery } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        delivery,
        state.config
      );
      if (response.data.success) {
        commit("editDelivery", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteDelivery({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeDelivery", id);
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
  setDeliveries: (state, deliveries) => {
    state.deliveries = deliveries;
  },
  newDelivery: (state, delivery) => {
    state.deliveries.unshift(delivery);
  },
  removeDelivery: (state, id) => {
    let index = null;
    state.deliveries.forEach((element) => {
      if (element.id == id) {
        index = state.deliveries.indexOf(element);
        if (index > -1) {
          state.deliveries.splice(index, 1);
        }
      }
    });
  },
  editDelivery: (state, data) => {
    state.deliveries.forEach((element) => {
      if (element.id == data.id) {
        element = data.delivery;
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
