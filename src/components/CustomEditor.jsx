import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';

const CustomEditor = ({ onSave }) => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const handleSave = () => {
    onSave(editorState.getCurrentContent().getPlainText());
  };

  const insertVariable = (variable) => {
    const contentState = editorState.getCurrentContent();
    const selectionState = editorState.getSelection();
    const contentStateWithEntity = contentState.createEntity('VARIABLE', 'IMMUTABLE', { variable });
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const contentStateWithText = Modifier.insertText(contentStateWithEntity, selectionState, variable, null, entityKey);
    const newEditorState = EditorState.push(editorState, contentStateWithText, 'insert-characters');
    setEditorState(newEditorState);
  };

  return (
    <div className="custom-editor bg-white p-4 rounded shadow-md">
      <div className="editor-toolbar flex justify-between mb-2">
        <button onClick={handleSave} className="p-2 bg-blue-500 text-white rounded">SAVE</button>
        <button onClick={() => insertVariable('{FirstName}')} className="p-2 bg-green-500 text-white rounded">Variables</button>
      </div>
      <Editor
        editorState={editorState}
        handleKeyCommand={handleKeyCommand}
        onChange={setEditorState}
      />
    </div>
  );
};

export default CustomEditor;
