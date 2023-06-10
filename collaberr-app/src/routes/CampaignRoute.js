import Campaign from 'pages/campaign';
import CampaignMain from "../pages/campaign/campaign-home";
import CampaignCreate from "../pages/campaign/campaign-create";
import CampaignDetails from "../pages/campaign/campaign-details";


const CampaignRoute = {
        path: "campaign",
        element: <Campaign />,
        children: [
            {
                index: 'true',
                element: <CampaignMain />
            },
            {
                path: "create",
                element: <CampaignCreate />
            },
            {
                path: "details/:id",
                element: <CampaignDetails />
            },
        ],
    }

export default CampaignRoute