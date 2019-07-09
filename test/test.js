const test = require('tape');
const todoFunctions = require('../JS/logic');

var state = [
    { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },
  ]; 

// test("example test", t => {
//     t.equal(1, 1);
//     t.end();
// });

test("testing for delete", (t)=> {
    let expected = [ { id: -3, description: 'first todo' },{ id: -2, description: 'second todo' }];
    let actual = todoFunctions.deleteTodo(state, state[2]);
    let originalState = todoFunctions.cloneArrayOfObjects(state);

    t.deepEqual(state, originalState,"delete function must be pure");
    t.deepEqual(actual, expected, 'should delete todo.id');

    state = [
        { id: -3, description: 'first todo' },
        { id: -2, description: 'second todo' }
    ]
    expected = [ { id: -3, description: 'first todo' }];
    actual = todoFunctions.deleteTodo(state, state[1]);
    t.deepEqual(actual, expected, 'should delete todo.id');
    t.end();
});