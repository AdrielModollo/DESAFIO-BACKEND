const yup = require('yup');

const authSchema = yup.object({
    body: yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    }),
});

module.exports = authSchema