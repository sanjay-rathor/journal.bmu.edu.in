import React from "react";

import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();

export default function OpenAccessPolicies() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-12">
        <div className="row content-space-around">
          <div className="col-md-12 col-sm-12 body-container ">
            <div className="row justify-content-md-center ">
              <div className="col-md-10">
                <div className="subbody-coming-soon ">
                  <div>
                    <div className="subbody-content aims ">
                      <p>
                        <em>Journal of Business, Ethics and Society (JBES)</em> is a
                        <strong> Diamond Open Access Journal</strong> committed
                        to the principles of the{" "}
                        <strong>
                          <a
                            href="https://www.budapestopenaccessinitiative.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Budapest Open Access Initiative (BOAI, 2001)
                          </a>
                        </strong>
                        . In order to ensure freely available, scholar-led
                        research for wider dissemination of knowledge, the
                        articles in this journal are freely accessible to
                        readers.
                      </p>
                      <p>
                        Furthermore, for researchers submitting articles there
                        are no Article Processing Charges (APCs) for submission
                        or publication of articles. JBES is supported through
                        institutional and editorial contributions to ensure
                        quality and accessibility without financial barriers.
                      </p>
                      <p>
                        JBES also follows the Creative Commons Attribution (CC
                        BY 4.0) License. This allows anyone to share and adapt
                        the published work, provided proper credit is given to
                        the original author(s) and source, a link to the license
                        is included, and any changes are indicated:
                       <strong> <a
                          href="https://creativecommons.org/licenses/by/4.0/"
                          target="_blank"
                        >
                          https://creativecommons.org/licenses/by/4.0/
                        </a></strong>
                      </p>
                      <p>
                        JBES is also fully compliant with the UGC circular
                        suggesting parameters for choosing peer-reviewed
                        journal, dated July 16, 2025.
                      </p>
                      <hr />
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
