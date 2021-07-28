import dynamoose from ('dynamoose');

const schema = new dynamoose.schema({
  id : String,
  name : {type : String, require: true},
  age : String
})

module.exports =dynamoose.model('people', schema)