import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      items: ["Go cycling", "Xmas shopping"],
      newItem: ''
    },
    methods: {
      saveNewItem: function(){
          let itemObject = {name: this.newItem, purchased: false}
          this.items.push(itemObject)
          this.newItem = ""
      }
    }
  });
});
