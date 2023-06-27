<template>
  <!-- v-if check true then display -->
  <div class="container mt-2">
    <div class="row">
      <div class="col-md-4 p-0">
        <div class="card shadow-lg">
          <div class="card-body">
            <p class="h3 display-3">{{ this.count }}</p>
            <button class="btn btn-success m-1" @click="inc()">
              Increment
            </button>
            <button
              class="btn btn-warning m-1"
              @click="dec()"
              :disabled="isDisabled()"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterComponent",
  props: {
    user: { type: Object },
  },
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    inc: function () {
      this.count = this.count + 1;
      localStorage.setItem(this.user.id, this.count);
    },
    dec: function () {
      this.count = this.count - 1;
      localStorage.setItem(this.user.id, this.count);
    },
    isDisabled: function () {
      return this.count === 0;
    },
  },
  created: function () {
    this.count = parseInt(localStorage.getItem(this.user.id)) || 0;
  },
};
</script>

<style scoped></style>
