import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CampaignCard from "../../components/CampaignCard";
import CampaignData from "../../api/campaignData";


function CampaignMain() {

    const navigateTo = useNavigate();
    const campaignData = useState(CampaignData);

    const renderCampaignCard = () => {
        return (
            CampaignData.map((campaign) => (
                <Link to={`details/${campaign.id}`}>
                    <CampaignCard
                        campaignName={campaign.name}
                        campaignCategory={campaign.category}
                    />
                </Link>
            ))
        )
    };


    return (
        <div className="container--1080">
            <div className="header">
                <h2>Campaigns</h2>
            </div>
            <div className="spacer--40"></div>
            <div className="campaign-header">
                <h3>Campaign List</h3>
                <button onClick={() => { navigateTo('create') }} className="button button--primaryFill button--xsmall">Create new</button>
            </div>
            <div className="spacer--40"></div>
            <div className="all-campaigns">
                {renderCampaignCard()}
            </div>
            <div className="spacer--80"></div>
        </div>
    );
}

export default CampaignMain;