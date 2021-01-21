import React, { useState } from "react";

const SearchBar = ({ theme, onFormSubmit }) => {
  const [term, setTerm] = useState("");
  const mode = theme === "dark" ? "inverted" : "red";

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className={`ui ${mode} segment`}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <div className={`ui ${mode} transparent icon input`}>
            <input
              type="text"
              placeholder="Search"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
            <i className="search icon" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
