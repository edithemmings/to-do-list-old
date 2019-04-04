toDoArr = [];
doneArr = [];

function addItem () {
  console.log('adding item')
  var myInput = document.getElementById('myInput').value,
  listNode = document.getElementById('todolist'),
  liNode = document.createElement('LI'),
  txtNode = document.createTextNode(myInput);

  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
}
