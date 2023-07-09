import axios from "axios";

const state = {
  users: [],
  session_url: "http://localhost:5000/api/v1/users",
  login_url: "http://localhost:5000/api/v1/auth/adminlogin",
  register_url: "http://localhost:5000/api/v1/auth/register",
  logout_url: "http://localhost:5000/api/v1/auth/logout",
  token: null,
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allUsers: (state) => {
    return state.users;
  },
};

const actions = {
  async login({ commit, state }, user) {
    try {
      const response = await axios.post(state.login_url, user);
      localStorage.setItem("user_token", response.data.token);
      commit("loginUser", response.data);
    } catch (err) {
      commit("loginUser", err.response.data);
    }
  },
  async register({ commit, state }, user) {
    try {
      const response = await axios.post(state.register_url, user, state.config);
      if (response.data.success) {
        commit("registerUser", response.data);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      commit("registerUser", err.response.data);
      return false;
    }
  },
  async logout({ commit, state }) {
    try {
      const response = await axios.get(state.logout_url, state.config);
      localStorage.removeItem("user_token");
      commit("logoutUser", response.data);
    } catch (err) {
      commit("logoutUser", err.response.data);
    }
  },
  async fetchUsers({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setUsers", response.data);
  },
  async updateUser({ commit, state }, payload) {
    try {
      const { id, user } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        user,
        state.config
      );
      if (response.data.success) {
        commit("editUser", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteUser({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      let index = null;
      state.users.forEach((element) => {
        if (element.id == id) {
          index = state.users.indexOf(element);
          if (index > -1) {
            state.users.splice(index, 1);
          }
        }
      });
      if (response.data.success) {
        commit("removeUser", id);
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
  setUsers: (state, users) => {
    state.users = users;
  },
  newUser: (state, user) => {
    state.users.unshift(user);
  },
  loginUser: (state, user) => {
    if (user.success == true) {
      state.token = user.token;
    }
  },
  registerUser: (state, data) => {
    if (data.success == true) {
      state.users.unshift(data.user);
    }
  },
  logoutUser: (state, data) => {
    if (data.success == true) {
      state.token = null;
    }
  },
  removeUser: (state, id) => {
    let index = null;
    state.users.forEach((element) => {
      if (element.id == id) {
        index = state.users.indexOf(element);
        if (index > -1) {
          state.users.splice(index, 1);
        }
      }
    });
  },
  editUser: (state, data) => {
    state.users.forEach((element) => {
      if (element.id == data.id) {
        element = data.user;
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
