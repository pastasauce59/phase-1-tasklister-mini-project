let form = document.querySelector('#create-task-form');

//created delete button

document.addEventListener("DOMContentLoaded", () => {
  
  
  
  form.addEventListener('submit', function(evt){
    evt.preventDefault();
    
    
    
    let form2 = evt.target;
    let input = form2["new-task-description"]
    let whatUserTyped = input.value
    
    let blankLi = document.createElement('li');
    
    blankLi.classname = "new-task-description"
    blankLi.innerHTML = whatUserTyped
    
    
    let deleteBtn = document.createElement('input')
    deleteBtn.type="submit"
    deleteBtn.value="Delete"
    
    deleteBtn.onclick = function() { deleteButton(blankLi)}
    
    let taskDiv = document.querySelector('ul#tasks')
    // Fixed delete button functionality so it appends with newly created Li's and removes Li's
    // and delete button itself, but it is removing Li's in order of created. Needs to 
    // be able to remove Li it was created with.
    taskDiv.append(blankLi, deleteBtn)
    
    
    
    
    
    
    
  })
  
  function deleteButton(createdLi) {
    const parent = document.querySelectorAll('#tasks li')[0];
    parent.remove(createdLi);
    const parent2 = document.querySelectorAll('ul#tasks input')[0]
    parent2.remove();
    
  }
  
  });
  
  

// vv miscellaneous code I was messing around with, can be ignored vv

//blankLi.insertAdjacentHTMLapp('beforeend' + deleteBtn)

//' <button onclick="Delete(this);">Delete</button>'

//<input type="sumbit" value="Delete">

