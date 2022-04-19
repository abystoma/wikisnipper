const fetch = (query) => ({ type: "FETCH", payload: query });
const fetchMore = () => ({ type: "FETCH_MORE" });
const noResults = () => ({ type: "NO_RESULTS" });
const noMoreResults = () => ({ type: "NO_MORE_RESULTS" });
const fetchSuccess = (newEntries, newOffset) => ({
  type: "FETCH_SUCCESS",
  payload: { newEntries, newOffset },
});
const fetchError = () => ({ type: "FETCH_ERROR" });
const clearEntries = () => ({ type: "CLEAR_ENTRIES" });


const exportedObject = {
    fetch,
    fetchMore,
    noResults,
    noMoreResults,
    fetchSuccess,
    fetchError,
    clearEntries
};
export default exportedObject;