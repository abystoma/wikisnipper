import { useState, useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import  { CurrentSearch }  from "./views";
import { useWikiSearch } from "./hooks";


const Footer = () => {
  return (
    <div class = "FooterWrapper">
      <a
        href={"https://github.com/abystoma/wikisnipper"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Github Repo Link"
      >
        <FaGithub  size={40} color={`#2a2d2f`} aria-hidden="true" focusable="false" />
      </a>
    </div>
  ); 
};

const Random = () => {
  return (
          <div class = "RandomArticleButton">
            <a
              href={"https://en.wikipedia.org/wiki/Special:Random"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Random article"
            >
            Random Article{" "}
            <span role="img" aria-hidden="true">
            🔮
            </span>
            </a>
          </div>
  ); 
};

const Search = ({ status, search, changeView }) => {

  const [query, setQuery] = useState("");
  const inputFieldRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    // If input is empty return
    if (typeof query !== "string" || query.trim() === "") return;
    // Otherwise proceed and run search
    inputFieldRef.current.blur();
    changeView("currentSearch");
    search(query);
    setQuery("");
  };

  const handleInputChange = ({ target }) => setQuery(target.value);

  return (
      <div>
        <body>
          <div class = "search-area">
            <form onSubmit={handleSubmit}>
            <input            
                value={query}
                onChange={handleInputChange}
                placeholder="Type to search..."
                autoComplete="off"
                ref={inputFieldRef}
            />
            <button type="submit">Search</button>
            </form>  
          </div>
      </body>
    </div>   
  )
}
const App = () => {
  const [view,  setView] = useState("currentSearch");
  const [{ status, entries, error }, search, searchForMore] = useWikiSearch();

  let content;
  console.log(entries);

  if (view === "currentSearch") {
    content = (
      <CurrentSearch
        entries={entries}
        status={status}
        error={error}
        searchForMore={searchForMore}
      />
    );
  }
  return (
    <>
      <h1>Wikisnipper</h1>
      <Search status={status} search={search} changeView={setView} />
      <Random/>
      {content}
      <Footer/>
    </>
  );
};

export default App;
