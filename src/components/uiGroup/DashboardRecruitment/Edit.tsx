import { IconButton, Tooltip } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: string;
};

export const Edit: FC<Props> = memo((props) => {
  const { id } = props;

  const navigate = useNavigate();

  return (
    <Tooltip
      label="編集する"
      rounded={4}
      fontSize={11}
      hasArrow
      arrowSize={8}
      py={0.5}
    >
      <IconButton
        icon={<MdOutlineModeEditOutline />}
        size="sm"
        aria-label="edit"
        rounded="full"
        bg="white"
        fontSize={16}
        color="blackAlpha.500"
        onClick={() => navigate(`/recruitments/${id}/edit`)}
        _hover={{
          bg: 'blackAlpha.50',
        }}
        _active={{
          bg: 'blackAlpha.50',
        }}
      />
    </Tooltip>
  );
});
