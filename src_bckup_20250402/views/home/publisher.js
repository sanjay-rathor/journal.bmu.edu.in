import React from "react";
import { createBrowserHistory } from "history";
const browserHistory = createBrowserHistory();
export default function Publisher() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-12">
        <div className="row content-space-around">
          <div className="col-md-12 col-sm-12 body-container ">
            <div className="row justify-content-md-center ">
              <div className="col-md-10">
                <div className="subbody-coming-soon">
                  <div className="subbody-content aims container">
                    <div>
                      <p className="header">
                        <strong>BML Munjal University</strong>
                        <br />
                        <span>67th Milestone, National Highway - 8 Sidhrawali, </span><br/>
                        <span>Gurugram, Haryana -122413</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
