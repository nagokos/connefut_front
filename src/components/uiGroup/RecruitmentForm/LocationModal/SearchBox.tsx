import { Input } from '@chakra-ui/react';
import { StandaloneSearchBox } from '@react-google-maps/api';
import { FC, memo } from 'react';

type Props = {
  onSBLoad: (ref: google.maps.places.SearchBox) => void;
  onPlacesChanged: () => void;
};

export const SearchBox: FC<Props> = memo((props) => {
  const { onSBLoad, onPlacesChanged } = props;

  return (
    <StandaloneSearchBox onLoad={onSBLoad} onPlacesChanged={onPlacesChanged}>
      <Input
        bg="white"
        h={14}
        _focusVisible={{ boxShadow: 'md' }}
        boxShadow="md"
        fontSize={13}
        _placeholder={{
          color: 'blackAlpha.600',
        }}
        placeholder="検索ワードを入力"
        borderRadius="none"
        borderColor="RGBA(0, 0, 0, 0.06)"
        border="1px solid RGBA(0, 0, 0, 0.06)"
        _hover={{
          border: '1px solid RGBA(0, 0, 0, 0.06)',
        }}
      />
    </StandaloneSearchBox>
  );
});
