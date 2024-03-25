import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  password: Yup.string()
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});
export const SignUpSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid emailaa').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
    country: Yup.string().required('Country is required'),
    phone: Yup.string().required('Phone number is required'),
});
export const ResetPasswordSchema = Yup.object().shape({

    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});
