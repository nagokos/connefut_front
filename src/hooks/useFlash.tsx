import {
  Box,
  CloseButton,
  ScaleFade,
  Spacer,
  useToast,
} from '@chakra-ui/react';
import { useCallback } from 'react';
import { MdCheck } from 'react-icons/md';
import { IoAlertCircleSharp } from 'react-icons/io5';

type Props = {
  title: string;
  status: 'info' | 'warning' | 'success' | 'error';
};

export const useFlash = () => {
  const toast = useToast();

  const showFlash = useCallback(
    (props: Props) => {
      const { title, status } = props;

      if (!toast.isActive(title)) {
        toast.closeAll();
        toast({
          id: title,
          title,
          status,
          position: 'bottom-right',
          duration: 5000,
          isClosable: true,
          render: ({ onClose }) => (
            <ScaleFade in={true}>
              <Box
                mr={5}
                color="white"
                p={3}
                px={4}
                mb={5}
                bg="gray.800"
                borderRadius="md"
                boxShadow="md"
                display="flex"
                alignItems="center"
              >
                {status === 'success' ? (
                  <MdCheck fontSize={22} color="#009688" />
                ) : (
                  <IoAlertCircleSharp fontSize={22} color="#f42121" />
                )}

                <Box ml={3} as="span" fontSize={13} fontWeight="bold">
                  {title}
                </Box>
                <Spacer />
                <CloseButton
                  size="sm"
                  ml={3}
                  fontSize={9}
                  _hover={{ bg: 'none' }}
                  _active={{ bg: 'none' }}
                  onClick={onClose}
                />
              </Box>
            </ScaleFade>
          ),
        });
      }
    },
    [toast]
  );

  return { showFlash };
};
