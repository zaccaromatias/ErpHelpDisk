import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import * as routes from '../constants/routes';

import { auth } from '../firebase';
 
const SignOutButton = ({ history }) =>
    <SignOutButtonInternal history={history}/>

class SignOutButtonInternal extends Component {
    constructor(props) {
      super(props);
  
      
    }
  
    doSignOut= () => {
        const {
            history,
          } = this.props;
        auth.doSignOut()
        .then(() => {        
            history.push(routes.LANDING);
          });
    }
  
    render() {
      return (
        <button type="button" onClick={this.doSignOut}>
        Sign Out
        </button>
      );
    }
  }


  

  export default withRouter(SignOutButton);