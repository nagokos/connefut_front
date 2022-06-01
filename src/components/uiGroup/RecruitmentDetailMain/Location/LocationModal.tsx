import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { FC, memo } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  lat: number;
  lng: number;
};

const googleMapApiKey: string = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

export const LocationModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, lat, lng } = props;

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const latLng = { lat: lat, lng: lng };

  return (
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="rgba(0, 0, 0, 0.22)" />
      <ModalContent pb={4} pt={1} borderRadius="lg">
        <ModalHeader fontSize={21}>会場マップ</ModalHeader>
        <ModalCloseButton mt={2} />
        <ModalBody>
          <LoadScript googleMapsApiKey={googleMapApiKey}>
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={latLng}
              zoom={16}
            >
              <Marker position={latLng} />
            </GoogleMap>
          </LoadScript>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
