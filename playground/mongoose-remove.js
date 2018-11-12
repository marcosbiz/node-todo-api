const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndDelete
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5bea0476f0962242e40cefc2').then((todo) => {
    console.log(todo);
});