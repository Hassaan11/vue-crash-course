<template>
  <NavbarComponent :isLoggedIn="isLoggedIn" />
  <router-view
    :isLoggedIn="isLoggedIn"
    @update-status="updateStatus"
    :user="user"
  />
  <!-- <CustomerComponent name="Hassaan" age="23" designation="SE" />
    <EmployeeComponent />
    <CounterComponent /> -->
</template>

<script>
import NavbarComponent from "@/components/Navbar";
// import CustomerComponent from "@/components/Customer";
// import EmployeeComponent from "@/components/Employee";
// import CounterComponent from "@/components/Counter";

export default {
  components: {
    // CustomerComponent,
    // EmployeeComponent,
    // CounterComponent,
    NavbarComponent,
  },
  data: function () {
    return {
      isLoggedIn: false,
      user: {},
    };
  },
  methods: {
    updateStatus(status) {
      this.isLoggedIn = status.isLoggedIn;
    },
  },
  mounted: function () {
    this.user = JSON.parse(localStorage.getItem("user")) || {};
    this.isLoggedIn = Object.keys(this.user).length === 0 ? false : true;
  },
};
</script>

<style>
@import "./styles.css";
</style>
