import axios from "axios";

const state = {
  messages: [],
  session_url: "http://localhost:5000/api/v1/messages",
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allMessages: (state) => {
    return state.messages;
  },
};

const actions = {
  async fetchMessages({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setMessages", response.data);
  },
  async deleteMessage({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeMessage", id);
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
  setMessages: (state, messages) => {
    state.messages = messages;
  },
  removeMessage: (state, id) => {
    let index = null;
    state.messages.forEach((element) => {
      if (element.id == id) {
        index = state.messages.indexOf(element);
        if (index > -1) {
          state.messages.splice(index, 1);
        }
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
