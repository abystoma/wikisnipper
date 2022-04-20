// Parse and merge new entries with current ones to avoid duplicates
const filterDuplicates = (currentEntries) => (entry) => 
  !currentEntries.byId[entry.pageid];

const normalizeById = (entriesById,  entry) => ({ ...entriesById, [entry.pageid]: entry });

const extractEntryId = ({ pageid }) => pageid;

export const mergeEntries = ({ currentEntries, newEntries }) => {
  console.log(newEntries);
  const filteredNewEntries = newEntries.filter(
    filterDuplicates(currentEntries)
  );

  return {
    byId: {
      ...currentEntries.byId,
      ...filteredNewEntries.reduce(normalizeById, {}),
    },
    allIds: [
      ...currentEntries.allIds,
      ...filteredNewEntries.map(extractEntryId),
    ],
  };
};

