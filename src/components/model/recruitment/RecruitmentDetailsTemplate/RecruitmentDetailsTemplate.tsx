import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  detailTitle: string;
  displayName: string;
};

export const RecruitmentDetailsTemplate: FC<Props> = memo((props) => {
  const { detailTitle, displayName } = props;

  return (
    <Box display="flex" alignItems="center">
      <Box
        display="flex"
        alignItems="start"
        fontSize={14}
        justifyContent="start"
        minW={130}
      >
        <Box mr={1}>■</Box>
        <Box>{detailTitle}</Box>
      </Box>
      <Box
        fontFamily="ヒラギノ角ゴシック"
        bg="primary.light"
        fontSize={14}
        px={2}
        py={1}
        rounded="md"
      >
        {displayName}
      </Box>
    </Box>
  );
});
