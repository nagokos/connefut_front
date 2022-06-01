import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { LocationModal } from './LocationModal';

type Props = {
  lat: number;
  lng: number;
};

export const Location: FC<Props> = memo((props) => {
  const { lat, lng } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" fontSize={14} minW={130} />
        <Button
          variant="outline"
          mt={2}
          px={2}
          fontSize={5}
          size="sm"
          h={7}
          boxShadow="sm"
          color="primary.main"
          onClick={onOpen}
        >
          マップを見る
        </Button>
      </Box>
      <LocationModal lat={lat} lng={lng} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
