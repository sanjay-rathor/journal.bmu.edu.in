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
                      <span className="content-label">
                        ISSN:
                        <span className="content-label-text">
                          &nbsp;&nbsp;&nbsp;2583-8520
                        </span>
                      </span>
                      <br></br>
                      <span className="content-label">
                        Editor In-Chief:
                        <span className="content-label-text">
                          &nbsp;&nbsp;Prof. Payal Kumar
                        </span>
                      </span>
                      <br></br>
                      <span className="content-label">
                        Vol 3. Issue 2 - October 2023
                      </span>
                      <br></br>
                      <br></br>
                      <span>
                        Journal of Business, Ethics and Society (JBES) is an
                        inter-disciplinary bi-annual peer-reviewed journal from
                        BML Munjal University that publishes theoretical and
                        empirical research on a broad range of topics concerning
                        business management, business ethics and societal
                        well-being. The journal started its operation in 2021.
                        The double-blind peer-reviewed journal broadly focuses
                        on the intersectionality of ethics and businesses,
                        ethics and civil societies, and also on topics such as
                        corporate social responsibility, social entrepreneurship
                        and power relationships. Addressing the need for an
                        ethical response to the emerging challenges and trends
                        in management, and also challenges in society (such as
                        pandemics, and world recession) which impact ethical
                        decisions and behaviour, articles can range from how a
                        pandemic can lead to ethical dilemmas for leaders in the
                        medical profession; to how a leader indulging in
                        greenwashing, or providing misleading information about
                        so-called environmentally-sound products, could actually
                        be harming the environment. JBES is a bridge journal,
                        exploring issues of interest to both researchers as well
                        as industry leaders and HRM professionals. As such this
                        journal provides a forum for deliberations and exchange
                        of ideas and knowledge among academia, businesses,
                        public institutions, not-for-profit institutions and
                        government organizations. The journal has an
                        international focus and welcomes research from all
                        regions of the world.
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
              {latestArticles.map((article) => {
                return (
                  <div className="col-md-12 content-text">
                    <Card
                      style={{
                        width: "100%",
                      }}
                    >
                      <Card.Body>
                        <Badge variant="primary">{article.type}</Badge>
                        <Card.Title>
                          <a
                            href={
                              "/browse-journal-vol-3-issue-1#" + article.title
                            }
                          >
                            {article.title}
                          </a>
                        </Card.Title>
                        <Card.Text>
                          {article.author.info.map((info) => {
                            return (
                              <div>
                                {info}
                                <br></br>
                              </div>
                            );
                          })}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
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
              <div className="col-md-8 twitter-timeline">
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
              </div>
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
