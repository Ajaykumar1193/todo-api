const {MongoClient, ObjectID} = require('mongodb');

var obj=new ObjectID();
console.log(obj);
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if(err){
    console.log(`Unable to connect to mangodb`);
  }
  console.log(`Connected to database`);
  // db.collection('Todos').insertOne({
  //   text: `Something to do`,
  //   completed: false
  // }, (err, result)  => {
  //   if(err){
  //     return console.log(`Unable to insert todo`);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Users').insertOne({
    name: `Ajay Kuamr`,
    age: 23,
    about: `Honesty`
  }, (err, result)  => {
    if(err){
      return console.log(`Unable to insert todo`);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
    console.log((JSON.stringify(result.ops[0]._id.getTimestamp())));
  });
  db.close();
});
