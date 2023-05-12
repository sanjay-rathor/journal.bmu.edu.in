import React from "react";
import { authenticationService } from "../../services";
import { createBrowserHistory } from "history";
import SearchBar from "../main/searchbar";
import Nav from "react-bootstrap/Nav";
import IMAGE_1 from "../../images/D3_jbe-100.jpg";
import RightSideSection from "./rightSideSection";
import InternaionalEditors from "../../editors.json";
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

export default function AdvisoryBoard() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-12">
        <div className="row content-space-around">
          <div className="col-md-9 col-sm-12 body-container ">
            <div className="row">
              <div className="col-md-12 content-text">
                <h5>Advisory Board</h5>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12 ">
                <div className="divider"></div>
              </div>
              <div className="col-md-12">
                <div className="list-group">
                  {InternaionalEditors.map(function (item, index) {
                    return (
                      <div className="list-group-item flex-column align-items-start ">
                        <div className="d-flex w-100 justify-content-between name-box">
                          <h5 className="mb-1">{item.name}</h5>
                        </div>
                        <p className="mb-1 editor-about">{item.description}</p>
                        <p className="mb-1 editor-about">{item.email}</p>
                      </div>
                    );
                  })}
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
