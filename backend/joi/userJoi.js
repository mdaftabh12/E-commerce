import joi from "joi";

//===========  Create user validation  ===========//

const createUserValidation = async (req, res, next) => {
  let user = joi.object().keys({
    username: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
  });

  await user.validateAsync(req.body);
  next();
};

export { createUserValidation };
