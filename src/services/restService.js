import axios from "axios";
import { authenticationService } from "./";
import article1 from "../journals/naturalJournal.json";
import practitionerPrespective from "../journals/practitionerPrespective.json";
import bookReviews from "../journals/issue-3/bookReviewIssue3.json";
import lastestContent from "../journals/issue-10/issueList10.json";

export const restService = {
  getLatestArticles: () => {
    return lastestContent;
  },
  getBookReviews: () => {
    return bookReviews;
  },
};
