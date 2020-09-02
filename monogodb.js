// CRUD - CREATE READ UPDATE DELETE

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

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

    // db.collection('users').insertOne(
    //   {
    //     name: 'Davin',
    //     age: 30,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Janet',
    //       age: 27,
    //     },
    //     {
    //       name: 'Jack',
    //       age: 29,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('An Error occurred while inserting.');
    //     }

    //     console.log(result.ops);
    //   }
    // );

    db.collection('tasks').insertMany(
      [
        {
          task: 'Get To Top 1% on CodeWars',
          completed: false,
        },
        {
          task: 'Become a Full Stack Developer',
          completed: true,
        },
        {
          task: 'Develop My Own Business',
          completed: false,
        },
      ],
      (error, result) => {
        if (error) {
          return console.log('Error while inserting documents');
        }

        console.log(result.ops);
      }
    );
  }
);
