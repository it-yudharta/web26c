const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = todoInput.value.trim();
    if (!todoText) return;

    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = todoText

    const btnHapus = document.createElement('button');
    btnHapus.textContent = 'Hapus';
    btnHapus.addEventListener('click', () => li.remove());

    li.append(span, btnHapus);

    todoList.appendChild(li);

    todoInput.value = '';
})