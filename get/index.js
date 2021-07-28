import person from ('../schema');

exports.handler = async (e)=> {
  try {
    const id = e?.pathParameters?.id;
    let data;
    if (id){
      const result = await person.query('id').eq(id).exec();
      data = result[0];
    }else {
      data = await person.scan().exec();
    }
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