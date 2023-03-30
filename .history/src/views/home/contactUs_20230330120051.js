import React from "react";
import { restService } from "../../services";
import { createBrowserHistory } from "history";
import SearchBar from "../main/searchbar";
import Nav from "react-bootstrap/Nav";
import IMAGE_1 from "../../images/D3_jbe-100.jpg";
import RightSideSection from "./rightSideSection";
import ArticlesGridContainer from "./articlesGridContainer";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
} from "react-bootstrap";
const browserHistory = createBrowserHistory();

export default function ContactUs() {
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
                    <h2>Dr. Jaydev B Kumbar</h2>
                    <h3>Deputy Librarian</h3>
                    <h3></h3>
                    Email-Library@bmu.edu.in
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
