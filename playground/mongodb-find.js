//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to connect to MongoDB server');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

//    db.collection('Todos').find({completed: false}).toArray().then( (docs) => {
    db.collection('Todos').find().toArray().then( (docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    // db.collection('Todos').find().count().then( (count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Users').find({name: 'Marcos'}).toArray().then( (users) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(users, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch Users', err)
    // });

    //client.close();
});