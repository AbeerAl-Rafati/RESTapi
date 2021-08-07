const person = require("./people.schema");

exports.handler = async (e)=> {
  try {
    const id = e?.pathParameters?.id;
    let {name , age }= JSON.parse(e.body);
   
      const data = await person.update({id} ,{name, age});
    
    return {
      statusCode : 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      status : 500, 
    message : error.message,
  }
  }
}