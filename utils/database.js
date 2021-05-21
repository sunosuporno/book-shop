const mongodb = require("mongodb");
require('dotenv').config()
const MongoClient = mongodb.MongoClient;

let _db

const mongoConnect = (callback) => {
  MongoClient.connect(
    process.env.MONGODB_URI
  )
    .then((client) => {
      console.log("CONNECTED!");
      _db = client.db()
      callback()
    })
    .catch((err) => {
      console.log(err);
      throw err
    });
};


const getDb = () => {
  if(_db){
    return _db
  }
  throw 'No database found!'
}

exports.mongoConnect = mongoConnect
exports.getDb = getDb
