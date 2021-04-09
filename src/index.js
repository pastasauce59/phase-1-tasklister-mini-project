
let form = document.querySelector('#create-task-form');
let taskDiv = document.querySelector('ul#tasks')
//document.addEventListener("DOMContentLoaded", () => {
  
//});


form.addEventListener('submit', function(evt){
  evt.preventDefault();

 
  
  let form2 = evt.target;
  let input = form2["new-task-description"]
  let whatUserTyped = input.value

  let blankLi = document.createElement('li');

  blankLi.classname = "new-task-description"
  blankLi.innerText = whatUserTyped

  taskDiv.append(blankLi)
})