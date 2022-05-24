import * as yup from 'yup';

const emailFormat =
  /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i;
const passwordFormat = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,}$/i;

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .required('お名前を入力してください')
    .max(50, 'お名前は50文字以内で入力してください'),
  email: yup
    .string()
    .required('メールアドレスを入力してください')
    .max(100, 'メールアドレスは100文字以内で入力してください')
    .matches(emailFormat, 'メールアドレスを正しく入力してください'),
  password: yup
    .string()
    .required('パスワードを入力してください')
    .min(8, 'パスワードは8文字以上にしてください')
    .matches(passwordFormat, 'パスワードを正しく入力してください'),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('メールアドレスを入力してください')
    .max(100, 'メールアドレスは100文字以内で入力してください')
    .matches(emailFormat, 'メールアドレスを正しく入力してください'),
  password: yup
    .string()
    .required('パスワードを入力してください')
    .min(8, 'パスワードは8文字以上にしてください')
    .matches(passwordFormat, 'パスワードを正しく入力してください'),
});
