import React from 'react';
import { restService } from '../../services';
import { createBrowserHistory } from 'history';
import SearchBar from '../main/searchbar';
import Nav from 'react-bootstrap/Nav';
import IMAGE_1 from '../../images/D3_jbe-100.jpg';
import RightSideSection from './rightSideSection';
import ArticlesGridContainer from './articlesGridContainer';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,Badge
} from 'react-bootstrap';
const browserHistory = createBrowserHistory();

export default function AimScope() {
   
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-12">
                <div className="row content-space-around" >
                    <div className="col-md-12 col-sm-12 body-container ">
                        <div className="row justify-content-md-center ">
                            <div className="col-md-10">
                                <div className="subbody-coming-soon ">
                        <div >
                            <div className="subbody-content aims " >
                                <span>Journal of Business, Ethics and Society (JBES) is an inter-disciplinary peer-reviewed international journal that publishes theoretical and empirical research on a broad range of topics concerning business management, business ethics and societal well-being. The double-blind peer-reviewed journal broadly focuses on the intersectionality of ethics and businesses, ethics and civil societies, and also on topics such as corporate social responsibility, social entrepreneurship and power relationships. Addressing the need for an ethical response to the emerging challenges and trends in management, and also challenges in society (such as pandemics, and world recession) which impact ethical decisions and behaviour, articles can range from how a pandemic can lead to ethical dilemmas for leaders in the medical profession; to how a leader indulging in greenwashing, or providing misleading information about so-called environmentally-sound products, could actually be harming the environment. JBES is a bridge journal, exploring issues of interest to both researchers as well as industry leaders and HRM professionals. As such this journal provides a forum for deliberations and exchange of ideas and knowledge among academia, businesses, public institutions, not-for-profit institutions and government organizations. The journal has an international focus and welcomes research from all regions of the world.</span>
                                <hr/>
                                <h3>JBES peer review process</h3>
                                <ul>
                                    <li>Once a paper is submitted it is analyzed to see whether it fits into the Aims and Scope of the paper. If not, the paper desk rejected. </li>
                                    <li>If yes, then it is sent out to two peer reviewers for their comments and decisions. </li>
                                    <li>The Editor-in-Chief goes through the paper and also the peer review comments and makes a decision on whether to i. Accept with no revisions ii. Accept with minor/major revisions iii. Reject.</li>
                                </ul>
                                <h3>List of Reviewers</h3>
                                <ul>
                                    <li>Prof Patch Aure, Director of PHINMA-DLSU Center for Business and Society | Associate Professor (DMO/MOD) | De La Salle University, Philippines</li>
                                    <li>Prof Elva Resendez, Purdue University, USA</li>
                                    <li>Prof. Dewasiri N. Jayantha, CMgr FCMI<br/>
                                    Professor in Finance - Sabaragamuwa University, Sri Lanka</li>
                                <li>Prof Aditya Agrawal  <br/>
                                Assistant Professor, FLAME University, Pune, India</li>
                                </ul>
                                <p>Our editorial board advisors are leading scholars from universities around the world including Fordham University, USA and Tel Aviv University, Israel. Most of our submissions are also from scholars around the world who are interested in business, ethics and societal issues. </p>
                                <p>We do not accept any payment for publication, and we respect guidelines from the Committee on Publication Ethics (COPE). Editorial rigour and the dissemination of new knowledge is a priority for us. </p>
                                {/* <div class="col-md-12 custom-padding"><a href="journal-files/Editorial.pdf" target="_blank"><span class="side-heading badge badge-primary">Download  Peer Reviwer Form</span></a></div> */}
                            </div>
                        </div>
                        {/* <div className="row " >
                            <div className="col-md-12">
                               <ArticlesGridContainer />
                            </div>
                        </div> */}
                    </div>
                    {/* <div className="col-md-3 col-sm-12 d-sm-block">
                        <RightSideSection />
                    </div> */}
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
}

