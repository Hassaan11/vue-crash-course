<template>
  <div class="container mt-5">
    <div class="row text-center d-flex justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-lg">
          <div class="card-header p-0">
            <p class="h3 bg-success text-white m-0">Sign in</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="signin()">
              <div class="mb-2">
                <input
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div class="mb-2">
                <input
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <div class="mb-2">
                <input type="submit" value="Sign in" class="btn btn-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  data: function () {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    signin: function () {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      let find = users?.find(
        (u) => u.email === this.user.email && u.password === this.user.password
      );
      if (find) {
        localStorage.setItem("user", JSON.stringify(find));
        this.$emit("update-status", { isLoggedIn: true });
        this.$router.push("/");
      } else {
        alert("Invalid Credentials");
      }
    },
  },
};
</script>

<style scoped></style>
