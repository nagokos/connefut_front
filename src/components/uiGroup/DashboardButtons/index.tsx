import { FC, memo } from 'react';
import { Applies } from './Applies';
import { Recruitments } from './Recruitments';
import { Stocks } from './Stocks';

export const DashboardButtons: FC = memo(() => {
  return (
    <>
      <Recruitments />
      <Applies />
      <Stocks />
    </>
  );
});
