import React, { forwardRef } from "react";

const Editor = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} />;
});

Editor.displayName = "Editor";

export default Editor;
