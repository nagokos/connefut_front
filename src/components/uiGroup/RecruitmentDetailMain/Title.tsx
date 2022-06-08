import { Text } from '@chakra-ui/react';
import { FC, memo } from 'react';

type Props = {
  title?: string;
};

export const Title: FC<Props> = memo((props) => {
  const { title } = props;

  return (
    <Text fontWeight="bold" fontSize={26} fontFamily="ヒラギノ角ゴシック">
      {title}
    </Text>
  );
});
