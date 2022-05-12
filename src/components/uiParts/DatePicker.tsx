import { Input } from '@chakra-ui/react';
import { FC, memo } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import ja from 'date-fns/locale/ja';
registerLocale('ja', ja);

import 'react-datepicker/dist/react-datepicker.css';
import '../../assets/style/date-picker.scss';

export const DatePicker: FC = memo(() => {
  return (
    <ReactDatePicker
      // selected={startDate}
      onChange={(date) => console.log(date)}
      placeholderText="開催日"
      popperPlacement="top"
      dateFormat="yyyy/MM/dd"
      locale="ja"
      minDate={new Date()}
      customInput={
        <Input
          cursor="pointer"
          fontSize={12}
          placeholder="開催日時"
          borderRadius={3}
          _placeholder={{
            color: 'rgba(0, 0, 0, 0.48);',
            fontSize: 12,
            fontWeight: 'bold',
          }}
          fontWeight="bold"
          borderColor="#E1EBE9"
          border="1px solid #E1EBE9"
          _hover={{ border: '1px solid #E1EBE9' }}
          _focus={{ border: '1px solid #E1EBE9' }}
        />
      }
    />
  );
});
