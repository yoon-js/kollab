import Business from 'pages/business';
import BusinessDashboard from '../pages/business/business-dashboard';

const BusinessRoute = {
    path: 'business',
    element: <Business />,
    children: [
        {
            path: "dashboard",
            element: <BusinessDashboard />,
        },
    ]
}

export default BusinessRoute;