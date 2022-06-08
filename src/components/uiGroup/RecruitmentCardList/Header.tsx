import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { CardRecruitment } from '../../../type/type';

type Props = {
  recruitment: CardRecruitment;
};

export const Header: FC<Props> = memo((props) => {
  const { recruitment } = props;

  return (
    <>
      <Box
        bg="primary.50"
        minHeight={140}
        display="flex"
        px={4}
        pt={4}
        justifyContent="center"
        alignItems="center"
        fontSize={15.5}
        textAlign="center"
        fontWeight="bold"
      >
        {recruitment.title}
      </Box>
    </>
  );
});
