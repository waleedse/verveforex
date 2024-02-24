import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
