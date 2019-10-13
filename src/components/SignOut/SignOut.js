import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { withRouter,Redirect  } from 'react-router-dom';
import { compose } from 'recompose';


const SignOutPage = () => (
  <div>
    <SignoutX />
  </div>
);

class SignOutBase extends Component {
  constructor(props) {
    super(props);
  }
  signout = event => {
    this.props.firebase.doSignOut();
    alert("Successfully logged Out!");
    this.props.history.push('/signin')
  };
  render(){
    return(
        <button type="button" onClick={this.signout}>
          Sign Out
        </button>
    );
  }
}
const SignoutX = compose( withRouter,withFirebase)(SignOutBase);
export default withFirebase(SignOutPage);
export { SignoutX };