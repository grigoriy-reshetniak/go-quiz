import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { gruvboxLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';

SyntaxHighlighter.registerLanguage('bash', bash);

interface CodePreviewProps {
  output: string;
}

export const TerminalPreview = ({ output }: CodePreviewProps) => {
  return (
    <div className="code-preview">
      <SyntaxHighlighter
        language="bash"
        style={gruvboxLight}
        customStyle={{
          padding: '1rem',
          margin: 0,
        }}
      >
        {output}
      </SyntaxHighlighter>
    </div>
  );
};
