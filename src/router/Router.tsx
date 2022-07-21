import { Navigate } from 'react-router-dom';
import {
  Home,
  Login,
  SignUp,
  RecruitmentNew,
  Dashboard,
  Recruitment,
  DashboardRecruitments,
  DashboardStocked,
  RecruitmentEdit,
  Messages,
  MessagesRoom,
} from '../components/pages';
import { DashboardApplied } from '../components/pages/DashboardApplied';
import { User } from '../components/pages/User';

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
    element: <Recruitment />,
  },
  {
    path: 'dashboard',
    element: isLoggedIn ? <Dashboard /> : <Navigate to="/login" />,
    children: [
      { path: '/dashboard', element: <DashboardRecruitments /> },
      { path: 'applied', element: <DashboardApplied /> },
      { path: 'stocked', element: <DashboardStocked /> },
    ],
  },
  {
    path: 'messages',
    element: isLoggedIn ? <Messages /> : <Navigate to="/login" />,
    children: [{ path: ':roomId', element: <MessagesRoom /> }],
  },
  {
    path: 'id/:user_id',
    element: <User />,
  },
];
