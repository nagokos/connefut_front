import { differenceInMinutes, format } from 'date-fns';
import * as yup from 'yup';
import { Status, Type } from '../generated/graphql';

export const recruitmentSchema = yup.object().shape({
  title: yup
    .string()
    .required('タイトルを入力してください')
    .max(60, 'タイトルは60文字以内で入力してください'),
  competitionId: yup.string().required('募集競技を選択してください'),
  type: yup
    .string()
    .required('募集タイプを選択してください')
    .oneOf(
      [Type.Individual, Type.Opponent, Type.Member, Type.Joining, Type.Others],
      '募集タイプは選択肢の中から選んでください'
    ),
  content: yup
    .string()
    .max(10000, '募集の詳細は10000文字以内で入力してください')
    .when('status', {
      is: Status.Published,
      then: yup.string().optional().required('募集の詳細を入力してください'),
      otherwise: yup.string().optional(),
    }),
  prefectureId: yup.string().when('status', {
    is: Status.Published,
    then: yup.string().nullable().required('募集エリアを選択してください'),
    otherwise: yup.string().nullable(),
  }),
  place: yup.string().when('status', {
    is: Status.Published,
    then: yup.string().when('type', {
      is: (value: Type) => value === Type.Opponent || value === Type.Individual,
      then: yup.string().required('会場を入力してください'),
      otherwise: yup.string().optional(),
    }),
    otherwise: yup.string().optional(),
  }),
  startAt: yup
    .string()
    .transform((value, originalValue) =>
      value === '' ? '' : format(new Date(String(value)), 'yyyy/MM/dd HH:mm')
    )
    .when('status', {
      is: Status.Published,
      then: yup.string().when('type', {
        is: (value: Type) =>
          value === Type.Opponent || value === Type.Individual,
        then: yup
          .string()
          .required('開催日時を設定してください')

          .when('startAt', {
            is: (value: string) =>
              differenceInMinutes(new Date(value), new Date()) < 0,
            then: yup
              .string()
              .test(
                'before_now_start',
                '開催日時は現在以降に設定してください',
                () => {
                  return false;
                }
              ),
          }),
        otherwise: yup.string().optional(),
      }),
      otherwise: yup.string().optional(),
    }),
  closingAt: yup
    .string()
    .transform((value, originalValue) =>
      value === '' ? '' : format(new Date(String(value)), 'yyyy/MM/dd HH:mm')
    )
    .when('status', {
      is: Status.Published,
      then: yup
        .string()
        .required('募集期限を設定してください')
        .when('closingAt', {
          is: (value: string) =>
            differenceInMinutes(new Date(value), new Date()) < 0,
          then: yup
            .string()
            .test(
              'before_now_closing',
              '募集期限は現在以降に設定してください',
              () => {
                return false;
              }
            ),
        })
        .when(['startAt', 'closingAt'], {
          is: (valueStart: string, valueClosing: string) =>
            differenceInMinutes(new Date(valueStart), new Date(valueClosing)) <
            0,
          then: yup
            .string()
            .test(
              'within_the_deadline',
              '募集期限は開催日時より前に設定してください',
              () => {
                return false;
              }
            ),
        }),
      otherwise: yup.string().optional(),
    }),
  locationLat: yup.number().optional(),
  locationLng: yup.number().optional(),
  status: yup.string().required().oneOf([Status.Draft, Status.Published]),
});
