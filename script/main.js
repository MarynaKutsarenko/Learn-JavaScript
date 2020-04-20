'use strict';

const todoControl = document.querySelector('.todo-control'),
      headerInput = document.querySelector('.header-input'),
      todoList = document.querySelector('.todo-list'),
      todoCompleted = document.querySelector('.todo-completed'),
      headerButton = document.querySelector('.header-button'),
      addHeaderButton = document.getElementById('add');

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
      const btnTodoRemove = li.querySelector('.todo-remove');
        btnTodoRemove.addEventListener('click', function(){
          const itemDelet = item.value;
          itemDelet.remove(item);
        });

  });
};

todoControl.addEventListener('submit', function(event){
  event.preventDefault();
  const newTodo = {
    value: headerInput.value,
    completed: false
  };

  todoData.push(newTodo);
  headerInput.value = '';
  localStorage.setItem('newTodo', JSON.stringify(todoData));
  render();
});

render();
// if (headerInput.value !== '' ) {
//   addHeaderButton.setAttribute('disabled', 'disabled');
// } else {
//   addHeaderButton.removeAttribute('disabled');
// }
  // document.addEventListener('keyup', function(event){
  //   if (event.keyCode === 13) {
  //     todoData.push(newTodo);
  //     render();
  //     headerInput.value = '';
  //   }
  // });
  // addHeaderButton.setAttribute('disabled', 'disabled');
// const blockInput = function(){
//   const hederInput = document.querySelectorAll('.todoControl[type=text]')[0];
//     addHeaderButton.setAttribute('disabled', 'disabled');
//     if (hederInput === '') {
//       addHeaderButton.setAttribute('disabled', 'disabled');
//     } else {
//       addHeaderButton.removeAttribute('disabled');
//     }
// };
// blockInput();