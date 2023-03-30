import React from "react";
import Nav from "react-bootstrap/Nav";
import { authenticationService } from "../../services";
import SearchBar from "./searchbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import LandingJournal from "../home/landingJournal";
import EditorialBoard from "../home/editorialBoard";
import AimScope from "../home/aimScope";
import BrowseJournal from "../home/browseJournal";
import BrowseJournalIssue2 from "../home/browseJounalIssue2";
import BrowseJournalVol2Issue1 from "../home/browseJournalIssue3";
import BrowseJournalVol2Issue2 from "../home/browse_issue_journal4";
import SubmissionGuidelines from "../home/submissionGuidelines";
import AuthorResponsibility from "../home/authorResponsibility";
import RightsAndPermission from "../home/rightsAndPermission";
import Subscription from "../home/subcription";
import BookCover from "../../images/book-cover-study-education-book store .png";
// import Lomgo from "../../images/bml-color-logo.png";
export default function Landing(props) {
  const currentRoute = window.location.pathname;
  //  console.log("Current Route " + currentRoute);
  return (
    <div className="auth-wrapper App">
      <div className="auth-inner">
        <div className="cover row margin-zero ">
          <div className="col-md-12 row cover-imag ">
            <div className="col-md-4">
              <img src="/images/bml-color-logo.png" alt="" />
            </div>
            <div className="col-md-6">
              <div className=" row justify-content-md-center margin-zero">
                <div className="col-md-12 title">
                  Journal of Business, Ethics and Society.
                </div>
                <div className="col-md-12 subtile">
                  {/* The Multidisciplinary Journal of the Society for Business Ethics */}
                </div>
                <div className="col-md-8 col-sm-12">
                  <div className="row justify-content-md-center">
                    <div className="col-md-9 search col-sm-12">
                      <div>
                        <img className="book-cover" src={BookCover}></img>
                      </div>
                      <SearchBar />
                    </div>

                    {/* <div className="col-md-12 search-tabs d-none d-md-block " >
                                        <Nav variant="pills" fill justify="false" defaultActiveKey="/home" className="row justify-content-md-center">
                                            <Nav.Item className="col-md-3 col-sm-12">
                                                <Nav.Link href="/" className="landing-action-nav">Submit your article</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="col-md-2 col-sm-12" >
                                                <Nav.Link href="/" className="landing-action-nav">Information</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="col-md-2 col-sm-12">
                                                <Nav.Link href="/" className="landing-action-nav">Subscribe</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="col-md-4 col-sm-12">
                                                <Nav.Link href="/" className="landing-action-nav">Recommend to librian</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">&nbsp;</div>
          </div>
        </div>
        <div className="row margin-zero custom-top-margin">
          <div className="col-md-12">
            <Nav
              variant="pills"
              className="body-container"
              defaultActiveKey={currentRoute}
            >
              <Nav.Item>
                <Nav.Link eventKey="/" href="/" className="nav-link-tab">
                  Journal Home
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="/aim-and-scope"
                  href="/aim-and-scope"
                  className="nav-link-tab"
                >
                  Aims and Scope
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="/editorial-board"
                  href="/editorial-board"
                  className="nav-link-tab"
                >
                  Editorial Board
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                                <Nav.Link eventKey="/browse-journal" href="/browse-journal" className="nav-link-tab">
                                    Browse Journal
                            </Nav.Link>
                            </Nav.Item> */}
              <NavDropdown
                title="Browse Journal"
                id="nav-dropdown"
                className="dropdown-nav-link"
              >
                <NavDropdown.Item
                  className="nav-link-tab"
                  eventKey="/browse-journal"
                  href="/browse-journal"
                >
                  Vol. 1 Issue 1 (April 2021)
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="nav-link-tab"
                  eventKey="/browse-journal-issue-2"
                  href="/browse-journal-issue-2"
                >
                  Vol. 1 Issue 2 (October 2021)
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="nav-link-tab"
                  eventKey="/browse-journal-vol-2-issue-1"
                  href="/browse-journal-vol-2-issue-1"
                >
                  Vol. 2 Issue 1 (April 2022)
                </NavDropdown.Item>
                <NavDropdown.Item
                  className="nav-link-tab"
                  eventKey="/browse-journal-vol-2-issue-2"
                  href="/browse-journal-vol-2-issue-2"
                >
                  Vol. 2 Issue 2 (October 2022){" "}
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item>
                <Nav.Link
                  eventKey="/submission-guidelines"
                  href="/submission-guidelines"
                  className="nav-link-tab"
                >
                  Submission Guidelines
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="/responsibilties-of-authors"
                  href="/responsibilties-of-authors"
                  className="nav-link-tab"
                >
                  Responsibilities of Authors
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  eventKey="/right-and-permissions"
                  href="/right-and-permissions"
                  className="nav-link-tab"
                >
                  Rights and Permissions
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
        </div>
        <div className="row margin-zero">
          <div className="col-md-12 ">
            {currentRoute == "/" && (
              <div className="custom-top-margin custom-bottom-margin">
                <LandingJournal />
              </div>
            )}
            {currentRoute == "/aim-and-scope" && (
              <div className="custom-top-margin custom-bottom-margin">
                <AimScope />
              </div>
            )}
            {currentRoute == "/editorial-board" && (
              <div className="custom-top-margin custom-bottom-margin">
                <EditorialBoard />
              </div>
            )}
            {currentRoute == "/browse-journal" && (
              <div className="custom-top-margin custom-bottom-margin">
                <BrowseJournal />
              </div>
            )}
            {currentRoute == "/browse-journal-issue-2" && (
              <div className="custom-top-margin custom-bottom-margin">
                <BrowseJournalIssue2 />
              </div>
            )}
            {currentRoute == "/browse-journal-vol-2-issue-1" && (
              <div className="custom-top-margin custom-bottom-margin">
                <BrowseJournalVol2Issue1 />
              </div>
            )}
            {currentRoute == "/browse-journal-vol-2-issue-2" && (
              <div className="custom-top-margin custom-bottom-margin">
                <BrowseJournalVol2Issue2 />
              </div>
            )}
            {currentRoute == "/submission-guidelines" && (
              <div className="custom-top-margin custom-bottom-margin">
                <SubmissionGuidelines />
              </div>
            )}
            {currentRoute == "/responsibilties-of-authors" && (
              <div className="custom-top-margin custom-bottom-margin">
                <AuthorResponsibility />
              </div>
            )}
            {currentRoute == "/right-and-permissions" && (
              <div className="custom-top-margin custom-bottom-margin">
                <RightsAndPermission />
              </div>
            )}
            {currentRoute == "/subscription" && (
              <div className="custom-top-margin custom-bottom-margin">
                <Subscription />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
