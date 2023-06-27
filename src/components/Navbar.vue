<template>
  <nav class="navbar navbar-dark bg-success navbar-expand-sm">
    <div class="container">
      <router-link class="navbar-brand" to="/">Vue Router</router-link>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/users">Users</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link px-3" to="/about">About</router-link>
          </li>
        </ul>

        <ul class="navbar-nav" style="margin-left: auto">
          <div class="d-flex" v-if="!isLoggedIn">
            <li class="nav-item">
              <router-link class="nav-link px-3" to="/register"
                >Register</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-3" to="/login"
                >Sign In</router-link
              >
            </li>
          </div>
          <div class="d-flex" v-if="isLoggedIn">
            <li class="nav-item">
              <button class="btn btn-default text-white" @click="logout()">
                Logout
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavbarComponent",
  props: { isLoggedIn: { type: Boolean, required: true } },
  methods: {
    logout: function () {
      this.$emit("update-status", { isLoggedIn: false });
      localStorage.removeItem("user");
      window.location.href = "/";
    },
  },
};
</script>

<style scoped></style>
