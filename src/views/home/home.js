import React from 'react';
import {authenticationService} from '../../services';
import { createBrowserHistory } from 'history';
import AppMenu from '../main/appMenu';

const browserHistory = createBrowserHistory();

export default function Home() {
  return (
    <div className="container">
      <div className="row">
          <div className="col-lg-8">
            <AppMenu />
          </div>
      </div>
    </div>
  
  );
}

