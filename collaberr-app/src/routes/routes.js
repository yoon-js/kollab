import App from '../App';
import Home from '../pages/home/home';
import BusinessRoute from "./business/routes";
import CampaignRoute from "./campaign/routes";
import AccountRoute from "./accounts/routes";
  
export const RootRouter = [
    {
      path: "/",
      element: <App />,
      errorElement: <div>404: Not Found</div>,
      children: [
        { 
          index: 'true',
          element: <Home />
        },
        CampaignRoute,
        BusinessRoute,
        AccountRoute,
      ]
    }
  ]
  