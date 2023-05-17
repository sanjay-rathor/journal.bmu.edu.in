import React from "react";
import { authenticationService } from "../../services";
import { createBrowserHistory } from "history";
import SearchBar from "../main/searchbar";
import Nav from "react-bootstrap/Nav";
import IMAGE_1 from "../../images/D3_jbe-100.jpg";
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
  ListGroup,
} from "react-bootstrap";
const browserHistory = createBrowserHistory();

export default function SubmissionGuidelines() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-12">
        <div className="row content-space-around">
          <div className="col-md-9 col-sm-12 body-container ">
            <div className="row">
              <div className="col-md-12 content-text">
                <h5 className="content-tab-title">Article Submission</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="subbody-content">
                  <p>
                    Authors should kindly note that submission of an article to
                    Journal of Business, Ethics and Society implies that the
                    content has not been published or submitted for publication
                    elsewhere and that it has been approved by all the
                    co-authors and necessary permissions have been taken from
                    the institute where the work has been carried out.
                  </p>
                  <p>
                    Before submission, authors must ensure that their manuscript
                    is aligned with the Aims and Scope of the journal and
                    formatted as per the Submission Guidelines. Authors must
                    also ensure that the manuscript is free of any plagiarized
                    content and meets the globally accepted publishing norms.
                    Manuscripts not confirming to the guidelines may not be
                    reviewed.
                  </p>
                  <p>
                    Manuscripts and all editorial correspondence should be
                    addressed to:
                    <span
                      style={{
                        paddingLeft: 6,
                      }}
                    >
                      Founding Editor-in-Chief, Journal of Business, Society and
                      Ethics, Prof. Payal Kumar (e-mail:{" "}
                      <a
                        style={{
                          fontWeight: 600,
                        }}
                        href="mailto:payalk1@gmail.com"
                      >
                        payalk1@gmail.com
                      </a>
                      ).
                    </span>
                  </p>
                  <p>
                    <span>Language - English (UK)</span>
                  </p>
                  <p>
                    <span>Subject - Interdisciplinary </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 content-text">
                <h5 className="content-tab-title">Book Review Submission</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="subbody-content">
                  <p>
                    Book reviews must contain name of author/editor and book
                    reviewed, place of publication and publisher, year of
                    publication, number of pages and price. Book Reviews of
                    approx. 2000–4000 words may be submitted at{" "}
                    <a
                      style={{
                        fontWeight: 600,
                      }}
                      href="mailto:payalk1@gmail.com"
                    >
                      payalk1@gmail.com
                    </a>
                    ).
                  </p>
                </div>
              </div>
            </div>
            <div className="row" id="manuscript">
              <div className="col-md-12 content-text">
                <h5 className="content-tab-title">Manuscript Review Process</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="subbody-content">
                  <p>
                    After an article is submitted for publication in Journal of
                    Business, Ethics and Society, the first round of assessment
                    is done by the journal editor/s keeping into consideration
                    the Aims and Scope of the journal and other basic
                    requirements like word count, language clarity, originality,
                    format and presentation. Manuscripts not meeting the set
                    standards are likely to be desk rejected.
                  </p>
                  <p>
                    The text (including notes and references) should be typed in
                    Times New Roman, 12 pt with 1.15 line spacing.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 content-text">
                <h5 className="content-tab-title">Manuscript Preparation</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="subbody-content">
                  <p>
                    <span className="content-subtab-title">Format</span>
                  </p>
                  <p>
                    The preferred format for manuscripts (text, tables, figures
                    and appendices) is MS Word and JPEG/TIFF for photographs,
                    which must be provided separately and labelled
                    appropriately. The minimum resolution requirements for
                    photographs are 300 dpi and 1500 pixels.
                  </p>
                  <p>
                    Manuscripts meeting the basic standards prescribed for
                    Journal of Business, Ethics and Society are then sent to at
                    least two independent subject experts for a double-blind
                    peer review. At this stage, the reviewers evaluate the
                    manuscripts and provide a detailed feedback with
                    recommendation to accept the manuscript (as is) or reject it
                    or suggest revising and resubmitting the article. The
                    journal editor/s share reviewers’ reports with the authors,
                    who then incorporate the suggested changes and resubmit the
                    articles which are evaluated again by the same reviewers and
                    finally accepted/rejected for publication. On intimation of
                    acceptance, the authors are required to submit their article
                    complete in all respects with self-identifying information
                    and the consent to publish.
                  </p>
                  <p>
                    <span className="content-subtab-title">Title Page</span>
                  </p>
                  <p>
                    The journal follows a double-blind review process. Authors
                    are therefore requested not to mention their names or
                    self-identifying citations and references in the article
                    text. The title page of the manuscript should mention a
                    short and informative article title, running head, names and
                    affiliation details of author/s and the institutional email
                    address and contact number of the corresponding author.
                    Acknowledgements, if any, and any other author identifying
                    information should be mentioned on the title page itself.
                  </p>
                  <p>
                    Once the manuscript is evaluated and accepted for
                    publication, the author will need to re-insert the
                    self-identifying information in the article before
                    submission.
                  </p>
                  <p>
                    <span className="content-subtab-title">Abstract</span>
                  </p>
                  <p>
                    All articles must be accompanied with an abstract of about
                    150–200 words, highlighting the key points from the sections
                    within the article.
                  </p>
                  <p>
                    <span className="content-subtab-title">Keywords</span>
                  </p>
                  <p>
                    Keywords are crucial for improving the online visibility of
                    the article thereby increasing the possibility of citations.
                    Authors must provide 5–6 relevant keywords for the articles.
                  </p>
                  <p>
                    <span className="content-subtab-title">
                      Manuscript Length/Word Count
                    </span>
                  </p>
                  <p>
                    The word count of articles should be in the range of
                    5,000–7,000 words. Book Reviews should be between 2,000 and
                    4,000 words.
                  </p>
                  <p>
                    <span className="content-subtab-title">
                      Section Headings
                    </span>
                  </p>
                  <p>
                    The following style should be followed for the section
                    headings within an article.
                  </p>
                  <p
                    style={{
                      fontWeight: 600,
                    }}
                  >
                    Level A Style Guidelines for Journal of Business, Ethics and
                    Society
                  </p>
                  <p
                    style={{
                      fontSize: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    Level B Style Guidelines for Journal of Business, Ethics and
                    Society
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 200,
                    }}
                  >
                    Level C Style Guidelines for Journal of Business, Ethics and
                    Society
                  </p>
                  <p>
                    <span className="content-subtab-title">
                      Spellings and Punctuation
                    </span>
                  </p>
                  <p>
                    <ListGroup>
                      <ListGroup.Item className="list-tab-content">
                        British spellings with ‘z’ variant should be used.{" "}
                      </ListGroup.Item>
                      <ListGroup.Item className="list-tab-content">
                        Numbers from one to nine should be spelled out; 10 and
                        above to be mentioned in figures. For exact
                        measurements, only figures should be used, for example,
                        5 km, 8 per cent, etc.{" "}
                      </ListGroup.Item>
                      <ListGroup.Item className="list-tab-content">
                        Per cent should be used in main text and % in tables and
                        figures.
                      </ListGroup.Item>
                      <ListGroup.Item className="list-tab-content">
                        Style for dates: 1 January 2020; 20th century, 1970s
                      </ListGroup.Item>
                      <ListGroup.Item className="list-tab-content">
                        Use thousands and millions and not lakhs and crores.
                      </ListGroup.Item>
                      <ListGroup.Item className="list-tab-content">
                        Abbreviations like etc., et al. and Ibid. should not be
                        italicised.{" "}
                      </ListGroup.Item>
                      <ListGroup.Item className="list-tab-content">
                        Words or phrases in languages other than English should
                        be mentioned in italics.
                      </ListGroup.Item>
                      <ListGroup.Item className="list-tab-content">
                        Usage of bold should be avoided in the main text.
                      </ListGroup.Item>
                    </ListGroup>
                  </p>
                  <p>
                    <span className="content-subtab-title">Quotations</span>
                  </p>
                  <p>
                    Use double quotation marks for direct quotations and single
                    quotation marks for quotations within quotations and for
                    words and phrases used in a special sense.
                  </p>
                  <p>
                    Quotations of more than 40 words should be indented and
                    separated from the main text.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 content-text">
                <h5 className="content-tab-title">Figures and Tables</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="subbody-content">
                  <p>
                    Each figure and table should be numbered and mentioned in
                    the text, accompanied by explanatory legends and footnotes.
                    Source details must be mentioned for all the tables and
                    figures, if taken from other sources. “Author’s own” should
                    be mentioned in case the table or figure has been developed
                    by the author.
                  </p>
                  <p>The style for table and figure heads is as follows:</p>
                  <p>
                    <span className="content-subtab-title">
                      Table 1: Financial Inclusion Schemes Launched by the
                      Government of India{" "}
                    </span>
                  </p>
                  <p>
                    <p className="content-subtab-subtitle">
                      Figure 1: Framework of the Study{" "}
                    </p>
                    <p>
                      <span className="content-subtab-subtitle-1">
                        Photographs
                      </span>
                    </p>
                    <p>
                      Photographs should be submitted separately in JPEG or TIFF
                      format with minimum resolution of 300 dpi and 1,500
                      pixels. Photographs in colour as well as grayscale are
                      acceptable.
                    </p>
                    <p>
                      <span className="content-subtab-subtitle-1">
                        Appendices
                      </span>
                    </p>
                    <p>
                      Supplementary material should be mentioned in the form of
                      Appendix or Annexure and provided before the notes and
                      references in the articles.
                    </p>
                    <p>
                      <span className="content-subtab-subtitle-1">Notes</span>
                    </p>
                    <p>
                      Authors should use endnotes instead of footnotes. Notes
                      must be indicated by consecutive superscript numbers in
                      the text and listed before the References.
                    </p>
                    <p>
                      <span className="content-subtab-subtitle-1">
                        In-text Citations
                      </span>
                    </p>
                    <p>
                      Authors must ensure that all references to others’ works
                      must be cited in the text using author–date style.
                      <p>Citation styles:</p>
                      <p className="guide-text-rules">
                        One Work by One Author: (Walker, 2007,{" "}
                        <span className="highlight-label">p. 120 </span>)
                      </p>
                      <p className="guide-text-rules">
                        One Work by Multiple Authors: (Walker and Allen, 2004,{" "}
                        <span className="highlight-label">pp. 120–124 </span>)
                      </p>
                      <p className="guide-text-rules">
                        One Work by Three or More Authors: First instance:
                        (Bradley, Ramirez, Soo and Walsh, 2006). After that:
                        (Bradley et al., 2006)
                      </p>
                      <p className="guide-text-rules">
                        One Work by Six or More Authors: Only the surname of the
                        first author followed by et al. is to be cited even in
                        the first citation. (Wasserstein et al., 2005)
                      </p>
                      <p className="guide-text-rules">
                        Groups (readily identified through abbreviation) as
                        Authors: (NIMH, 2003)
                      </p>
                      <p className="guide-text-rules">
                        Groups (no abbreviation) as Authors: (University of
                        Pittsburg, 2005)
                      </p>
                      <p className="guide-text-rules">
                        Works with No Identified Author: Cite the first few
                        words of the reference list entry (usually the title)
                        and the year, for example (‘Study Finds’, 2007).
                      </p>
                      <p className="guide-text-rules">
                        Two or More Works by Different Authors in One Citation:
                        (Miller, 1999; Shafranske and Mahoney, 1998)
                      </p>
                      <p className="guide-text-rules">
                        Two or More Works by the Same Author(s) in One Citation:
                        (Gogel, 1990, 2006, in press)
                      </p>
                      <p className="guide-text-rules">
                        Two or More Works Published in the Same Year by the Same
                        Author(s): (Derryberry and Reed, 2005a, 2005b; Rothbart,
                        2003a, 2003b))
                      </p>
                      <p className="guide-text-rules">
                        Authors with the Same Last Name: To avoid confusion, use
                        initials with the last names: (E. Johnson, 2001; L.
                        Johnson, 1998).
                      </p>
                      <p className="guide-text-rules">
                        Personal Communications: T.K. Lutes (personal
                        communication, 18 April 2001); (V.G. Nguyen, personal
                        communication, 28 September 1998)
                      </p>
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 content-text">
                <h5 className="content-tab-title">References</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="subbody-content">
                  <p>
                    A consolidated listing of all books, articles, essays,
                    theses and documents referred to (including any referred to
                    in the tables, graphs and maps) should be provided at the
                    end of the article. Personal communications are not included
                    in the reference list.
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      Order of References:
                    </span>{" "}
                    As per author’s surname <br></br>
                    <span>
                      {" "}
                      Brown, J.R. (2020). <br></br>
                      Browning, A.R. (2019).
                    </span>
                  </p>
                  <p>
                    <span>
                      {" "}
                      Girard, J.B. (2019). <br></br>
                      Girard-Perregauz, A.S. (2018).
                    </span>
                  </p>
                  <p>
                    <span>
                      {" "}
                      MacArthur, A. (2017). <br></br>
                      McAllister, B. (2016).
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      One-author entries precede multiple-author entries:
                    </span>{" "}
                    <br></br>
                    <span>
                      {" "}
                      Alleyne, R.L. (2001). <br></br>
                      Alleyne, R.L. & Evans, A.J. (1999).
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      Book (Print Version)
                    </span>{" "}
                    <br></br>
                    <span>
                      Shotton, M.A. (1989). Computer addiction? A study of
                      computer dependency. London, England: Taylor & Francis.
                      <p>
                        Calfee, R.C., & Valencia, R.R. (1991). APA guide to
                        preparing manuscripts for journal publication.
                        Washington, DC: American Psychological Association.
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      {" "}
                      Book (Electronic Version)
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Shotton, M.A. (1989). Computer addiction? A study of
                        computer dependency [DX Reader version]. Retrieved from{" "}
                        <a
                          style={{
                            fontWeight: 600,
                          }}
                          target="_blank"
                          href="http://www.ebookstore.tandf.co.uk/html/index.asp"
                        >
                          http://www.ebookstore.tandf.co.uk/html/index.asp
                        </a>
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      {" "}
                      Chapter in an Edited Book
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Haybron, D.M. (2008). Philosophy and the science of
                        subjective well-being. In M. Eid & R.J. Larsen (Eds.),
                        The science of subjective well-being (pp. 17–43). New
                        York, NY: Guilford Press.
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      {" "}
                      Journal Article without DOI
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Sillick, T.J., & Schutte, N.S. (2006). Emotional
                        intelligence and self-esteem mediate between perceived
                        early parental love and adult happiness. E-Journal of
                        Applied Psychology, 2(2), 38–48. Retrieved from
                        http://ojs.lib.swin.edu.au/index.php/ejap
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      Journal Article with DOI
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Herbst-Damm, K.L., & Kulik, J.A. (2005). Volunteer
                        support, marital status, and the survival times of
                        terminally ill patients. Health Psychology, 24, 225–229.
                        doi: 10.1037/0278-6133.24.2.225
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      {" "}
                      Journal Article with DOI, Advance Online Publication
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Von Ledebur, S.C. (2007). Optimizing knowledge transfer
                        by new employees in companies. Knowledge Management
                        Research & Practice. Advance online publication. doi:
                        10.1057/palgrave.kmrp.8500141{" "}
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      {" "}
                      Journal Article (in press)
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Briscoe, R. (in press). Egocentric spatial
                        representation in action and perception. Philosophy and
                        Phenomenological Research. Retrieved from
                        http://cogprint.org/5780/1/ECSRAP.F07.pdf
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      {" "}
                      Newspaper Article
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Schwartz, J. (1993, September 30). Obesity affects
                        economic, social status. The Washington Post, pp. A1,
                        A4.
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      {" "}
                      Online Newspaper Article
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Brody, J.E. (2007, December 11). Mental reserves keep
                        brains agile. The New York Times. Retrieved from{" "}
                        <a
                          style={{
                            fontWeight: 600,
                          }}
                          target="_blank"
                          href="http://www.nytimes.com"
                        >
                          http://www.nytimes.com
                        </a>
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      Issue Brief
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Employee Benefit Research Institute. (1992, February).
                        Sources of health insurance and characteristics of the
                        uninsured (Issue Brief No. 123). Washington, DC: Author.{" "}
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      Doctoral Dissertation (from an institutional database)
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Adams, R.J. (1973). Building a foundation for evaluation
                        of instruction in higher education and continuing
                        education (Doctoral dissertation). Retrieved from{" "}
                        <a
                          href="http://www.ohiolink.edu/etd/"
                          style={{
                            fontWeight: 600,
                          }}
                          target="_blank"
                        >
                          http://www.ohiolink.edu/etd/{" "}
                        </a>
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      Conference Paper Abstract Retrieved Online
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Liu, S. (2005, May). Defending against business crises
                        with the help of intelligent agent based early warning
                        solutions. Paper presented at the Seventh International
                        Conference on Enterprise Information Systems, Miami, FL.
                        Abstract retrieved from{" "}
                        <a
                          href="http://www.iceis.org/iceis2005/abstracts_2005.htm"
                          style={{
                            fontWeight: 600,
                          }}
                          target="_blank"
                        >
                          http://www.iceis.org/iceis2005/abstracts_2005.htm
                        </a>
                      </p>
                    </span>
                  </p>
                  <p>
                    <span className="content-subtab-content-label">
                      Proceedings Published Regularly Online
                    </span>{" "}
                    <br></br>
                    <span>
                      <p>
                        Herculano-Houzel, S. Collins, C.E., Wong, P., Kaas,
                        J.H., & Lent, R. (2008). The basic nonuniformity of the
                        cerebral cortex. Proceedings of the national Academy of
                        Sciences, USA, 105, 12593–12598. doi:
                        10.1073/pnas.0805417105{" "}
                      </p>
                    </span>
                  </p>
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
