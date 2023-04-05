import React from "react";
import { restService } from "../../services";
import { createBrowserHistory } from "history";
import SearchBar from "../main/searchbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import IMAGE_1 from "../../images/D3_jbe-100.jpg";
import STRIP_LOGO from "../../images/Journal_Horizontal_Stip_ Website.png";
import TALL_LOGO from "../../images/tall_journal_cover.png";

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

export default function RightSideSection() {
  const currentRoute = window.location.pathname;
  const bookReviews = restService.getBookReviews();
  return (
    <div className="body-container">
      <div className="col-md-12 custom-padding">
        <div className="side-callforpapar-img">
          <div className="side-layer">
            <div className="row content-space-around">
              <div className="col-md-12 custom-padding">
                <Badge className="side-heading">
                  <a
                    href="journal-files/Special issue-October.pdf"
                    target="_blank"
                  >
                    Call for Papers
                  </a>
                </Badge>
              </div>
              <div className="col-md-12 custom-padding">
                <span className="sub-subtitle">
                  {" "}
                  <a
                    href="journal-files/Special issue-October.pdf"
                    target="_blank"
                  >
                    {" "}
                    Papers for Special Issue
                  </a>
                  <br></br> October, 2023
                </span>
                <br />
                <span className="sub-subtitle">
                  Theme - Towards a Sustainable Society: Role of Education in
                  the Post-Pandemic Era
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 custom-padding">
        <div className="side-callforpapar-img">
          <div className="side-layer">
            <div className="row content-space-around">
              <div className="col-md-12 custom-padding">
                <Badge className="side-heading" variant="primary">
                  Subscription
                </Badge>
              </div>
              <div className="col-md-12 custom-padding">
                <span className="subscribe-subtitle">
                  To subscribe to the journal, please send an email to{" "}
                  <a href="emailTo:library@bmu.edu.in">library@bmu.edu.in</a>{" "}
                  address
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {currentRoute != "/aim-and-scope" && (
        <div>
          <div className="col-md-12 custom-padding">
            <div className="side-img">
              <Nav variant="pills" defaultActiveKey={"/"}>
                <Nav.Item>
                  <Nav.Link eventKey="/" href="/" className="nav-link-section">
                    Book Reviews
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          {bookReviews.map((article) => {
            return (
              <div className="col-md-12 content-text">
                <Card>
                  <Card.Body>
                    <Badge variant="primary">{article.type}</Badge>
                    <Card.Title>
                      <a href={"/browse-journal#" + article.title}>
                        {article.title}
                      </a>
                    </Card.Title>
                    <Card.Text>{article.author.name}</Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
      <div className="col-md-12 custom-padding">
        <div className="side-tall-img">
          <div className="side-layer">
            <div className="row content-space-around">
              <div className="col-md-12 custom-padding">
                <Badge className="side-heading" variant="primary">
                  {" "}
                  Questions?
                </Badge>
              </div>
              <div className="col-md-12">
                <Badge>
                  <a
                    href="mailto:payalk1@gmail.com"
                    className="side-question-tab"
                  >
                    {" "}
                    Contact Prof. Dr Payal Kumar{" "}
                  </a>
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 custom-padding">
        <div className="side-info-img">
          <div className="side-layer">
            <div className="row content-space-around">
              <div className="col-md-12 custom-padding">
                <Badge className="side-heading" variant="primary">
                  Important Links
                </Badge>
              </div>
              <div className="col-md-12 custom-padding">
                <ListGroup>
                  <ListGroup.Item>
                    <a href="/submission-guidelines#manuscript">
                      Submit Manuscript
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="/submission-guidelines">Article Submission</a>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
