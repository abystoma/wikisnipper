import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  EntryTitle,
  CardHeaderWikiIcon,
  EntryTitleLink,
  EntryText,
} from "./Entry.elements";

const Entry = ({entry}) => {

  const articleUrl =`https://en.wikipedia.org/wiki/${entry.title.replace(/ /g, "_")}`;

  const markup = {
    __html: entry.snippet + "...",
  };

  return (
    <Card>
      <CardHeader>
        <CardHeaderWikiIcon aria-label="Wikipedia Logo" />
        <EntryTitle>
          <EntryTitleLink href={articleUrl} target="_blank">
            {entry.title}
          </EntryTitleLink>
        </EntryTitle>
      </CardHeader>
      <CardBody>
        <EntryText dangerouslySetInnerHTML={markup} />
      </CardBody>
    </Card>
  );
};


export default Entry;
