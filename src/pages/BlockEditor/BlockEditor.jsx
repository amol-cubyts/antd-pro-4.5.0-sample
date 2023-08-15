import React from 'react';
import BlockEditorMain from './BlockEditorMain'

export default () => {
  return (
    <div>
        <h1>Block Editor</h1>
        <div style={{border: '2px solid red'}}>
            <BlockEditorMain />
        </div>
    </div>
  );
};
