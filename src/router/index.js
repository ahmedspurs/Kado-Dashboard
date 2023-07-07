import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OrdersPage from "../views/OrdersPage.vue";
import ProductsPage from "../views/ProductsPage.vue";
import OrderDetails from "../views/OrderDetails.vue";
import EditProduct from "../views/EditProduct.vue";
import AddProduct from "../views/AddProduct.vue";
import CategoryPage from "../views/CategoryPage.vue";
import AddCategory from "../views/AddCategory.vue";
import EditCategory from "../views/EditCategory.vue";
import UsersPage from "../views/UsersPage.vue";
import AddUser from "../views/AddUser.vue";
import EditUser from "../views/EditUser.vue";
import MarketingPage from "../views/MarketingPage.vue";
import AddMarketing from "../views/AddMarketing.vue";
import EditMarketing from "../views/EditMarketing.vue";
import DeleveryPage from "../views/DeleveryPage.vue";
import CahngePassword from "../views/CahngePassword.vue";
import AddDelivery from "../components/AddDelivery/AddDelivery.vue";
import EditDelivery from "../components/EditDelivery/EditDelivery.vue";
import AddSubCategory from "../components/AddSubCategory/AddSubCategory.vue";
import EditSubCategory from "../components/EditSubCategory/EditSubCategory.vue";
import SubCategoryPage from "../views/SubCategoryPage.vue";
import MessagesPage from "../views/MessagesPage.vue";
import FiltersPage from "../views/FiltersPage.vue";
import AddFilter from "../views/AddFilter.vue";
import EditFilter from "../views/EditFilter.vue";
import BrandsPage from "../views/BrandsPage.vue";
import AddBrand from "../views/AddBrand.vue";
import EditBrand from "../views/EditBrand.vue";
import SecondaryCategory from "../views/SecondaryCategory.vue";
import AddSecondaryCategory from "../views/AddSecondaryCategory.vue";
import EditSecondaryCategory from "../views/EditSecondaryCategory.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },

  {
    path: "/OrdersPage",
    name: "OrdersPage",
    component: OrdersPage,
  },
  {
    path: "/OrderDetails/:id",
    name: "OrderDetails",
    component: OrderDetails,
  },
  {
    path: "/ProductsPage",
    name: "ProductsPage",
    component: ProductsPage,
  },
  {
    path: "/CategoryPage",
    name: "CategoryPage",
    component: CategoryPage,
  },
  {
    path: "/AddProduct",
    name: "AddProduct",
    component: AddProduct,
  },
  {
    path: "/AddCategory",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/EditCategory/:id",
    name: "EditCategory",
    component: EditCategory,
  },
  {
    path: "/EditProduct/:id",
    name: "EditProduct",
    component: EditProduct,
  },
  {
    path: "/UsersPage",
    name: "UsersPage",
    component: UsersPage,
  },
  {
    path: "/AddUser",
    name: "AddUser",
    component: AddUser,
  },
  {
    path: "/EditUser/:id",
    name: "EditUser",
    component: EditUser,
  },
  {
    path: "/DeleveryPage",
    name: "DeleveryPage",
    component: DeleveryPage,
  },
  {
    path: "/CahngePassword/:id",
    name: "CahngePassword",
    component: CahngePassword,
  },
  {
    path: "/AddDelivery",
    name: "AddDelivery",
    component: AddDelivery,
  },
  {
    path: "/MarketingPage",
    name: "MarketingPage",
    component: MarketingPage,
  },
  {
    path: "/AddMarketing",
    name: "AddMarketing",
    component: AddMarketing,
  },
  {
    path: "/EditMarketing",
    name: "EditMarketing",
    component: EditMarketing,
  },
  {
    path: "/EditDelivery/:id",
    name: "EditDelivery",
    component: EditDelivery,
  },
  {
    path: "/MessagesPage",
    name: "MessagesPage",
    component: MessagesPage,
  },
  {
    path: "/AddSubCategory",
    name: "AddSubCategory",
    component: AddSubCategory,
  },
  {
    path: "/SubCategoryPage",
    name: "SubCategoryPage",
    component: SubCategoryPage,
  },
  {
    path: "/AddSubCategory",
    name: "AddSubCategory",
    component: AddSubCategory,
  },
  {
    path: "/EditSubCategory",
    name: "EditSubCategory",
    component: EditSubCategory,
  },

  {
    path: "/FiltersPage",
    name: "FiltersPage",
    component: FiltersPage,
  },
  {
    path: "/AddFilter",
    name: "AddFilter",
    component: AddFilter,
  },
  {
    path: "/EditFilter",
    name: "EditFilter",
    component: EditFilter,
  },
  {
    path: "/BrandsPage",
    name: "BrandsPage",
    component: BrandsPage,
  },
  {
    path: "/EditBrand",
    name: "EditBrand",
    component: EditBrand,
  },
  {
    path: "/AddBrand",
    name: "AddBrand",
    component: AddBrand,
  },
  {
    path: "/SecondaryCategory",
    name: "SecondaryCategory",
    component: SecondaryCategory,
  },
  {
    path: "/AddSecondaryCategory",
    name: "AddSecondaryCategory",
    component: AddSecondaryCategory,
  },
  {
    path: "/EditSecondaryCategory",
    name: "EditSecondaryCategory",
    component: EditSecondaryCategory,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
