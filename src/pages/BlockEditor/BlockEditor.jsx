import React from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";

export default () => {
  const editor = useBlockNote({});
  return (
    <div>
      <h1>Block Editor</h1>
      <div style={{ border: "2px solid red" }}>
        <BlockNoteView editor={editor} />
      </div>
    </div>
  );
};
