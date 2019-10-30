import React from 'react';

import {withAuthorization} from '../Session';

const HomePage = () => (
  <div>
    <h1>We Be Home</h1>
    <p>The home page is accessible from signed in users</p>
  </div>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(HomePage);