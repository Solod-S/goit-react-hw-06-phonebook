import * as yup from 'yup';

const phoneRegExp =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

let schema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'That doesnt look like your name')
    .typeError()
    .required(),
  number: yup
    .string()
    .required(`You need to type a number`)
    .min(3, 'Too short')
    .max(15, 'Too long')
    .matches(phoneRegExp, 'That doesnt look like a phone number'),
});

export default schema;
