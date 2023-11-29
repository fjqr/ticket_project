const validation = (schema) => {
  let JoiValidation = async (req, res, next) => {
    try {
      await schema.validateAsync(req.body,{abortEarly:false});
      await next();
    } catch (error) {
      res.status(500).send({ success: false, message: error.message });
    }
  };
  return JoiValidation;
};

export default validation;
