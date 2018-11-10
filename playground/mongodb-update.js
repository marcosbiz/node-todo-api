//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if (err) {
        return console.log('Unable to connect to connect to MongoDB server');
    };
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5be62b7df0962242e40cb36e")
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then( (result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5be62cf5bcf096cc97f65d7d")
    }, {
        $set: {
            name: 'Mark'
        }, 
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then( (result) => {
        console.log(result);
    });

    

    //client.close();
});