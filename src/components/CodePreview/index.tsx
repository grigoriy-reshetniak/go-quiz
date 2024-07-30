import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';

SyntaxHighlighter.registerLanguage('go', go);

interface CodePreviewProps {
  code: string;
  type: 'code' | 'terminal';
}

export const CodePreview = ({ code, type }: CodePreviewProps) => {
  return (
    <div className={`${type}-preview`}>
      <SyntaxHighlighter
        language={type === 'code' ? 'go' : 'text'}
        style={type === 'code' ? nord : agate}
        showLineNumbers={type === 'code'}
        customStyle={{
          padding: type === 'code' ? '0.5rem 0' : '0.5rem 1rem',
          margin: 0,
      }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
