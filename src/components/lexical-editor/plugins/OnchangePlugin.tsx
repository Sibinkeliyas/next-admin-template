import React, { useState } from 'react'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { createEditor } from 'lexical';
import { $generateHtmlFromNodes } from '@lexical/html';
// import { $convertToMarkdownString, TRANSFORMERS } from '@lexical/markdown';
import { editorConfig } from '../config';

const Onchange = () => {
    const [, setHtmlContent] = useState<string>('')
  return (
    <OnChangePlugin
        onChange={(editorState) => {
          editorState.read(() => {
            const config: any = {
              namespace: 'Temp',
              theme: editorConfig.theme,
              nodes: editorConfig.nodes,
              onError: editorConfig.onError,
              editable: true,
              editorState: editorState,
            };

            const editor = createEditor(config);
            const htmlString = $generateHtmlFromNodes(editor, null);
            // const markdown = $convertToMarkdownString(TRANSFORMERS);

            setHtmlContent(htmlString)
          });
        }}
      />
  )
}

export default Onchange