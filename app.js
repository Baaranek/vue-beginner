"use strict"

const app = Vue.createApp({
  // template: '<h2>Hey</h2>'
  data() {
    return {
      title: 'The dynamic title',
      author: 'an author name',
    }
  }
});

app.mount('#app')