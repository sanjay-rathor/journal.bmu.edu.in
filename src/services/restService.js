import axios from "axios";
import { authenticationService } from "./";
import article1 from "../journals/naturalJournal.json";
import practitionerPrespective from "../journals/practitionerPrespective.json";
import bookReviews from "../journals/issue-11/bookReviewIssue11.json";
import lastestContent from "../journals/issue-11/issueList11.json";

export const restService = {
  getLatestArticles: () => {
    return lastestContent;
  },
  getBookReviews: () => {
    return bookReviews;
  },
};
