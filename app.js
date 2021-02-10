"use strict"

const app = Vue.createApp({
  // template: '<h2>Hey</h2>'
  data() {
    return {
      showTitle: true,
      title: 'The dynamic title',
      author: 'an author name',
      age: 20,
    }
  },
  methods: {
    changeTitle() {
      this.title = "bla blik bak";
    },
    toggleTitleVisibility() {
      this.showTitle = !this.showTitle;
    }
  }
});

app.mount('#app')