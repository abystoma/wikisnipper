import React from "react";


const CurrentSearch = ({
  entries,
  status,
  error,
  searchForMore,
}) => {
  // Conditions for displaying the Entries component
  const showEntries = status !== "fetching" && entries.allIds.length > 0;

  // Only pass a 'load more' function when appropriate
  const loadMore = status === "error" ? null : searchForMore;

  return (
    <>
      {status === "fetching"}
      {showEntries}
      {status === "fetchingMore"}
      {status === "error" }
    </>
  );
};


export default CurrentSearch;
