const test = require('tape');
const todoFunctions = require('../JS/logic');

const state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; 

test("example test", t => {
    t.equal(1, 1);
    t.end();
});

test("testing for delete", (t)=> {
    const expected1 = [ { id: -3, description: 'first todo' },{ id: -2, description: 'second todo' }];
    const actual1 = todoFunctions.deleteTodo(state, -1);
    let stateBeforeTest = todoFunctions.cloneArrayOfObjects(state);

    t.deepEqual(actual1, expected1, 'should delete todo.id');
    t.deepEqual(state, stateBeforeTest,"delete function must be pure");

    const newState = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' }
    ]
    const expected2 = [ { id: -3, description: 'first todo' }];
    const actual2 = todoFunctions.deleteTodo(newState, -2);
    t.deepEqual(actual2, expected2, 'should delete todo.id');
    t.deepEqual(state, stateBeforeTest,"delete function must be pure");
    t.end();
});

test("Test of the state array with addTodo function" , (t)=> {
    let expected = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' },
        { id: -1, description: 'third todo' },
        { id: 1, description: 'how are you' , done: false},
    ]
    let stateBeforeTest = todoFunctions.cloneArrayOfObjects(state);
    
    
    t.deepEqual(todoFunctions.addTodo(state , 'how are you') , expected , "first add test");

    t.deepEqual(state, stateBeforeTest,"add function didnt change on the input(pure function)")

    expected = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' },
        { id: -1, description: 'third todo' },
        { id: 2, description: 'thank you' , done: false},
    ]

    t.deepEqual(todoFunctions.addTodo(state , 'thank you') , expected , "second add test");

    expected = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' },
        { id: -1, description: 'third todo' },
        { id: 3, description: 'you are welcome' , done: false},
    ]

    t.deepEqual(todoFunctions.addTodo(state , 'you are welcome') , expected , "third add test");

    t.end();
})