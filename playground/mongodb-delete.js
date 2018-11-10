//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to connect to MongoDB server');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });
    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log(err);
    // });

    // db.collection('Users').deleteMany({name: 'Marcos'}).then( (result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5be4e0f41e9b27c325e15ed6")}).then((result) => {
        console.log(result);
    })

    //client.close();
});