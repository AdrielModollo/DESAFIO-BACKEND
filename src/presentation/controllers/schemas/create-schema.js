const yup = require('yup');
const { sub } = require("date-fns/fp")
const { parseISO } = require("date-fns")

const userCreate = yup.object({
  body: yup.object({
    name: yup.string().required(),
    email: yup.string().required(),
    birthday: yup.date()
      .max(sub({ years: 18 }, new Date()), "User must be at least 18 years old")
      .transform((_value, originalValue) => parseISO(originalValue))
      .typeError('Date must be YYYY-MM-DD format'),
    balance: yup.number().required(),
  }),
});

module.exports = userCreate