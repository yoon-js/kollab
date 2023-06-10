function CampaignCard({ campaignName, campaignCategory }) {

    return (
        <div className="campaign-card">
            <div>
                <div className="campaign-imgbox">
                    <img src="img/img_nullimg.png"/>
                </div>
                <h6 className="campaign-name text-headline-2">{campaignName}</h6>
            </div>
            <div>
                <div className="chip--gray chip--small"><p className="campaign-category">{campaignCategory}</p></div>
            </div>
        </div>
    );
}

export default CampaignCard;