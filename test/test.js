const test = require('tape');
const todoFunctions = require('../JS/logic');

const state = [
    { id: -3, description: 'first todo', done: false},
    { id: -2, description: 'second todo', done: false},
    { id: -1, description: 'third todo', done: false},
  ]; 

test("example test", t => {
    t.equal(1, 1);
    t.end();
});

test("testing for delete", (t)=> {
    const expected1 = [ 
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: false}
    ];
    const actual1 = todoFunctions.deleteTodo(state, -1);
    let stateBeforeTest = todoFunctions.cloneArrayOfObjects(state);
    const newState = [
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: false}
    ]
    const expected2 = [ 
        { id: -3, description: 'first todo', done: false}
    ];
    const actual2 = todoFunctions.deleteTodo(newState, -2);
    
    t.deepEqual(actual1, expected1, 'should delete todo.id');
    t.deepEqual(state, stateBeforeTest,"delete function must be pure");
    t.deepEqual(actual2, expected2, 'should delete todo.id');
    t.deepEqual(state, stateBeforeTest,"delete function must be pure");
    t.end();
});

test("Test of the state array with addTodo function" , (t)=> {
    const expected1 = [
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: false},
        { id: -1, description: 'third todo', done: false},
        { id: 1, description: 'how are you', done: false},
    ]
    const expected2 = [
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: false},
        { id: -1, description: 'third todo', done: false},
        { id: 2, description: 'thank you', done: false},
    ]
    const expected3 = [
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: false},
        { id: -1, description: 'third todo', done: false},
        { id: 3, description: 'you are welcome', done: false},
    ]

    const stateBeforeTest = todoFunctions.cloneArrayOfObjects(state);
    
    t.deepEqual(todoFunctions.addTodo(state , 'how are you') , expected1 , "first add test");
    t.deepEqual(state, stateBeforeTest,"add function didnt change on the input(pure function)");
    t.deepEqual(todoFunctions.addTodo(state , 'thank you') , expected2 , "second add test");
    t.deepEqual(todoFunctions.addTodo(state , 'you are welcome') , expected3 , "third add test");

    t.end();
});

test("testing for markTodo",(t)=>{
    const expected1 = [
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: false},
        { id: -1, description: 'third todo', done: true},
    ]; 
    const expected2 = [
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: true},
        { id: -1, description: 'third todo', done: false},
    ]; 
    const expected3 = [
        { id: -3, description: 'first todo', done: true},
        { id: -2, description: 'second todo', done: false},
        { id: -1, description: 'third todo', done: false},
    ]; 
    const stateBeforeTest = todoFunctions.cloneArrayOfObjects(state);
    
    t.deepEqual(todoFunctions.markTodo(state, -1),expected1,"marking id -1 test");
    t.deepEqual(state, stateBeforeTest,"mark function didnt change on the input(pure function)");
    t.deepEqual(todoFunctions.markTodo(state, -2),expected2,"marking id -2 test");
    t.deepEqual(todoFunctions.markTodo(state, -3),expected3,"marking id -3 test");
    t.end();
})

// start test sorting function alaa && mohammad

test("testing for sort function", t=>{
    const unSort = [
    { id: -3, description: 'second todo', done: false},
    { id: -2, description: 'third todo', done: false},
    { id: -1, description: 'first todo', done: false},
    ];
    const unSortPure = todoFunctions.cloneArrayOfObjects(unSort);
    const expected1 = [
    { id: -1, description: 'first todo', done: false},
    { id: -3, description: 'second todo', done: false},
    { id: -2, description: 'third todo', done: false},
    ];
    const actual1 = todoFunctions.sortTodos(unSortPure,todoFunctions.sortFunction);
    
    t.deepEqual(actual1,expected1,"array should be sorted : first todo , second todo, third todo");
    t.end();
    });
    // end testing for sorting function