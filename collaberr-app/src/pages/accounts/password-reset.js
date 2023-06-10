import { Form } from "react-router-dom";

function UserPasswordReset(){
    
    return (
        <div className="container--600">
            <div className="header">
                <h2>Reset Password</h2>
                <div className="spacer--12"></div>
                <p>Please enter your Email to reset password</p>
            </div>
            <div>
            <Form method="post">
                <div className="field-group">
                    <label htmlFor="loginName">User name</label>
                    <input 
                        className="field--large" 
                        id="loginName" 
                        type="text" 
                        name="username" 
                        placeholder="Enter username"
                        required />
                    <p></p>
                </div>
                <div className="spacer--40"></div>
                <button className="button button--primaryFill" type="submit" value={'reset password'}>Reset Password</button>
            </Form>
            <div className="spacer--80"></div>
        </div>
        </div>
    );
}

export default UserPasswordReset;