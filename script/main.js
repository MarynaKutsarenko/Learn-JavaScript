document.addEventListener('DOMContentLoaded', function(){
'use strict';

  const todoControl = document.querySelector('.todo-control'),
    headerInput = document.querySelector('.header-input'),
    todoList = document.querySelector('.todo-list'),
    todoCompleted = document.querySelector('.todo-completed'),
    headerButton = document.querySelector('.header-button'),
    addHeaderButton = document.getElementById('add'),
    parrentItem = document.querySelector('.todo-item'),
    todoContainer = document.querySelector('.todo-container'),
    todoComplete = document.querySelector('.todo-completed');

  let  todoData = [];

    const render = function() {
      if (localStorage.getItem('newTodo')) {
      todoData = JSON.parse(localStorage.getItem('newTodo'));
      } else {
      todoData = [];
      }

      todoList.textContent = '';
      todoCompleted.textContent = '';

      todoData.forEach(function (item) {

        const li = document.createElement('li');
          li.classList.add('todo-item');
            li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
            '<div class="todo-buttons">' +
              '<button class="todo-remove"></button>' +
              '<button class="todo-complete"></button>' +
            '</div>';

          if (item.completed) {
            todoCompleted.append(li);
          } else {
            todoList.append(li);
          }

        const btnTodoComleted = li.querySelector('.todo-complete');
          btnTodoComleted.addEventListener('click', function(){
            item.completed = !item.completed;
              
            localStorage.setItem('newTodo', JSON.stringify(todoData));
            render();
          });

        const btnRemove = document.getElementsByClassName('todo-remove');
          btnRemove.addEventListener('click', function(event){
            btnRemove.forEach(elem, function () {
              
            });
            console.log(li);
            console.log(event.target);

          });
      });
    
    };

  todoControl.addEventListener('submit', function (event){
    event.preventDefault(); 

    const newTodo = {
      value: headerInput.value,
      completed: false
    };

    if (headerInput.value !== '' ) {
      addHeaderButton.removeAttribute('disabled');
      render(headerInput.value);
      todoData.push(newTodo);
    } else {
      alert('заполните поле'); 
    }

    headerInput.value = '';
    localStorage.setItem('newTodo', JSON.stringify(todoData));
    render();
    
  });
  render();
  
});


  // const itemRemove = function(li){
  //   const itemTodo = todoList;
  //   const itemCompleted = todoCompleted;
  //   console.log(itemTodo);
  //   console.log(itemCompleted);
  //   }

// const shouldRemov = localStorage.getItem('newTodo');
    // document.addEventListener('keyup', function(event){
  //   if (event.keyCode === 13) {
  //     todoData.push(newTodo);
  //     headerInput.value = '';
  //   }
  // });