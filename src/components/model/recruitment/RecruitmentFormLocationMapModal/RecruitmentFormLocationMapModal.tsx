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
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { RecruitmentInput } from '../../../views/__generated__/RecruitmentNewView_CreateRecruitmentMutation.graphql';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  watch: UseFormWatch<RecruitmentInput>;
  setValue: UseFormSetValue<RecruitmentInput>;
};

type Libraries = ['places'];
const libraries: Libraries = ['places'];
const googleMapApiKey: string = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

export const RecruitmentFormLocationMapModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, watch, setValue } = props;

  const watchLat = watch('locationLat');
  const watchLng = watch('locationLng');

  const [searchBox, setSearchBox] =
    useState<google.maps.places.SearchBox | null>(null);
  const [location, setLocation] = useState({
    lat: watchLat ? watchLat : 35.69575,
    lng: watchLng ? watchLng : 139.77521,
  });

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const clickMap = (e: google.maps.MapMouseEvent) => {
    setLocation({
      lat: Number(e.latLng?.lat()),
      lng: Number(e.latLng?.lng()),
    });
  };

  const onSBLoad = (ref: google.maps.places.SearchBox) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    const location = searchBox?.getPlaces()?.shift()?.geometry?.location;
    if (location) {
      setLocation({
        lat: location.lat(),
        lng: location.lng(),
      });
    }
  };

  const setLatLng = () => {
    setValue('locationLat', location.lat);
    setValue('locationLng', location.lng);
    onClose();
  };

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
              center={location}
              zoom={16}
              onClick={clickMap}
            >
              <StandaloneSearchBox
                onLoad={onSBLoad}
                onPlacesChanged={onPlacesChanged}
              >
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
              <Marker position={location} />
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
                  fontSize={22}
                  border="1px solid RGBA(0, 0, 0, 0.06)"
                  rounded="full"
                  size="lg"
                  w={14}
                  h={14}
                  boxShadow="lg"
                  left={3}
                  onClick={setLatLng}
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
                />
              </Tooltip>
            </GoogleMap>
          </LoadScript>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
