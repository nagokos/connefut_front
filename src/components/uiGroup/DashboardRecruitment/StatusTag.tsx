import { Box } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { Status } from '../../../generated/graphql';

type Props = {
  status: Status;
};

export const StatusTag: FC<Props> = memo((props) => {
  const { status } = props;

  const statusTag = () => {
    if (status === Status.Published) {
      return '公開中';
    } else if (status === Status.Draft) {
      return '下書き';
    } else {
      return '締切';
    }
  };

  const statusColor = () => {
    if (status === Status.Published) {
      return 'primary.main';
    } else if (status === Status.Draft) {
      return 'blue.500';
    } else {
      return 'error.main';
    }
  };

  const statusBg = () => {
    if (status === Status.Published) {
      return 'primary.light';
    } else if (status === Status.Draft) {
      return 'blue.50';
    } else {
      return 'red.50';
    }
  };

  return (
    <Box
      as="span"
      bg={statusBg()}
      color={statusColor()}
      fontSize={12.5}
      px={1.5}
      py={0.5}
      rounded={3}
    >
      {statusTag()}
    </Box>
  );
});
