<template>
  <div class="container mt-5">
    <div class="row text-center d-flex justify-content-center">
      <div class="col-md-8">
        <div class="card shadow-lg">
          <div class="card-header p-0">
            <p class="h3 bg-success text-white m-0">Register Here</p>
          </div>
          <div class="card-body bg-light">
            <form @submit.prevent="register()">
              <div class="mb-2">
                <input
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  placeholder="Enter Name"
                />
              </div>
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
                  v-model="user.phone"
                  type="text"
                  class="form-control"
                  placeholder="Enter Phone"
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
                <input type="submit" value="Register" class="btn btn-success" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
export default {
  name: "RegisterComponent",
  data: function () {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        phone: "",
      },
    };
  },
  props: ["isLoggedIn"],
  methods: {
    register: function () {
      let users = JSON.parse(localStorage.getItem("users")) || [];

      if (
        this.user.name &&
        this.user.email &&
        this.user.phone &&
        this.user.password
      ) {
        let exists = users?.find((u) => {
          if (u.email === this.user.email) {
            return u;
          }
        });
        if (!exists) {
          users.push({
            id: users.length + 11,
            name: this.user.name,
            email: this.user.email,
            phone: this.user.phone,
            password: this.user.password,
          });
          localStorage.setItem("users", JSON.stringify(users));
          toast.success("Registered Successfully", {
            autoClose: 1000,
            position: toast.POSITION.TOP_RIGHT,
          });
          this.$router.push("/login");
        }
        if (exists) {
          toast.error("User with this email already exists", {
            autoClose: 1000,
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      } else {
        toast.error("Please fill all the fields", {
          autoClose: 1000,
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    },
  },
};
</script>

<style scoped></style>
