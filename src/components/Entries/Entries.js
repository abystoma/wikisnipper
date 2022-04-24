import { EntriesContainer} from "./Entries.elements";
import Entry from "./Entry";

const Entries = ({
  entries,
}) => {
  
  return (
    <main>
      <EntriesContainer>
        {entries.allIds.map((entryId) => {
          const entry = entries.byId[entryId];
          return (
            <Entry
              key={entryId}
              entry={entry}
            />
          );
        })}

      </EntriesContainer>
    </main>
  );
};


export default Entries;
