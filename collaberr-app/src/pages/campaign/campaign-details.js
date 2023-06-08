import { useNavigate, useParams } from "react-router-dom";
import CampaignData from "../../api/campaignData";

function CampaignDetails() {

    const navigateTo = useNavigate;

    const { id } = useParams();
    const campaign = CampaignData[id];
    const {
        category,
        name,
        startDate,
        endDate,
        description,
        thumbnail,
        bid, } = campaign;
    

    return (
        <div className="container--600">
            <div className="header">
                <div className="campaignView-imgbox">
                    <img src={ thumbnail } alt="img"/>
                </div>
            </div>
            <p className="campaignView-category">{ category }</p>
            <h2 className="camapaignView-name text-headline-1">{ name }</h2>
            <p className="campaignView-date">{ startDate } - { endDate }</p>
            <div className="campaignView-description">
                <p>{ description }</p>
            </div>
            <div className="spacer--80"></div>
            <div className="campaignView-bid">
                <h3>${ bid }</h3>
                <button onClick={() => navigateTo('#')} className="button button--primaryFill button--small" role="button">Join campaign</button>
            </div>
            <div className="spacer--80"></div>
        </div>
    );
}

export default CampaignDetails;