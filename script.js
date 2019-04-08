done = [];


//everything starts with user input
function addItem () {

//defining some variables
  const toDoList = document.getElementById('todolist');
  const doneList = document.getElementById('done');
  let myInput = document.getElementById('myInput').value;
  let newListItem = document.createElement('li');

//add the input to the To Do list
  newListItem.class = 'newtodo';
  newListItem.innerHTML = myInput;
  toDoList.appendChild(newListItem);

//completing  a todo item
  newListItem.onclick = () => {
//remove from todo list and add to done list
    document.getElementById('completed').className = 'done-card show';
    toDoList.removeChild(newListItem);
    let newDoneItem = document.createElement('li');
    newDoneItem.class = 'newdoneitem';
    newDoneItem.innerHTML = newListItem.innerHTML;
    doneList.appendChild(newDoneItem);
    done.push(newDoneItem);
   };


};
