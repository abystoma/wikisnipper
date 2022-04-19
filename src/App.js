import { useState, useRef } from 'react';
import { FaGithub } from "react-icons/fa";
import { CurrentSearch } from "./views";


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
const Search = () => {
  const [query, setQuery] = useState("");
  const inputFieldRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // If input is empty return
    if (typeof query !== "string" || query.trim() === "") return;

    // Otherwise proceed and run search
    inputFieldRef.current.blur();
    setQuery("");
  };
const handleInputChange = ({ target }) => setQuery(target.value);

return (
    
      <div>
    <body>

        <h1>Wikisnipper</h1>
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
      <Random/>

  </body>
  <Footer/>

  </div>   
)
}
const App = () => {
  const [view, setView] = useState("currentSearch");
  const [{ status, entries, error }, search, searchForMore] = useWikiSearch();


}
export default App;

