const yup = require('yup');

const register = {
  body: yup.object().shape({
    name: yup.string().required(),
    email: yup
      .string()
      .email()
      .required(),
    password: yup
      .string()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/,
        'password must have lower and upper letters, at least one number, and at least one special character',
      )
      .required(),
  }),
};

const signin = {
  body: yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
    password: yup.string().required(),
  }),
};

const forgotPassword = {
  body: yup.object().shape({
    email: yup
      .string()
      .email()
      .required(),
  }),
};

const resetPassword = {
  params: yup.object().shape({
    token: yup.string().require(),
  }),
  body: yup.object().shape({
    newPassword: yup
      .string()
      .min(8)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/,
        'password must have lower and upper letters, at least one number, and at least one special character',
      )
      .required(),
  }),
};

module.exports.auth = {
  register,
  signin,
  forgotPassword,
  resetPassword,
};
