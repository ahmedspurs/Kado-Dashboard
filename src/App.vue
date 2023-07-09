<template>
  <div v-if="user_session !== null">
    <div class="md:flex block">
      <app-header></app-header>
      <router-view />
    </div>
  </div>
  <div v-else>
    <login-page></login-page>
  </div>
</template>
<script>
import AppHeader from "./components/AppHeader.vue";
import LoginPage from "./views/LoginPage.vue";
import moment from "moment";

export default {
  data() {
    return {
      user_session: localStorage.getItem("user_token"),
    };
  },
  components: {
    AppHeader,
    LoginPage,
  },
  methods: {
    dateTime(value) {
      return moment(value).format("YYYY-MM-DD");
    },
    async checkCookie() {
      if (localStorage.getItem("user_token") === null) {
        this.responseAlert(" الرجاء تسجيل الدخول ", " عفوا ", "warning");
        this.$router.push("/LoginPage");
      }
    },
    // all response alert
    responseAlert(text, title, icon) {
      this.$swal.fire({
        title: `${title}`,
        text: ` ${text} `,
        icon: `${icon}`,
        toast: true,
        position: "top-start",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  },
  provide() {
    return {
      checkCookie: this.checkCookie,
      responseAlert: this.responseAlert,
      dateTime: this.dateTime,
    };
  },
  async created() {
    await this.checkCookie();
  },
};
</script>

<style></style>
