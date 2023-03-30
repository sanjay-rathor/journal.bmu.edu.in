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

export default function ContactUs() {
   
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
                                <span>Journal of Business, Ethics and Society (JBES) is an inter-disciplinary peer-reviewed journal that publishes theoretical and empirical research on a broad range of topics concerning business management, business ethics and societal well-being. The double-blind peer-reviewed journal broadly focuses on the intersectionality of ethics and businesses, ethics and civil societies, and also on topics such as corporate social responsibility, social entrepreneurship and power relationships. Addressing the need for an ethical response to the emerging challenges and trends in management, and also challenges in society (such as pandemics, and world recession) which impact ethical decisions and behaviour, articles can range from how a pandemic can lead to ethical dilemmas for leaders in the medical profession; to how a leader indulging in greenwashing, or providing misleading information about so-called environmentally-sound products, could actually be harming the environment. JBES is a bridge journal, exploring issues of interest to both researchers as well as industry leaders and HRM professionals. As such this journal provides a forum for deliberations and exchange of ideas and knowledge among academia, businesses, public institutions, not-for-profit institutions and government organizations. The journal has an international focus and welcomes research from all regions of the world.
                                </span>
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

