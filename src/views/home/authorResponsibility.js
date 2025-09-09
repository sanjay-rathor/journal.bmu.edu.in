import React from 'react';
import { authenticationService } from '../../services';
import { createBrowserHistory } from 'history';
import SearchBar from '../main/searchbar';
import Nav from 'react-bootstrap/Nav';
import IMAGE_1 from '../../images/D3_jbe-100.jpg';
import STRIP_LOGO from '../../images/Journal_Horizontal_Stip_ Website.png';
import RightSideSection from './rightSideSection';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Badge
} from 'react-bootstrap';
const browserHistory = createBrowserHistory();

export default function AuthorResponsibility() {
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-12">
                <div className="row content-space-around" >
                    <div className="col-md-9 col-sm-12 body-container ">
                        <div className="row">
                        <div className="col-md-12 content-text">
                          <h5  className="content-subtab-title"> Responsibilities of the Corresponding Author</h5>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="subbody-content">
                                <ul class="list-group">
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Managing all communication with the journal editor on behalf of the co-authors and maintaining transparency during the publishing process. </li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Disclosure of potential conflicts of interest at the outset.</li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Giving consent to the journal editor to publish the article at the submission stage. </li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Providing details of authorship (authors’ names and affiliation details) and the sequence of names agreed upon by all the authors. </li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Procuring permissions for the copyrighted text/material used in the work and submitting it to the Journal Editor/s. </li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Signing the Copyright Agreement Form on behalf of all co-authors. </li>
                                </ul>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="subbody-content">
                                    <p>It is the responsibility of the author/s to address and resolve any editorial queries that may come up at the editing stage, keeping into consideration that substantial changes (addition/deletion/rephrasing) in the text are not permitted at that stage. </p>
                                    <p>Post typesetting and layout, the author/s are given a final chance to review the proofs thoroughly and are expected to intimate only the necessary changes required in the article. No major changes in the text or change in placement of tables/figures are allowed at this stage.  </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-md-12 content-text">
                          <h5  className="content-subtab-title"> Copyright Agreement</h5>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="subbody-content">
                                On acceptance of manuscript for publication, the corresponding author is required to submit the filled-in and signed <a  style= {{
                                    "font-weight" : "bold"
                                }}href={"copyrights/Copyright-transfer-agreement-form.docx"} target="_blank">Copyright Agreement Form</a>, giving the sole and exclusive right and license to BML Munjal University to publish the article in Journal of Business, Ethics and Society. A scanned copy of the filled-in and signed <a  style= {{
                                    "font-weight" : "bold"
                                }}href={"copyrights/Copyright-transfer-agreement-form.docx"} target="_blank">Copyright Agreement Form</a> should be sent to the Editor-in-Chief at payalk1@gmail.com
                                </div>
                            </div>
                        </div>
                       
                        <div className="row">
                        <div className="col-md-12 content-text">
                          <h5  className="content-subtab-title"> Publishing Ethics</h5>
                        </div>
                        </div>
                         <div className="row">
                         <div className="col-md-12">
                                <div className="subbody-content">
                                    <p>Journal of Business, Ethics and Society is a member of Committee on Publication Ethics (COPE), which defines a set of recommended core practices that are applicable not only to authors but also editors, publishers and institutions.  </p> <br></br>
                                    <p>A few important practices that the authors must ensure before submitting an article are mentioned below.</p>
                                <ul class="list-group">
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> The submitted work is original and not submitted elsewhere for simultaneous consideration.</li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> All authors have made substantial contributions and have approved the version submitted for publication. Upon request, the authors may be required to send relevant data to substantiate the validity of the results presented in the article. </li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Contributors who do not meet all criteria for authorship are mentioned in the Acknowledgements section. </li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> No changes are made in the authorship, i.e., addition/deletion of authors and Corresponding Author post submission.</li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Names of all authors, their address details (postal as well as email) and current affiliations are clearly mentioned in the article. Corresponding Author’s name and contact details are clearly indicated.  </li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Proper acknowledgement is given for text/material taken from other works and permissions procured for using the copyrighted material.</li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Duplicate or redundant publication or ‘self-plagiarism’ is avoided.</li>
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>•</span> Information regarding sources of funding for conducting research is indicated and declaration of any potential conflicts of interest or competing interests with regard to funding, employment, financial and non-financial interests, etc., is made available at the time of article submission.</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row " >
                        <div className="col-md-12 " >
                             <img  className="strip-image" src={STRIP_LOGO}></img>
                            </div>
                            {/* <div className="col-md-12" >
                                <Badge className="subcribe-btn">SUBSCRIBE</Badge>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-12 d-sm-block">
                        <RightSideSection />
                </div>
                </div>
            </div>
            
        </div>
    );
}

