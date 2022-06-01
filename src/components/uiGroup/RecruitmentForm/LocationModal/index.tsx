import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FC, memo, useState } from 'react';
import { UseFormSetValue, UseFormWatch } from 'react-hook-form';

import { RecruitmentInput } from '../../../../generated/graphql';
import { RegisterButton } from './RegisterButton';
import { SearchBox } from './SearchBox';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  watch: UseFormWatch<RecruitmentInput>;
  setValue: UseFormSetValue<RecruitmentInput>;
};

type Libraries = ['places'];
const libraries: Libraries = ['places'];
const googleMapApiKey: string = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

export const LocationModal: FC<Props> = memo((props) => {
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
              <SearchBox
                onPlacesChanged={onPlacesChanged}
                onSBLoad={onSBLoad}
              />
              <Marker position={location} />
              <RegisterButton setLatLng={setLatLng} />
            </GoogleMap>
          </LoadScript>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
