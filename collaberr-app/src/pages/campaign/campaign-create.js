import { Form } from "react-router-dom";
import InputField from "../../components/FormElements/input";

function CampaignCreate() {
    return (
        <div className="container--600">
            <div className="header">
                <h2>Create New Campaign</h2>
            </div>
            <div>
                <Form method="post">
                    <InputField
                        className="field--large"
                        label="Campaign name"
                        id="CampaignName"
                        type="text"
                        name="name"
                        placeholder="Enter campaign name"
                        required={true}
                    />
                    <div className="spacer--24"></div>
                    <InputField
                        className="field--xlarge"
                        textarea={true}
                        label="Campaign description"
                        id="campaignDesc"
                        type="text"
                        name="description"
                        placeholder="Briefly describe your campaign (up to 300 characters)"
                        maxLength="300"
                        required={true}
                    />
                    <div className="spacer--24"></div>
                    <div className="col-2">
                        <InputField
                            className="field--large"
                            label="Starting date"
                            id="campaignStartsAt"
                            type="date"
                            name="start_date"
                            placeholder='null'
                            required={true}
                        />
                        <InputField
                            className="field--large"
                            label="End date"
                            id="campaignEndsAt"
                            type="date"
                            name="end_date"
                            placeholder='null'
                            required={true}
                        />
                    </div>
                    <div className="spacer--24"></div>
                    <InputField
                            className="field--large"
                            label="End date"
                            id="campaignBid"
                            type="number"
                            name="bid"
                            placeholder="Select bidding amount"
                            min="0"
                            max="99999"
                            required={true}
                        />
                    <div className="spacer--24"></div>
                    <InputField
                        className="field--large"
                        label="Campaign thumbnail"
                        id="campaignThumb"
                        type="file"
                        name="thumbnail"
                        placeholder="Click to upload image"
                        required={true}
                    />
                    <div className="spacer--24"></div>
                    <InputField
                        className="field--large"
                        label="Category"
                        id="campaignCategory"
                        type="text"
                        name="category"
                        placeholder="Enter category of campaign"
                        required={false}
                    />
                    <div className="spacer--40"></div>
                    <button className="button button--primaryFill" id="campaignCreate_submit" type="submit">Register</button>
                </Form>
                <div className="spacer--80"></div>
            </div>
        </div>
    );
}

export default CampaignCreate;