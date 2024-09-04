import React, { forwardRef } from 'react';

const Editor = forwardRef<HTMLDivElement>((props, ref) => {
  return <div ref={ref} />;
});

export default Editor;