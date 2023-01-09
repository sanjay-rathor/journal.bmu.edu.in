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
    CardTitle, CardSubtitle, Badge
} from 'react-bootstrap';
const browserHistory = createBrowserHistory();

export default function ContentCard() {
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-12">
                Hi
            </div>

        </div>
    );
}

