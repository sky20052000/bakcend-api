const validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLoginInput(data) {
    let errors = {};
  
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
  
    if (validator.isEmpty(data.email)) {
      errors.email = "please enter your email.";
    }
  
    if (validator.isEmpty(data.password)) {
      errors.password = "please enter your password";
    }
  
    return {
      errors,
      isValid: isEmpty(errors),
    };

  };
  