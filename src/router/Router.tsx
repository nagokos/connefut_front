import { Navigate } from 'react-router-dom';
import {
  Home,
  Login,
  SignUp,
  RecruitmentDetails,
  RecruitmentNew,
  Dashboard,
} from '../pages';

export const routes = (isLoggedIn: boolean) => [
  {
    path: '/',
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
    path: 'recruitments/:recruitmentId',
    element: <RecruitmentDetails />,
  },
  {
    path: 'dashboard',
    element: isLoggedIn ? <Dashboard /> : <Navigate to="/login" />,
  },
];
