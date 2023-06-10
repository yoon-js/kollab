import { Form, Link, } from "react-router-dom";
import InputField from "../../components/FormElements/input";

function UserLogin() {

    return (
        <div className="container--600">
            <div className="header">
                <h2>Log In</h2>
                <div className="spacer--12"></div>
                <p>Please login to see this page.</p>
            </div>
            <div>
                <Form method="post">
                    <InputField
                        className="field--large"
                        label="User name"
                        id="loginName"
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        required={true}
                    />
                    <div className="spacer--24"></div>
                    <InputField
                        className="field--large"
                        label="Password"
                        id="loginPw"
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        required={true}
                    />
                    <div className="spacer--40"></div>
                    <button className="button button--primaryFill" id="login_submit" type="submit">Login</button>
                </Form>
                <div className="spacer--20"></div>
                <div className="link-group">
                    <Link to="/account/signup">I'm new</Link>
                    <span>|</span>
                    <Link to="/account/password-reset">Lost password?</Link>
                </div>
            </div>
        </div>
    );
}

export default UserLogin;