import App from '../App';
import Home from '../pages/home/home';

import BusinessRoute from './BusinessRoute';
import CampaignRoute from './CampaignRoute';
import AccountRoute from './AccountRoute';

import UserLogin from 'pages/accounts/login';
import UserSignup from 'pages/accounts/signup';
import { createBrowserRouter } from 'react-router-dom';

export const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404: Not Found</div>,
    children: [
      {
        index: 'true',
        element: <Home />
      },
      {
        path: "signup",
        element: <UserSignup />,
      },
      {
        path: "login",
        element: <UserLogin />,
      },
      CampaignRoute,
      BusinessRoute,
      AccountRoute,
    ]
  }
]);
