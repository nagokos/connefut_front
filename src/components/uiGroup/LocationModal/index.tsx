import {
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tooltip,
} from '@chakra-ui/react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  StandaloneSearchBox,
} from '@react-google-maps/api';
import { FC, memo, useState } from 'react';

import { MdOutlineAddLocationAlt } from 'react-icons/md';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type Libraries = ['places'];
const libraries: Libraries = ['places'];

export const LocationModal: FC<Props> = memo((props) => {
  const { isOpen, onClose } = props;
  const [lagLng, setLatLng] = useState({
    lat: 35.69575,
    lng: 139.77521,
  });

  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const clickMap = (e: google.maps.MapMouseEvent) => {
    setLatLng({ lat: Number(e.latLng?.lat()), lng: Number(e.latLng?.lng()) });
  };

  const onPlacesChanged = () => {
    const location = searchBox?.getPlaces()?.shift()?.geometry?.location;

    if (location) {
      setLatLng({
        lat: Number(location?.lat()),
        lng: Number(location?.lng()),
      });
    }
  };

  const onSBLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const googleMapApiKey: string = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent pb={4} pt={1} borderRadius="lg">
        <ModalHeader fontSize={21}>会場マップを登録</ModalHeader>
        <ModalCloseButton mt={2} />
        <ModalBody>
          <LoadScript libraries={libraries} googleMapsApiKey={googleMapApiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={lagLng}
              zoom={16}
              onClick={clickMap}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <StandaloneSearchBox
                onLoad={onSBLoad}
                onPlacesChanged={onPlacesChanged}
              >
                <Input
                  bg="white"
                  h={14}
                  _focus={{ boxShadow: 'md' }}
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
              <Marker position={lagLng} />
              <Tooltip
                borderRadius="md"
                label="登録する"
                fontSize={11}
                px={2.5}
                py={1}
                hasArrow
                placement="top"
              >
                <IconButton
                  aria-label="icon"
                  icon={<MdOutlineAddLocationAlt />}
                  position="absolute"
                  bottom={7}
                  color="red.500"
                  bg="white"
                  _hover={{
                    bg: '#F7FAFC',
                    boxShadow: 'lg',
                  }}
                  _active={{
                    bg: '#F7FAFC',
                    boxShadow: 'lg',
                  }}
                  _focus={{
                    bg: '#F7FAFC',
                    boxShadow: 'lg',
                  }}
                  fontSize={22}
                  border="1px solid RGBA(0, 0, 0, 0.06)"
                  rounded="full"
                  size="lg"
                  w={14}
                  h={14}
                  boxShadow="lg"
                  left={3}
                />
              </Tooltip>
            </GoogleMap>
          </LoadScript>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
