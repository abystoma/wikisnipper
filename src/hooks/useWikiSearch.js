import { useCallback, useReducer } from "react";

import api from "../lib/api";
import { fetch, fetchMore, noResults, noMoreResults, fetchSuccess, fetchError, clearEntries } from "../utils/actions";
 
// Reducer function for managing the WikiSearch state

const initialState = {
  status: "idle", // "idle" | "fetching" | "fetchingMore" | "error"
  entries: { byId: {}, allIds: [] }, // { byId: { [id]: entry }, allIds: entryIds[] }
  error: null, // { message: error.message }
  currentQuery: "",
  currentOffset: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        status: "fetching",
        currentQuery: action.payload,
        error: null,
      };

    case "FETCH_MORE":
      return {
        ...state,
        status: "fetchingMore",
        error: null,
      };

    case "NO_RESULTS":
      return {
        ...state,
        status: "error",
        entries: { byId: {}, allIds: [] },
        error: { message: "No results found" },
      };

    case "NO_MORE_RESULTS":
      return {
        ...state,
        status: "error",
        error: { message: "No more entries to load" },
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        status: "idle",
        currentOffset: action.payload.newOffset,
      };

    case "FETCH_ERROR":
      return {
        ...state,
        status: "error",
        error: { message: "Oops! Something went wrong" },
      };

    case "CLEAR_ENTRIES":
      return {
        ...state,
        entries: { byId: {}, allIds: [] },
      };

    default:
      return state;
  }
};



// Custom hook

function useWikiSearch() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const wikiSearch = useCallback(async (query, offset, fetchAction) => {
        // dispatch either fetch(query) or fetchMore(currentQuery), no args in fetchMore
        dispatch(fetchAction(query));

        try {
            //pass to search api
            const { data } = await api.searchWikipedia(query, offset);

            if (data.query.search.length === 0) {
                return dispatch(noResults());
            }

            // Otherwise update entries and current offset (the point from which to keep fetching)
            const newOffset = data.continue ? data.continue.sroffset : null;
            dispatch(fetchSuccess(data.query.search, newOffset));
        } catch (err) {
            dispatch(fetchError());
        }
    }, []);

    // New search
    const search = useCallback(
        async (query) => {
            // Do not rerun the same query unless there was an error
            if (query === state.currentQuery && state.error === null) {
                return;
            } else {
                dispatch(clearEntries());
                return await wikiSearch(query, 0, fetch);
            }
        },
        [state.currentQuery, state.error, wikiSearch]
    );

    // Fetch more entries
    const searchForMore = useCallback(async () => {
        // current offset === null -> we reached end of result and no entries to fetch
        if (state.currentOffset === null) {
            return dispatch(noMoreResults());
        }

        return await wikiSearch(state.currentQuery, state.currentOffset, fetchMore);
    }, [state.currentQuery, state.currentOffset, wikiSearch]);

    return [state, search, searchForMore];
}

export default useWikiSearch;
