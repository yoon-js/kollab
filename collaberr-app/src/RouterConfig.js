import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/home';
import BusinessDashboard from 'pages/business/business-dashboard';
import CampaignCreate from 'pages/campaign/campaign-create';
import CampaignDetails from 'pages/campaign/campaign-details';
import CampaignMain from 'pages/campaign/campaign-home';
import UserSignup from 'pages/accounts/signup';
import UserLogin from 'pages/accounts/login';
import UserPasswordReset from 'pages/accounts/password-reset';

const RouterConfig = () => {
  return (
    <Routes>
      {/* Navigation for Topnav */}
      <Route path="/" element={<Home />} />

      {/* Navigation for Sidenav */}
      <Route path="dashboard" element={<BusinessDashboard />} />
      <Route path="campaign" element={<CampaignMain />}>
        <Route path="create" element={<CampaignCreate />} />
        <Route path="details/:id" element={<CampaignDetails />} />
      </Route>
      <Route path="signup" element={<UserSignup />} />
      <Route path="login" element={<UserLogin />} />
      <Route path="password-reset" element={<UserPasswordReset />} />
    </Routes>
  );
};

export default RouterConfig;