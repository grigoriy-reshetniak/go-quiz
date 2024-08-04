import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';

SyntaxHighlighter.registerLanguage('go', go);

interface CodePreviewProps {
  code: string;
  previewType: 'code' | 'terminal';
  type: 'question' | 'answer';
}

export const CodePreview = ({ code, previewType, type }: CodePreviewProps) => {
  return (
    <div className={`${previewType}-preview`}>
      <SyntaxHighlighter
        language={previewType === 'code' ? 'go' : 'text'}
        style={previewType === 'code' ? nord : agate}
        showLineNumbers={previewType === 'code' && type === 'question'}
        customStyle={{
          padding: previewType === 'code' && type === 'question' ? '0.5rem 0' : '0.5rem 1rem',
          margin: 0,
      }}
      >
        {previewType === 'terminal' ? `> ${code}` : code}
      </SyntaxHighlighter>
    </div>
  );
};
