import person from ('../schema');
import {v4} from ('uuid');


exports.handler = async (e)=> {
  try {
    const {name , age} = JSON.parse(e.body);
    const id = v4();
    const result = new person({ id , name , age});
    const data = await result.save();
    return{
      statusCode : 201,
      body : JSON.stringify(data);
    }
  } catch (error) {
    return {
      status : 500, 
    message : error.message,
  }
  }
}