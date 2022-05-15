import { z } from 'zod';

const emailFormat =
  /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/i;
const passwordFormat = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,}$/i;

export const signUpSchema = z.object({
  name: z
    .string()
    .nonempty({ message: '名前を入力してください' })
    .max(50, { message: '名前は50文字以内で入力してください' }),
  email: z
    .string()
    .nonempty({ message: 'メールアドレスを入力してください' })
    .regex(emailFormat, { message: 'メールアドレスを正しく入力してください' }),
  password: z
    .string()
    .nonempty({ message: 'パスワードを入力してください' })
    .min(8, { message: 'パスワードは8文字以上で入力してください' })
    .max(100, { message: 'パスワードは100文字以内で入力してください' })
    .regex(passwordFormat, { message: 'パスワードを正しく入力してください' }),
});

export const loginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: 'メールアドレスを入力してください' })
    .regex(emailFormat, { message: 'メールアドレスを正しく入力してください' }),
  password: z
    .string()
    .nonempty({ message: 'パスワードを入力してください' })
    .min(8, { message: 'パスワードは8文字以上で入力してください' })
    .max(100, { message: 'パスワードは100文字以内で入力してください' })
    .regex(passwordFormat, { message: 'パスワードを正しく入力してください' }),
});

export type signUpType = z.infer<typeof signUpSchema>;
export type loginType = z.infer<typeof loginSchema>;
