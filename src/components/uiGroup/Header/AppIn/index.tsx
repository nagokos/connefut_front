import { Button } from '@chakra-ui/react';
import { FC, memo } from 'react';
import { useNavigate } from 'react-router-dom';

export const AppIn: FC = memo(() => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        onClick={() => navigate('/login')}
        variant="outline"
        px={3.5}
        h={9}
        size="sm"
        fontSize={12.5}
      >
        ログイン
      </Button>
      <Button
        onClick={() => navigate('/signup')}
        fontSize={12.5}
        px={3.5}
        h={9}
        size="sm"
      >
        新規登録
      </Button>
    </>
  );
});
