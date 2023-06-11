const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    // //-------- 1 methods
    // submitForm(event) {
    //   event.preventDefault(); // ne pas recharger la plage, lors qu'on sur le button qui se trouve dans le formulaire
    //   alert('submitted...');
    // },
    submitInput() {
      this.confirmName = this.name;
    },
    // //-------- 2 methods
    submitForm() {
      //  event.preventDefault(); // ne pas recharger la plage, lors qu'on sur le button qui se trouve dans le formulaire
      alert("submitted");
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    increment(num) {
      this.counter = this.counter + num;
    },
    decrement(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount("#events");
