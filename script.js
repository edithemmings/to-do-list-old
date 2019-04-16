listItems = [];


//everything starts with user input
function addItem () {
  //add the input to the To Do list
    let newListItem = document.createElement('li');
    newListItem.class = 'newtodo';
    newListItem.innerHTML = document.getElementById('myInput').value;
    document.getElementById('todolist').appendChild(newListItem);
    listItems.push(newListItem);

    function checkOff (event){
      $('.done').slideDown();
      $('.clear').show();
      document.getElementById('todolist').removeChild(event.target);
      let newDoneItem = document.createElement('li');
      newDoneItem.class = 'newdoneitem';
      newDoneItem.innerHTML = event.target.innerHTML;
      document.getElementById('done').appendChild(newDoneItem);
     };

    function clickToCheckOff (item){
      item.onclick = checkOff;
    };

    listItems.forEach(clickToCheckOff);
};

$('#clearButton').on('click', () => {
  $('.done').slideUp();
  $('.clear').hide();
  $('.done li').remove();
});

$(document).keydown(function(keyPressed) {
   if (document.getElementById('myInput').value && keyPressed.keyCode === 13) {
     addItem();
     $("input[type=text], textarea").val("");
   }
  });
