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

export default function RightAndPermission() {
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-12">
                <div className="row content-space-around" >
                    <div className="col-md-9 col-sm-12 body-container ">
                        <div className="row">
                        <div className="col-md-12">
                           
                        <div className="row">
                        <div className="col-md-12 content-text">
                          <h5  className="content-subtab-title"> <span>Frequently Asked Questions by Authors</span></h5>
                        </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="subbody-content">
                                <ul class="list-group">
                                  <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>1. 
                                   Do I need permission to post my article on my personal website?  </span>
                                   <br></br> <br></br>
                                   <span >
                                    After the article has been published, if the author wants to upload the paper abstract to a personal website, the author needs to add the following text.
                                    “This is an original manuscript of an article published by BML Munjal University in Journal of Business, Society & Ethics on DATE, available on LINK.”
                                     <br></br>               
                                    The author is not permitted to upload the PDF of the “final published” version on the website.
                                   </span>
                                   </li>
                                   <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>
                                       2. When can I post my article on my institutional repository or archives?  </span>
                                   <br></br> <br></br>
                                   <span >
                                    The author may upload the “accepted” version or the peer-reviewed version of the article on the author’s institutional repository or any other not-for-profit subject-based repositories 18 months (Embargo period) after the article has been published in the journal. 
                                    <br></br>               
                                    The author is required to procure permission from BML Munjal University (email address) to upload the “final published” version of the article on the institutional repository or archives.
                                   </span>
                                   </li>
                                   <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>
                                       3. Can I include my published article in my thesis or upcoming book?  </span>
                                   <br></br> <br></br>
                                   <span >
                                    Yes, the authors may reuse the “final published” version of the article or extracts from the article in their own dissertation or thesis or book (with a later publication date) provided they attribute/cite the published article giving all the details such as Article Title, Journal Title, Journal Volume and Issue Number, Page Range, Copyright Holder and DOI.  You need to inform us about this at Email Address.
                                     <br></br>               
                                     However, short extracts of text of up to 40 words may be included without procuring formal permission, when the objective is scholarly criticism or review, for which the text needs to be reproduced accurately within quotation marks with complete citation and page details. <br></br>
                                     It is the responsibility of the author to procure all the permissions before the article submission stage. 
                                    </span>
                                   </li>
                                   <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>
                                       4. Do I need permission to get my article translated into another language? </span>
                                   <br></br> <br></br>
                                   <span >
                                   Yes, the Copyright Agreement Form signed by the author gives the exclusive right to BML Munjal University to reproduce and distribute the article, including reprints and translations. For permissions related to translations, email should be sent. 
                                    </span>
                                   </li>
                                   <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>
                                       5. Is it mandatory to procure permission to use third-party material in my article? </span>
                                   <br></br> <br></br>
                                   <span >
                                   Yes, it is necessary to procure written permission to include text, illustrations, maps, tables, photographs, etc., owned and held in copyright by a third party.                            
                                     <br></br>               
                                    The author is not permitted to upload the PDF of the “final published” version on the website.
                                   </span>
                                   </li>
                                   <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>
                                       6. Can I share the “final published” version of my article for teaching purposes or with my research colleagues? </span>
                                   <br></br> <br></br>
                                   <span >
                                    Yes, the author may provide the “final published” version of the article to the students or use it for teaching purposes. The author may also provide the same to research colleagues at an academic institution on a not-for-profit basis and present it at meetings or conferences. 
                                    </span>
                                   </li>
                                   <li class="list-group-item"><span style={{fontWeight:700, paddingRight: 2}}>
                                       7. Do I need permission to use content which is available in public domain? </span>
                                   <br></br> <br></br>
                                   <span >
                                   The authors are advised to ensure that the content being used in their article is not held in copyright by a third party. In case the content is copyright-free and is available in public domain, the authors are still advised to attribute appropriately (including the date of download). 
                                    </span>
                                   </li>
                                   <li style={{
                                           "marginTop" : 16
                                       }}>
                                       <span > 
                                           In case of any violation, BML Munjal University reserves its right to claim for any damages that has been accrued.
                                        </span>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
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

