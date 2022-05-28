import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { IoMdAdd } from 'react-icons/io';

type Props = {
  input: string;
};

export const CreateLabel: FC<Props> = memo((props) => {
  const { input } = props;

  return (
    <Box display="flex" alignItems="center">
      <IoMdAdd fontSize={13} />
      <Box ml={2} fontWeight="bold" mr={2}>
        {input}
      </Box>
      を作成する
    </Box>
  );
});
