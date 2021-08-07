const person = require("./people.schema");

exports.handler = async (e) => {
  try {
    const id = e?.pathParameters?.id;
    if (id) {
      await person.delete({ id });
    }

    return {
      statusCode: 200,
      body: {},
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
};
