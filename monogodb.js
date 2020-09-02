// CRUD - CREATE READ UPDATE DELETE

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    // db.collection('users').findOne(
    //   { _id: new ObjectID('5f4fabe50ebcde021eb11135') },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('ERROR: Unable to fetch');
    //     }

    //     console.log(user || 'Did not find user with given criteria');
    //   }
    // );

    //   db.collection('users')
    //     .find({ age: 30 })
    //     .toArray((error, users) => {
    //       console.log(users);
    //     });

    //   db.collection('users')
    //     .find({ age: 30 })
    //     .count((error, users) => {
    //       console.log(users);
    //     });

    db.collection('tasks').findOne(
      { _id: new ObjectID('5f4f099ab39241c78cf905a3') },
      (error, task) => {
        if (error) {
          return console.log('Unable to fetch task');
        }

        console.log(task);
      }
    );

    db.collection('tasks')
      .find({ completed: false })
      .toArray((error, tasks) => {
        if (error) {
          return console.log('Unable to fetch tasks');
        }

        console.log(tasks);
      });
  }
);
