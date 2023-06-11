const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter: 0,
    }
  },
  methods:  {
    increment() {
      this.counter++; // this.counter = this.counter + 1;
    },
    decrement() {
      this.counter--;
    },
  },
});

app.mount('#events');