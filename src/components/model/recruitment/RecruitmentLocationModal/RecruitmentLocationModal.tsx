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
import { useFragment } from 'react-relay';
import { graphql } from 'relay-runtime';
import { RecruitmentLocationModal_recruitment$key } from './__generated__/RecruitmentLocationModal_recruitment.graphql';

const locationModalFragment = graphql`
  fragment RecruitmentLocationModal_recruitment on Recruitment {
    locationLat
    locationLng
  }
`;

type Props = {
  isOpen: boolean;
  onClose: () => void;
  recruitment: RecruitmentLocationModal_recruitment$key;
};

const googleMapApiKey: string = import.meta.env.VITE_GOOGLE_MAP_API_KEY;

export const RecruitmentLocationModal: FC<Props> = memo((props) => {
  const { isOpen, onClose, recruitment } = props;

  const containerStyle = {
    width: '400px',
    height: '400px',
  };

  const recruitmentData = useFragment<RecruitmentLocationModal_recruitment$key>(
    locationModalFragment,
    recruitment
  );

  const location = {
    lat: Number(recruitmentData.locationLat),
    lng: Number(recruitmentData.locationLng),
  };

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
              center={location}
              zoom={16}
            >
              <Marker position={location} />
            </GoogleMap>
          </LoadScript>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
