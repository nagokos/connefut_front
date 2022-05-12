import { Text } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { CardRecruitment } from '../../../type/type';

type Props = {
  recruitment: CardRecruitment;
};

export const Title: FC<Props> = memo((props) => {
  const { recruitment } = props;

  return (
    <Text minH={10} maxH={10} color="gray.700" fontWeight="bold" fontSize={17}>
      {recruitment.title}
    </Text>
  );
});
