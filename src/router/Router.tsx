import { Home, Login, SignUp } from '../pages';

export const routes = () => [
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
];
