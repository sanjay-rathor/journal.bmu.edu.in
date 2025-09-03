import React, { useState } from "react";
import { restService } from "../../services";
import { createBrowserHistory } from "history";
import SearchBar from "../main/searchbar";
import Nav from "react-bootstrap/Nav";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import IMAGE_1 from "../../images/journal_cover.png";
import STRIP_LOGO from "../../images/Journal_Horizontal_Stip_ Website.png";
import TALL_LOGO from "../../images/tall_journal_cover.png";
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

export default function LandingJournal() {
  //   console.log(InternaionalEditors);
  const latestArticles = restService.getLatestArticles();

  const [count, setCount] = useState(0);

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-12">
        <div className="row content-space-around">
          <div className="col-md-9 col-sm-12 body-container ">
            <div className="row">
              <div className="col-md-4 cover-paddding">
                <img width="100%" src={IMAGE_1} alt="Card image cap" />
              </div>
              <div className="col-md-8 content-text">
                <div className="row">
                  <div className="col-md-12">
                    <span className="content-title">
                      {/* <span className="content-label">
                        ISSN:
                        <span className="content-label-text">
                          &nbsp;&nbsp;&nbsp;2583-8520
                        </span>
                      </span> */}
                      <br></br>
                      <span className="content-label">
                        Editor In-Chief:
                        <span className="content-label-text">
                          &nbsp;&nbsp;D M Arvind Mallik
                        </span>
                      </span>
                      <br></br>
                      <span className="content-label">
                        Vol 5. Issue 2 - October 2025
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        <p>
                          This study employs the PESTEL framework to critically
                          examine the dark side of sustainability, focusing on
                          systemic paradoxes and negative externalities in
                          sustainability initiatives. Using a qualitative
                          approach, it synthesizes secondary data from case
                          studies and literature reviews in technology,
                          construction, and agriculture to assess sustainability
                          complexities. The analysis reveals that political
                          incoherence, economic disparities, social resistance,
                          rapid technological shifts, environmental trade-offs,
                          and fragmented legal frameworks create unintended
                          consequences, limiting the effectiveness of
                          sustainability efforts. By offering the first
                          comprehensive PESTEL-based analysis of sustainability
                          paradoxes, this research underscores the necessity of
                          structured risk identification to enhance
                          decision-making and refine sustainable development
                          strategies. It emphasizes the social implications for
                          corporations, policymakers, and academia, advocating
                          for community-driven initiatives, adaptive legal
                          frameworks, and international collaboration to address
                          inequities, particularly between developed and
                          developing nations, in transitioning to low-carbon
                          economies.
                        </p>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-md-12 ">
                <div className="divider"></div>
              </div>
              <div className="col-md-12 content-text">
                <Nav variant="pills" defaultActiveKey={"/"}>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="/"
                      href="/"
                      className="nav-link-section"
                    >
                      Latest content
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              {(() => {
                const hiddenTypes = ["Book Review"]; // Define inside the scope

                return latestArticles
                  .filter((article) => !hiddenTypes.includes(article.type)) // Hide specified types
                  .map((article, index) => {
                    return (
                      <div className="col-md-12 content-text" key={index}>
                        <Card style={{ width: "100%" }}>
                          <Card.Body>
                            {console.log("Author Name:", article.author.name)}
                            <Badge variant="primary">{article.type}</Badge>
                            <Card.Title>
                              <a
                                href={
                                  "/browse-journal-vol-5-issue-2#" +
                                  article.title
                                }
                              >
                                {" "}
                                {article.title}
                              </a>
                            </Card.Title>
                            <Card.Text>
                              {article.author.name}
                              {/* article.author.info.map((info) => {
                            return (
                              <div>
                                {info}
                                <br></br>
                              </div>
                            );
                          }) */}
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </div>
                    );
                  });
              })()}
            </div>
            <div className="row">
              <div className="col-md-12 ">
                <div className="divider"></div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 twitter-timeline">
                <a
                  className="twitter-timeline"
                  data-height="600"
                  href="https://twitter.com/BMLUniv?ref_src=twsrc%5Etfw"
                >
                  Tweets by BMLUniv
                </a>{" "}
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              </div>
              {/* <div className="col-md-8 twitter-timeline">
                <div className="row">
                  <div className="col-md-12 ">
                    <span className="content-tab-title">Advisory Board</span>
                  </div>
                  <div className="col-md-12 ">
                    <div className="list-group editor-acordian">
                      {InternaionalEditors.map(function (item, index) {
                        return (
                          <div className="list-group-item flex-column align-items-start ">
                            <div className="d-flex w-100 justify-content-between name-box">
                              <h5 className="mb-1">{item.name}</h5>
                            </div>

                            <p className="mb-1 editor-about">
                              {item.description}
                            </p>
                            <p
                              className="mb-1 editor-about"
                              style={{ "text-transform": "lowercase" }}
                            >
                              {item.email}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="row" >
                            <div className="col-md-12 " >
                                <img className="strip-image" src={STRIP_LOGO}></img>
                            </div>
                            <div className="col-md-12" >
                                <Badge className="subcribe-btn">SUBSCRIBE</Badge>

                            </div>

                        </div> */}
          </div>
          <div className="col-md-3 col-sm-12 d-sm-block mobile-padding">
            <RightSideSection />
          </div>
        </div>
      </div>
    </div>
  );
}
