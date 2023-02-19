const handleError = (error) => {
  let errorMsg = "an error occured";

  if (error.name === "MongoServerError" && error.code === 11000) {
    errorMsg = "resource already exist";
  }
  if (error.name === "CastError") {
    errorMsg = `invalid ${error.kind}`;
  }
  if (error.name === "ValidationError") {
    let path = "";

    if (error.message.includes("name")) path = "name";
    if (error.message.includes("price")) path = "price";
    if (error.message.includes("roomType")) path = "roomType";
    if (error.message.includes("email")) path = "email";

    errorMsg = `${path} error`;
  }

  return errorMsg;
};

module.exports = handleError;
