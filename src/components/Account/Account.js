import React from 'react';

import { PasswordForgetForm } from '../PasswordForget/PassForgot';
import PasswordChangeForm from '../PasswordChange/Password Change';

const AccountPage = () => (
  <div>
    <h1>Account Page</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

export default AccountPage;