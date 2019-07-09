const test = require('tape');
const todoFunctions = require('../JS/logic');

const state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
]


test("example test", t => {
    t.equal(1, 1);
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
        { id: 1, description: 'thank you' , done: false},
    ]

    t.deepEqual(todoFunctions.addTodo(state , 'thank you') , expected , "second add test");

    expected = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' },
        { id: -1, description: 'third todo' },
        { id: 1, description: 'you are welcome' , done: false},
    ]

    t.deepEqual(todoFunctions.addTodo(state , 'you are welcome') , expected , "third add test");

    t.end();
})