import { createStore } from "vuex";
import categories from "./categories";
import subCategories from "./subcategories";
import products from "./products";
import users from "./users";
import deliveries from "./deliveries";
import orders from "./orders";
import ads from "./ads";
import messages from "./messages";
import filters from "./filters";
import brands from "./brands";
import secondaryCategories from "./secondaryCategories";
import stats from "./stats";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    categories,
    subCategories,
    products,
    users,
    deliveries,
    orders,
    ads,
    messages,
    filters,
    secondaryCategories,
    stats,
    brands,
  },
});
