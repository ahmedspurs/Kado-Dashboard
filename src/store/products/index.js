import axios from "axios";

const state = {
  products: [],
  session_url: "http://localhost:5000/api/v1/products",
  config: {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("user_token"),
    },
  },
};

const getters = {
  allProducts: (state) => {
    return state.products;
  },
};

const actions = {
  async fetchProducts({ commit, state }) {
    const response = await axios.get(state.session_url, state.config);
    commit("setProducts", response.data);
  },
  async addProduct({ commit, state }, product) {
    try {
      const response = await axios.post(
        state.session_url,
        product,
        state.config
      );
      if (response.data.success) {
        commit("newProduct", response.data);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async updateProduct({ commit, state }, payload) {
    try {
      const { id, product } = payload;
      const response = await axios.put(
        `${state.session_url}/${id}`,
        product,
        state.config
      );
      if (response.data.success) {
        commit("editProduct", payload);
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  },
  async deleteProduct({ commit, state }, id) {
    try {
      const response = await axios.delete(
        `${state.session_url}/${id}`,
        state.config
      );
      if (response.data.success) {
        commit("removeProduct", id);
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
  setProducts: (state, products) => {
    state.products = products;
  },
  newProduct: (state, product) => {
    state.products.unshift(product);
  },
  removeProduct: (state, id) => {
    let index = null;
    state.products.forEach((element) => {
      if (element.id == id) {
        index = state.products.indexOf(element);
        if (index > -1) {
          state.products.splice(index, 1);
        }
      }
    });
  },
  editProduct: (state, data) => {
    state.products.forEach((element) => {
      if (element.id == data.id) {
        element = data.product;
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
