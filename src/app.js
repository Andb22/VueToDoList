import Vue from "vue";

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      todos: [{task: "Go cycling", priority: 'low'},
      {task: "Xmas shopping", priority: 'high'}],
      newTodoItem: ''
    },
    methods: {
      saveNewItem: function(){
        let itemObject = {task: this.newTodoItem, priority: 'high'}
          this.todos.push(itemObject)
          this.newTodoItem = ""
      }
    }
  });
});
