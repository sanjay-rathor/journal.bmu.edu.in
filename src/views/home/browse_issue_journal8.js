import React from "react";
import { authenticationService } from "../../services";
import { createBrowserHistory } from "history";
import ISSUES_LIST from "../../journals/issue-8/issueList8.json";
import SearchBar from "../main/searchbar";
import Nav from "react-bootstrap/Nav";
import PDFICON from "../../images/pdf.svg";
import STRIP_LOGO from "../../images/Journal_Horizontal_Stip_ Website.png";
import RightSideSection from "./rightSideSection";

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

export default function BrowseJournal() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-12">
        <div className="row content-space-around">
          <div className="col-md-12 col-sm-12 body-container ">
            <div className="row">
              <div className="col-md-5 content-text"></div>
              <div className="col-md-6 content-text">
                <h5 className="content-tab-title-issue">Vol. 4 Issue 2</h5>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12">
                <div className="subbody-coming-soon ">
                  {ISSUES_LIST.map((article, index) => {
                    return (
                      <div
                        id={article.title}
                        className="col-md-12 content-text"
                      >
                        <Card
                          style={{
                            width: "100%",
                          }}
                        >
                          <Card.Body>
                            <Badge variant="primary">{article.type}</Badge>

                            <Card.Title className="title-margin">
                              <div className="row">
                                <div className="col-10">
                                  <a href={"#" + article.title}>
                                    {article.title}
                                  </a>
                                </div>
                                <div className="col-2">
                                  <a href={article.link} target="_blank">
                                    {" "}
                                    <span className="download-btn">
                                      {" "}
                                      PDF{" "}
                                      <img
                                        style={{
                                          height: 24,
                                        }}
                                        src={PDFICON}
                                      ></img>
                                    </span>{" "}
                                  </a>
                                </div>
                              </div>
                            </Card.Title>
                            <Card.Text>
                              {article.author.name}
                              <br></br>
                              {article.author.info != null &&
                                article.author.info.map((info) => {
                                  return (
                                    <div>
                                      {info}
                                      <br></br>
                                    </div>
                                  );
                                })}
                              <br></br>
                              {article.author2 != null && (
                                <span>
                                  {article.author2.name}
                                  <br></br>
                                  {article.author2.info != null &&
                                    article.author2.info.map((info) => {
                                      return (
                                        <div>
                                          {info}
                                          <br></br>
                                        </div>
                                      );
                                    })}
                                  <br></br>
                                </span>
                              )}

                              {article.author3 != null && (
                                <span>
                                  {article.author3.name}
                                  <br></br>
                                  {article.author3.info != null &&
                                    article.author3.info.map((info) => {
                                      return (
                                        <div>
                                          {info}
                                          <br></br>
                                        </div>
                                      );
                                    })}
                                  <br></br>
                                </span>
                              )}

                              {article.abstract != null && (
                                <div className="abstract-title">Abstract</div>
                              )}
                              {article.abstract != null && (
                                <div>
                                  <br></br>
                                  {article.abstract}
                                  <br></br>
                                  <br></br>
                                </div>
                              )}
                              <p className="conceps inline list">
                                {article.keywords != null && (
                                  <span className="abstract-title separator">
                                    Keywords -:{" "}
                                  </span>
                                )}
                                {article.keywords != null &&
                                  article.keywords.flatMap((keyword, i) => {
                                    return (
                                      <span>
                                        {keyword}
                                        {i + 2 <= article.keywords.length && (
                                          <span key={i} className="separator ">
                                            &#8226;
                                          </span>
                                        )}
                                      </span>
                                    );
                                  })}
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
