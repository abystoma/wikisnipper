import { useState, useRef } from 'react';

const App = () => {
    
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
    <h1>Wikisnipper</h1>

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
    
 
  )
}
export default App

