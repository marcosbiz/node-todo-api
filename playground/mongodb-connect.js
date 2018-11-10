//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to connect to MongoDB server');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Marcos',
        age: 32,
        location: 'São Paulo'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});