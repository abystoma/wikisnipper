import React from "react";

import { Entries} from "../components";

const CurrentSearch = ({
  entries,
  status,

}) => {
  // Conditions for displaying the Entries component
  const showEntries = status !== "fetching" && entries.allIds.length > 0;

  // Only pass a 'load more' function when appropriate
  // const loadMore = status === "error" ? null : searchForMore;
  return (
    <>
      {status === "fetching"}
      {showEntries && (
        <Entries
          entries={entries}
        />
      )}

    </>
  );
};
export default CurrentSearch;

