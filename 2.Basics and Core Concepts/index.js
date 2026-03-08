const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods : {
    onAddCounter(){
        this.counter++
    },
    onReduceCounder(){
        this.counter
    }
  }
});

app.mount('#events');