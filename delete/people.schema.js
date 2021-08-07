

const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
  id: String,
  name: String,
  age: String,
});

module.exports = dynamoose.model('people', schema);
