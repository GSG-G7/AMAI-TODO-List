// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var sortFormBtn = document.getElementById('add-todo input[type=button]');
 
  var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    const descDiv   = document.createElement('DIV');
    const descSpan  = document.createElement('SPAN');

    const iconDiv   = document.createElement('DIV');
    const checkIcon = document.createElement('I');
    const delIcon   = document.createElement('I');
    descDiv.classList.add('desc-div')
    iconDiv.classList.add('icon-div');
    // add classes for css
    if(todo.done){
      checkIcon.className = "far fa-check-square";
      checkIcon.style.color = 'green'
    }else{
      checkIcon.className = "far fa-square";
      checkIcon.style.color = 'red'
    }

    delIcon.className = 'fas fa-trash-alt';

    //Apend child
    descDiv.appendChild(descSpan);
    iconDiv.appendChild(checkIcon);
    iconDiv.appendChild(delIcon);

    todoNode.appendChild(descDiv);
    todoNode.appendChild(iconDiv);

    //Fill information by todo object
    descSpan.textContent = todo.description;

    delIcon.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);

      update(newState);
    });
    /* mark btn */
    checkIcon.addEventListener('click', function(event) {
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
     // edit event lestener
     if(!todo.done)
     descDiv.addEventListener("dblclick",function(event){
      var inputNew = document.createElement('input');
      descDiv.removeChild(descSpan);
      descDiv.appendChild(inputNew);
      inputNew.classList.add('editInput')
      inputNew.focus();
      inputNew.addEventListener('blur',function(event){
        descDiv.removeChild(inputNew);
        descDiv.appendChild(descSpan);
      });
      inputNew.addEventListener('keydown',function(event){
        if(event.key == "Enter"){
          update(todoFunctions.editTodo(state,inputNew.value ,todo.id));
        }
      });
    });

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      const inputText = document.querySelector('input[name=description]').value;
      
      if(inputText){

        console.log(inputText);
        
        var newState = todoFunctions.addTodo(state , inputText); // ?? change this!
        update(newState);
      }
      
      // hint: todoFunctions.addTodo
      //Reset Value
      document.querySelector('input[name=description]').value = "";
      sortFormBtn.addEventListener('click',function(event){
        update(todoFunctions.sortTodos(state,todoFunctions.sortFunction));
      });
    });
  }
  // add load();
  // add save();
  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
