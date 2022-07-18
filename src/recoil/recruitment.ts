import { atom } from 'recoil';

export const recruitmentSelfCreatedConnection = atom<string>({
  key: 'recruitmentSelfCreatedConnection',
  default: '',
});

export const recruitmentCardConnection = atom<string>({
  key: 'recruitmentCardConnection',
  default: '',
});

export const recruitmentStockedConnection = atom<string>({
  key: 'recruitmentStockedConnection',
  default: '',
});
