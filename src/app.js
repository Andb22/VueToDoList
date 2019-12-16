import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      todos: ["Go cycling", "Xmas shopping"],
      newTodoItem: ''
    },
    methods: {
      saveNewItem: function(){
        let itemObject = this.newTodoItem
          this.todos.push(itemObject)
          this.newTodoItem = ""
      }
    }
  });
});
