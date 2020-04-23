document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.todo-control');
  const input = document.querySelector('.header-input');
  const todoList = document.getElementById('todo');
  const completedList = document.getElementById('completed');

  // обьект, который будет содержать данные
  let data = {
      todo: [],
      completed: []
  }

  // получаем данные из localstorage если они есть
  if (localStorage.getItem('todoList')) {
      data = JSON.parse(localStorage.getItem('todoList'))
  }

  // функция сохранения элемента в localStorage
  const dataObjectUpdated = () => {
      localStorage.setItem('todoList', JSON.stringify(data));
  }

  // функция отрисовывает элементы при загрузке страницы, если обьект не пустой
  const renderTodoList = () => {
      if (!data.todo.length && !data.completed.length) return;

      data.todo.forEach((item) => {
          renderItem(item);
      })

      data.completed.forEach((item) => {
          renderItem(item, true);
      })
  }

  // функция, которая добавляет данные в обьект и запускает рендер
  const addElement = (text) => {
      renderItem(text);
      input.value = '';
      data.todo.push(text);
      dataObjectUpdated();
  }

  // функция удаления
  const removeItem = function () {
      // получаем весь элемент li, которому принадлежит кликнутая кнопка, его родителя, id и текст элемента
      const item = this.parentNode.parentNode;
      const parent = item.parentNode;
      const id = parent.id;
      const text = item.textContent;

      // в зависимости от id контейнера - удаяем элемент из обьекта
      if (id === 'todo') {
          data.todo.splice(data.todo.indexOf(text), 1);
      } else {
          data.completed.splice(data.completed.indexOf(text), 1);
      }

      // сохраняем в localStorage
      dataObjectUpdated();

      // в зависимости от id контейнера - удаяем элемент со страницы
      parent.removeChild(item);
  }

  // функция выполнения
  const completeItem = function () {
      // получаем весь элемент li, которому принадлежит кликнутая кнопка, его родителя, id и текст элемента
      const item = this.parentNode.parentNode;
      const parent = item.parentNode;
      const id = parent.id;
      const text = item.textContent;
      let target;

      // определяем цель в которую будем перемещать элемент
      if (id === 'todo') {
          target = document.getElementById('completed');
      } else {
          target = document.getElementById('todo');
      }

      // в зависимости от id контейнера: если id=todo - перемещаем в completed, или наоборот
      if (id === 'todo') {
          data.todo.splice(data.todo.indexOf(text), 1);
          data.completed.push(text);
      } else {
          data.completed.splice(data.completed.indexOf(text), 1);
          data.todo.push(text);
      }

      // удаляем элемент со тсраницы из родителя и вставляем его в цель target
      parent.removeChild(item);
      target.insertBefore(item, target.childNodes[0]);

      // сохраняем в localStorage
      dataObjectUpdated();
  }

  // функция рендер
  const renderItem = (text, completed = false) => {
      let list;

      // определяем чем является лист
      if (completed) {
          list = completedList;
      } else {
          list = todoList
      }

      // создаем будущие элементы нашего Item
      const item = document.createElement('li');
      const buttons = document.createElement('div');
      const remove = document.createElement('button');
      const complete = document.createElement('button');

      // даем новым элементам классы
      item.className = 'todo-item';
      buttons.classList.add('todo-buttons');
      remove.classList.add('todo-remove');
      complete.classList.add('todo-complete');

      // заполняем текстом
      item.textContent = text;

      // вешаем обработчики
      remove.addEventListener('click', removeItem);
      complete.addEventListener('click', completeItem);

      // собираем блок buttons и после блок Item
      buttons.appendChild(remove);
      buttons.appendChild(complete);
      item.appendChild(buttons);

      // добавляем на страницу
      list.insertBefore(item, list.childNodes[0]);
  }

  // вешаем на форму обработчик событий, который будет отрабатывать, если текст есть
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (input.value) {
          addElement(input.value);
      }
  })

  // запускаем функцию проверки наполненности обьекта
  renderTodoList()
})