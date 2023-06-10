import Accounts from 'pages/accounts';
import UserPasswordReset from '../pages/accounts/password-reset';

const AccountRoute = {
    path: 'account',
    element: <Accounts />,
    children: [
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