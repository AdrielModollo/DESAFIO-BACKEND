const yup = require('yup');

const userCreate = yup.object({
  body: yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    birthday: yup.date().required(),
    balance: yup.number().required(),
  }),
});

module.exports = userCreate