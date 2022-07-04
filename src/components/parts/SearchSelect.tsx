import { Spacer } from '@chakra-ui/react';
import { Select, chakraComponents } from 'chakra-react-select';
import { FC, memo } from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { SelectOption } from '../../type/type';

type Props = {
  options?: SelectOption[];
  placeholder: string;
};

export const SearchSelect: FC<Props> = memo((props) => {
  const { options, placeholder } = props;

  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
        Option: (props) => (
          <chakraComponents.Option {...props}>
            {props.data.label}
            <Spacer />
            <IoIosCheckmarkCircle color="#009688" fontSize={15.5} />
          </chakraComponents.Option>
        ),
      }}
      placeholder={placeholder}
      options={options}
      chakraStyles={{
        dropdownIndicator: (provied) => ({
          ...provied,
          bg: 'white',
        }),
        input: (provied) => ({
          ...provied,
          px: 10,
          cursor: 'pointer',
        }),
        control: (provied) => ({
          ...provied,
          cursor: 'pointer',
          borderColor: '#E1EBE9',
          border: '1px solid #E1EBE9',
          _hover: {
            border: '1px solid #E1EBE9',
          },
          _focus: {
            border: '1px solid #E1EBE9',
          },
          caretColor: '#fff',
          borderRadius: 3,
          fontSize: 11,
          fontWeight: 'bold',
        }),
        valueContainer: (provied) => ({
          ...provied,
          px: 3,
        }),
        placeholder: (provied) => ({
          ...provied,
          color: 'RGBA(0, 0, 0, 0.48)',
        }),
        menu: (provied) => ({
          ...provied,
          my: 0,
          border: 'none',
          boxShadow: 'lg',
          bg: 'white',
          borderRadius: 3,
          color: 'black',
        }),
        menuList: (provied) => ({
          ...provied,
          py: 1,
          color: 'black',
          borderRadius: 3,
          border: 'none',
          bg: 'white',
        }),
        option: (provied) => ({
          ...provied,
          fontSize: 11,
          my: 1,
          color: 'black',
          bg: 'white',
          fontFamily: 'Noto Sans JP',
          _hover: {
            bg: 'primary.light',
          },
        }),
      }}
      selectedOptionStyle="color"
    />
  );
});
