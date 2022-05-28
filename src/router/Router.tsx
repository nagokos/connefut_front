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
    element: isLoggedIn ? <RecruitmentNew /> : <Login />,
  },
  {
    path: 'recruitments/:recruitmentId',
    element: <RecruitmentDetails />,
  },
  {
    path: 'dashboard',
    element: <Dashboard />,
  },
];
