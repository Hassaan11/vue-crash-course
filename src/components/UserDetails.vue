<template>
  <!-- v-if check true then display -->
  <div class="container mt-3">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">User Details</p>
        <p class="fst-italic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi eaque
          distinctio architecto recusandae voluptates totam aliquid magni odio,
          repellendus quos id incidunt deserunt ipsam! A illo ex magni maxime
          reiciendis!
        </p>
      </div>
    </div>
    <div v-if="currentUser" class="row">
      <div class="col">
        <ul class="list-group">
          <li class="list-group-item">
            Name : <span class="fw-bold">{{ currentUser.name }}</span>
          </li>
          <li class="list-group-item">
            Email : <span class="fw-bold">{{ currentUser.email }}</span>
          </li>
          <li class="list-group-item">
            Phone Number : <span class="fw-bold">{{ currentUser.phone }}</span>
          </li>
        </ul>
      </div>
    </div>

    <CounterComponent
      :user="this.user"
      v-if="this.$route.params.userId == this.user.id"
    />

    <div class="row mt-3">
      <div class="col">
        <router-link class="btn btn-success" to="/users">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
import CounterComponent from "@/components/Counter";
export default {
  name: "UserDetails",
  components: { CounterComponent },
  props: ["user"],
  data: function () {
    return {
      loading: false,
      currentUser: {},
    };
  },
  created: async function () {
    try {
      let userId = this.$route.params.userId;
      this.loading = true;
      if (userId <= 10) {
        let res = await (await UserService.getUser(userId)).json();
        this.loading = false;
        this.currentUser = res;
      } else {
        let res = await UserService.getNewUser(userId);
        this.loading = false;
        this.currentUser = res;
      }
    } catch (error) {
      this.loading = false;
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
