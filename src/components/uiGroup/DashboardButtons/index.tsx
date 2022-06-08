import { FC, memo } from 'react';
import { Applied } from './Applied';
import { Recruitments } from './Recruitments';
import { Stocks } from './Stocks';

export const DashboardButtons: FC = memo(() => {
  return (
    <>
      <Recruitments />
      <Applied />
      <Stocks />
    </>
  );
});
