// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function() {
      var idCounter = 0;
  
      function incrementCounter() {
        return (idCounter += 1);
      }
  
      return incrementCounter;
    })(),
    
    //cloneArrayOfObjects will create a copy of the todos array 
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function(todos) {
      return todos.map(function(todo){
        return JSON.parse(JSON.stringify(todo));
      });
    },
    
    addTodo: function(todos, newTodo) {
      
      // todofunctions.addtodo(cloneArrayOfObjects(todos),
      //                        {id: generateId(),
      //                         description:getdescription,
      //                         done: false})
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // returns a new array, it should contain todos with the newTodo added to the end.
      // add an id to the newTodo. You can use the generateId function to create an id.
      // hint: array.concat
      const newTodos = todoFunctions.cloneArrayOfObjects(todos);
      let objCurr = {
        id:           todoFunctions.generateId(),
        description:  newTodo,
        done :        false,
      };
      
      return [objCurr].concat(newTodos);
    },
    deleteTodo: function(todos, idToDelete) {
      const newTodos = todoFunctions.cloneArrayOfObjects(todos);
      return newTodos.filter(item =>{
        return item.id !== idToDelete;
      });
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // return a new array, this should not contain any todo with an id of idToDelete
      // hint: array.filter

    },
    markTodo: function(todos, idToMark) {
      // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
      // in the new todo array, all elements will remain unchanged except the one with id: idToMark
      // this element will have its done value toggled
      // hint: array.map
      const newTodos = todoFunctions.cloneArrayOfObjects(todos);
      //catch on index of specific object
      newTodos.map((e)=> {
        if(e.id === idToMark){
          e.done = true;          
        }        
        return e;        
      })

      return newTodos;
  
    },sortFunction : function(task1,task2){
      if(task1.description.toLowerCase()>task2.description.toLowerCase()){
          return 1;
      }
      if(task1.description.toLowerCase()<task2.description.toLowerCase()){
          return -1;
      }
      return 0;
    },
    sortTodos: function(todos, sortFunction) {
      // stretch goal! Do this last
      // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
      // sortFunction will have same signature as the sort function in array.sort
      // hint: array.slice, array.sort
      const newTodos = todoFunctions.cloneArrayOfObjects(todos);
      return newTodos.sort(sortFunction);
    },
    editTodo: function(todos,newDescription,idToEdit){
      const newTodos = todoFunctions.cloneArrayOfObjects(todos);
      newTodos.forEach((e)=> {
        if(e.id === idToEdit){
          e.description = newDescription;
        }
        return e;
      });
      return newTodos
    }
  };
  
  
  // Why is this if statement necessary?
  // The answer has something to do with needing to run code both in the browser and in Node.js
  // See this article for more details: 
  // http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
  if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
  }