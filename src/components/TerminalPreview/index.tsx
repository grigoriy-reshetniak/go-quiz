import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodePreviewProps {
  output: string;
}

export const TerminalPreview = ({ output }: CodePreviewProps) => {
  return (
    <div className="terminal-preview">
      <SyntaxHighlighter
        language="text"
        style={agate}
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
