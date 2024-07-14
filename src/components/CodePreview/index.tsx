import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';

SyntaxHighlighter.registerLanguage('go', go);

interface CodePreviewProps {
  code: string;
}

export const CodePreview = ({ code }: CodePreviewProps) => {
  return (
    <div className="code-preview">
      <SyntaxHighlighter
        language="go"
        style={irBlack}
        showLineNumbers={true}
        customStyle={{
          padding: '1rem',
          margin: 0,
      }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
