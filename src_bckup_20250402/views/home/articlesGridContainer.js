import React from 'react';
import { restService } from '../../services';
import { createBrowserHistory } from 'history';
import SearchBar from '../main/searchbar';
import Nav from 'react-bootstrap/Nav';
import IMAGE_1 from '../../images/D3_jbe-100.jpg';
import STRIP_LOGO from '../../images/Journal_Horizontal_Stip_ Website.png';
import RightSideSection from './rightSideSection';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Badge
} from 'react-bootstrap';
const browserHistory = createBrowserHistory();

export default function ArticlesGrid() {
    const aritlces = restService.getLatestArticles();
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-12">
                <div className="row content-space-around" >
                    <div className="col-md-12 col-sm-12 body-container ">
                      
                        <div className="row" >
                            <div className="col-md-12 " >
                                <img className="strip-image" src={STRIP_LOGO}></img>
                            </div>
                            <div className="col-md-12" >
                                <Badge className="subcribe-btn">SUBSCRIBE</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

