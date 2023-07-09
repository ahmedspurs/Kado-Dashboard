import axios from "axios";

const state = {
  orders: [],
  session_url: "/api/v1/orders",
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allOrders: (state) => {
    return state.orders;
  },
};

const actions = {
  async fetchOrders({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setOrders", response.data);
  },
  async updateOrder({ commit, state }, payload) {
    try {
      const { id, order } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        order,
        state.config
      );
      if (response.data.success) {
        commit("editOrder");
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteOrder({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeOrder", id);
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
  setOrders: (state, orders) => {
    state.orders = orders;
  },
  removeOrder: (state, id) => {
    let index = null;
    state.orders.forEach((element) => {
      if (element.id == id) {
        index = state.orders.indexOf(element);
        if (index > -1) {
          state.orders.splice(index, 1);
        }
      }
    });
  },
  editOrder: (state) => {
    console.log(state.orders);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
