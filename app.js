const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter: 0,
      name: '',
    }
  },
  methods:  {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;;
    },
  },
});

app.mount('#events');