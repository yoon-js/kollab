import { Form } from "react-router-dom";
import InputField from "../../components/FormElements/input";

function UserSignup() {
    return (
        <div className="container--600">
            <div className="header">
                <h1>Sign up</h1>
            </div>
            <div>
                <Form method="post">
                    <InputField
                        className="field--large"
                        label="Email"
                        id="Email"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        required={true}
                    />
                    <div className="col-2">
                        <InputField
                            className="field--large"
                            label="First name"
                            id="userFirstName"
                            type="text"
                            name="first_name"
                            placeholder="Enter first name"
                            required={true}
                        />
                        <InputField
                            className="field--large"
                            label="Last name"
                            id="userLastName"
                            type="text"
                            name="last_name"
                            placeholder="Enter last name"
                            required={true}
                        />
                    </div>
                    <div className="spacer--40"></div>
                    <InputField
                        className="field--large"
                        label="User name"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        required={true}
                    />
                    <InputField
                        className="field--large"
                        label="Password"
                        id="loginPW"
                        type="password"
                        name="password1"
                        placeholder="Enter password"
                        required={true}
                    />
                    <InputField
                        className="field--large"
                        label="password confirm"
                        id="loginPwConfirm"
                        type="password"
                        name="password2"
                        placeholder="Enter password again"
                        required={true}
                    />
                    <div className="spacer--40"></div>
                    <InputField
                        className="field--large"
                        select={true}
                        label="User Role"
                        id="userRole"
                        name="role"
                        required={true}
                            options={[
                                {value:"CREATOR", label:"Creator"},
                                {value:"BUSINESS", label:"Business"},
                            ]}
                    />
                    <InputField
                        className="field--large"
                        label="Profile image"
                        id="userProfileImg"
                        type="file"
                        name="profile_image"
                    />
                    <div className="spacer--40"></div>
                    <button className="button button--primaryFill" id="signup_submit" type="submit">Signup</button>
                </Form>
            </div>
        </div>
    );
}

export default UserSignup;