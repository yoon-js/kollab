import { Form } from "react-router-dom";
import InputField from "../../components/FormElements/input";

function UserSignup() {
    return (
        <div className="container--600">
            <div className="header">
                <h2>Sign up</h2>
            </div>
            <div>
                <Form method="post">
                <InputField
                        className="field--large"
                        label="Name"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your name"
                        required={true}
                    />
                    <InputField
                        className="field--large"
                        label="Email"
                        id="Email"
                        type="email"
                        name="email"
                        placeholder="Enter email address"
                        required={true}
                    />
                    <div className="spacer--24"></div>
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
                        label="Confirm Password"
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
                    <div className="spacer--40"></div>
                    <button className="button button--primaryFill" id="signup_submit" type="submit">Signup</button>
                </Form>
            </div>
        </div>
    );
}

export default UserSignup;