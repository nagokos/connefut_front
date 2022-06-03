import * as yup from 'yup';

export const applicantSchema = yup.object().shape({
  message: yup.string().required('メッセージを入力してください'),
});
