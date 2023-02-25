import removeQuoteFromString from "./removeQuote";

const handleError = (error: any) => {
  let errorMsg = "error validating request";

  if (error.name === "MongoServerError" && error.code === 11000) {
    errorMsg = "resource already exist";
  }
  if (error.name === "CastError") {
    errorMsg = error.message;
  }

  if (error.type === "string.email") {
    errorMsg = "email must be a valid email";
  }
  if (error.type === "any.required") {
    errorMsg = `${error.path[0]} is required`;
  }

  if (error.type === "string.min") {
    errorMsg = "password length must be at least 8 characters long";
  }
  if (error.type.includes(".base")) {
    errorMsg = error.message;
  }

  if (error.name === "ValidationError") {
    Object.keys(error.errors).forEach((key) => {
      errorMsg = error.errors[key].message;
    });
  }

  return removeQuoteFromString(errorMsg);
};

export default handleError;
