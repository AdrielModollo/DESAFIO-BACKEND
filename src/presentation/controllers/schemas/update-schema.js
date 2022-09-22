const yup = require('yup');

const userUpdate = yup.object({
  body: yup.object({
    balance: yup.number().required(),
  }),
});

module.exports = userUpdate