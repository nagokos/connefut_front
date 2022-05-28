import { ChakraStylesConfig, GroupBase } from 'chakra-react-select';
import { SelectOption } from '../../type/type';

export const recruitmentChakraStyle: ChakraStylesConfig<
  SelectOption,
  boolean,
  GroupBase<SelectOption>
> = {
  dropdownIndicator: (provied) => ({
    ...provied,
    bg: 'white',
    fontSize: 20,
    color: 'blackAlpha.500',
  }),
  control: (provied) => ({
    ...provied,
    cursor: 'pointer',
    borderColor: '#E1EBE9',
    border: 'none',
    color: 'black',
    _hover: {
      border: 'none',
    },
    _focus: {
      border: 'none',
    },
    bg: 'white',
    borderRadius: 7,
    fontSize: 12,
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
    boxShadow: 'menu',
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
    fontSize: 11.5,
    my: 1,
    color: 'black',
    bg: 'white',
    _hover: {
      bg: 'primary.light',
    },
  }),
  multiValue: (provied) => ({
    ...provied,
    fontSize: 11,
    px: 2,
    boxShadow: 'md',
    mr: 1.5,
    my: 1,
  }),
  multiValueRemove: (provied) => ({
    ...provied,
    fontSize: 12.5,
    ml: 0,
  }),
};
