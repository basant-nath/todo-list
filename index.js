// select html elements

const todoInput = document.querySelector(".todo-inp");

const todoBtn = document.querySelector(".todo-btn");

const todoList = document.querySelector(".todo-list");





// event listners

todoBtn.addEventListener("click", addTodo);

todoList.addEventListener('click',deletebtn)


// flag
let flag=false;

// functions
function addTodo(e) {
  // it will stop default action of form
  e.preventDefault();


  if(todoInput.value==="" && flag===false){
 alert('Add Todo First ')
  }
  else{


  // create element to inject todo

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // create li items

  const newTodo = document.createElement("li");

  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  todoDiv.appendChild(newTodo);

  // check mark button a

  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="ri-checkbox-circle-line check"></i>';

  completedBtn.classList.add("complete-btn");
  todoDiv.appendChild(completedBtn);

  // delete button /trash btn

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="ri-delete-bin-line delete"></i>';
  trashBtn.classList.add("trash-btn");
  todoDiv.appendChild(trashBtn);

  // append to list

  todoList.appendChild(todoDiv);

  // clear the input value
  todoInput.value = null;

  }


  
}



// function of delete btn

function deletebtn(e){
const item=e.target;


    if(item.classList[0]==='trash-btn'){
        
        const todo=item.parentElement;
        todo.classList.add('fall')

        // transition event listner 

        todo.addEventListener('webkitTransitionEnd',()=>{
            todo.remove();

        });
    }

    // checkmark 

    if(item.classList[0]==='complete-btn'){

        const todo=item.parentElement;

        todo.classList.toggle('completed');
    }
    
}





