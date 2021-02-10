"use strict"

const app = Vue.createApp({
  // template: '<h2>Hey</h2>'
  data() {
    return {
      showBooks: true,
      url: 'https://www.google.com',
      books: [
        { id: 1, title: 'Title One', author: 'Joseph', age: 25, isFav: false },
        { id: 2, title: 'Title One', author: 'Joseph', age: 25, isFav: true },
        { id: 3, title: 'Title One', author: 'Joseph', age: 25, isFav: true },
      ]
    }
  },
  methods: {
    toggleTitleVisibility() {
      this.showBooks = !this.showBooks;
    },
    eventHandler(book){
      book.isFav = !book.isFav;
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book => book.isFav);
    }
  }
});

app.mount('#app')