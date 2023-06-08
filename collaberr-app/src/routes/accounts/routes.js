import Accounts from '../../pages/accounts/accounts';
import UserLogin from '../../pages/accounts/login';
import UserSignup from '../../pages/accounts/signup';
import UserPasswordReset from '../../pages/accounts/password-reset';

const AccountRoute = {
    path: 'account',
    element: <Accounts />,
    children: [
        {
            path: "signup",
            element: <UserSignup />,
        },
        {
            path: "login",
            element: <UserLogin />,
        },
        {
            path: "password-reset",
            element: <UserPasswordReset />,
            children: [
                {
                    path: "success",
                    element: null,
                },
                {
                    path: "fail",
                    element: null,
                },
            ]
        },
    ]
}

export default AccountRoute;