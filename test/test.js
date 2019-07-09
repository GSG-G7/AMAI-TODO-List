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
    let expected = [ { id: -3, description: 'first todo' },{ id: -2, description: 'second todo' }];
    let actual = todoFunctions.deleteTodo(state, -1);
    let originalState = todoFunctions.cloneArrayOfObjects(state);

    t.deepEqual(state, originalState,"delete function must be pure");
    t.deepEqual(actual, expected, 'should delete todo.id');

    state = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' }
    ]
    expected = [ { id: -3, description: 'first todo' }];
    actual = todoFunctions.deleteTodo(state, -2);
    t.deepEqual(actual, expected, 'should delete todo.id');
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