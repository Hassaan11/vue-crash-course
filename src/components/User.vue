<template>
  <!-- v-if check true then display -->
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">User List</p>

        <p class="fst-italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
          distinctio architecto recusandae voluptates totam aliquid magni odio,
          repellendus quos id incidunt deserunt ipsam! A illo ex magni maxime
          reiciendis!
        </p>
      </div>
      <div v-if="loading">Loading...</div>
      <div v-if="errorMessage">
        <p class="fw-bold text-danger">{{ errorMessage }}</p>
      </div>
      <div class="row" v-if="!loading && allUsers.length > 0">
        <div class="col">
          <table class="table table-hover text-center table-striped">
            <thead class="bg-light">
              <tr>
                <th>Sno</th>
                <th>Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Website</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in allUsers" :key="user.id">
                <td>{{ user.id }}</td>
                <td>
                  <router-link
                    class="text-decoration-none fw-bold text-success"
                    :to="'/users/' + user.id"
                    >{{ user.name }}</router-link
                  >
                </td>
                <td>{{ user.email }}</td>
                <td>{{ user?.company?.name || "-" }}</td>
                <td>{{ user?.website || "-" }}</td>
                <td>{{ user?.address?.city || "-" }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
export default {
  name: "UserComponent",
  data: function () {
    return {
      loading: false,
      allUsers: [],
      errorMessage: null,
    };
  },
  created: async function () {
    /*
     The created hook is called before the component is mounted and is suitable for initialization tasks,
     while the mounted hook is called after the component is mounted and is useful for DOM-related operations and interacting with the component in its fully rendered state.
    */
    let newUsers = JSON.parse(localStorage.getItem("users")) || [];

    try {
      this.loading = true;
      let res = await (await UserService.getUsers()).json();
      this.loading = false;
      this.allUsers = [...newUsers, ...res];
    } catch (error) {
      this.loading = false;
      this.errorMessage = error;
    }
  },
};
</script>

<style scoped></style>
