import { Navigate } from 'react-router-dom';
import {
  Home,
  Login,
  SignUp,
  RecruitmentDetails,
  RecruitmentNew,
  Dashboard,
  DashboardRecruitments,
  DashboardStocks,
  RecruitmentEdit,
  Messages,
} from '../pages';
import { DashboardApplied } from '../pages/DashboardApplied';

export const routes = (isLoggedIn: boolean) => [
  {
    path: '/recruitments',
    element: <Home />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'recruitments/new',
    element: isLoggedIn ? <RecruitmentNew /> : <Navigate to="/login" />,
  },
  {
    path: 'recruitments/:recruitmentId/edit',
    element: isLoggedIn ? <RecruitmentEdit /> : <Navigate to="login" />,
  },
  {
    path: 'recruitments/:recruitmentId',
    element: <RecruitmentDetails />,
  },
  {
    path: 'dashboard',
    element: isLoggedIn ? <Dashboard /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <DashboardRecruitments /> },
      { path: 'applied', element: <DashboardApplied /> },
      { path: 'stocks', element: <DashboardStocks /> },
    ],
  },
  {
    path: 'messages',
    element: isLoggedIn ? <Messages /> : <Navigate to="/login" />,
  },
];
