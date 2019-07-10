// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
    // This is the dom node where we will keep our todo
    var container = document.getElementById('todo-container');
    var addTodoForm = document.getElementById('add-todo');
  
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

      // add classes for css
      checkIcon.className = 'far fa-check-square';
      delIcon.className = 'fas fa-trash-alt';

      //Apend child
      descDiv.appendChild(descSpan);
      iconDiv.appendChild(checkIcon);
      iconDiv.appendChild(delIcon);

      todoNode.appendChild(descDiv);
      todoNode.appendChild(iconDiv);

      //Fill information by todo object
      descSpan.textContent = todo.description;
  
      // this adds the delete button
      // var deleteButtonNode = document.createElement('button');
      delIcon.addEventListener('click', function(event) {
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });
      /* mark btn */
      checkIcon.addEventListener('click', function(event) {
        var newState = todoFunctions.markTodo(state, todo.id);
        update(newState);
      });
      return todoNode;
    };
  
    // bind create todo form
    if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
        // https://developer.mozilla.org/en-US/docs/Web/Events/submit
        // what does event.preventDefault do?
        // what is inside event.target?
  
        var description = '?'; // event.target ....
  
        // hint: todoFunctions.addTodo
        var newState = []; // ?? change this!
        update(newState);
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
