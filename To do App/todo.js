let todolist = [
    { todo_input: 'Drink Water' ,
      todo_date: '2023-12-22' , 
    }
  ];


function addtodo() {
  let item_value = document.querySelector("#todo-input").value;
  let date_value = document.querySelector("#input-date").value;
  todolist.push({todo_input: item_value,todo_date: date_value});
  document.querySelector("#todo-input").value = "";
  document.querySelector("#input-date").value = "";
  displayitems();
}
function displayitems() {
  let newhtml = "";
  for (let i = 0; i < todolist.length; i++) {
  
   let {todo_input,todo_date} = todolist[i];
   newhtml += `
    <span>${todo_input}</span>
    <span>${todo_date}</span></li>
    <button class= 'btn-del todo-btn' onclick="todolist.splice(${i},1) 
    displayitems()">Delete</button>`
    document.querySelector('#display-items').innerHTML = newhtml
  }
}  
