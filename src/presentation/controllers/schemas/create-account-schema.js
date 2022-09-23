const yup = require('yup');

const accountCreate = yup.object({
    body: yup.object({
        debit: yup.number().required(),
        credit: yup.number().required(),
        estorn: yup.number().required(),
    }),
});

module.exports = accountCreate