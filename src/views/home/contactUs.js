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
                <div className="subbody-coming-soon">
                  <div className="subbody-content aims container">
                    <div>
                      <p className="header">
                        <strong>Librarian</strong>
                        {/* <br />
                        <span>Deputy Librarian</span> */}
                      </p>
                      <h4>BML Munjal University</h4>
                      <h4>
                        <a href="mailto:Library@bmu.edu.in">
                          library@bmu.edu.in
                        </a>
                      </h4>
                    </div>
                  </div>
                  {/* <div className="row">
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
