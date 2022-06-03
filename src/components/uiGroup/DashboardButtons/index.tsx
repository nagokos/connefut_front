import { FC, memo } from 'react';
import { Recruitments } from './Recruitments';
import { Stocks } from './Stocks';

export const DashboardButtons: FC = memo(() => {
  return (
    <>
      <Recruitments />
      <Stocks />
    </>
  );
});
