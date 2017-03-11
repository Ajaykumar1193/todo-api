const {MongoClient, ObjectID} = require('mongodb');

var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    console.log(`Unable to connect to mangodb`);
  }
  console.log(`Connected to database`);
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log(`Unable to fetch ${err}`);
  });

  //db.close();
});
