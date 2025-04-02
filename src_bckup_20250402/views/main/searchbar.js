import React, { useState, Fragment } from 'react';
import { AsyncTypeahead, Highlighter, Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import Documents from '../../journals/browseJounal/papers.json';
import ISSUE_2_DOCS from '../../journals/issue-2/issuesList.json';
const SEARCH_URI = 'https://api.github.com/search/users';
const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  let options = [];
  let docs = Documents.concat(ISSUE_2_DOCS);
  for (let i = 0; i < docs.length; i++) {
    const data = docs[i];
    options.push({
      id: i,
      title: data.title,
      type: data.type,
      link: data.title,
      issue2 : data.issue2
    });
    const keywords = data.keywords ? data.keywords.map((keyword) => {
      const k = keyword.replace(/,/gm, "");
      return {
        id: i,
        title: k,
        type: 'Keyword',
        link: data.title
      }
    }) : null;
    if (keywords) {
      options = options.concat(keywords);
    }
    if (data.author && data.author.name) {
      let authors = data.author.name.split(",");
      let designation = (data.author.info && data.author.info.length) ? "- " + data.author.info[0] : '';

      const authorsOpt = authors ? authors.map((author) => {
        return {
          id: i,
          title: author,
          type: 'Author ' + designation,
          link: data.title
        }
      }) : null;
      if (authorsOpt) {
        options = options.concat(authorsOpt);
      }
    }

  }
  let props = {};


  props.renderMenuItemChildren = (option, { text }, index) => (
    <Fragment>
      <Highlighter search={text}>
        {option.title}
      </Highlighter>
      <div>
        <small>
          {option.type}
        </small>
      </div>
    </Fragment>
  );
  const selectDocument = (selectedDoc) => {
    if (selectedDoc && selectedDoc.length) {
      let doc = selectedDoc[0];
      if (true == doc.issue2) {
        var location = "/browse-journal-issue-2#" + doc.link;
        window.location.href = location;
      } else {
        var location = "/browse-journal#" + doc.link;
        window.location.href = location;
      }
    }
  }

  return (
    <Typeahead
      id="journal-search"
      {...props}
      isLoading={isLoading}
      labelKey="title"
      minLength={1}
      onChange={selectDocument}
      options={options}
      placeholder="Search Journal"
    />
  );
};

export default SearchBar;