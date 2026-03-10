import React, { useState, useEffect } from 'react';
import '../assets/styles/CodeEditorMockup.scss';

const CODE_LINES = [
  { text: '// portfolio.ts', type: 'comment' },
  { text: 'const isha = {', type: 'keyword' },
  { text: '  role: "Software Engineer",', type: 'line' },
  { text: '  stack: ["React", "Node.js", "Python"],', type: 'line' },
  { text: '  focus: "Full-stack & AI",', type: 'line' },
  { text: '  status: "Open to opportunities"', type: 'line' },
  { text: '};', type: 'keyword' },
  { text: '', type: 'line' },
  { text: 'export default isha;', type: 'keyword' },
];

function CodeEditorMockup() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [restartKey, setRestartKey] = useState(0);
  const cursorLine = visibleLines > 0 ? visibleLines - 1 : 0;

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) {
      const t = setTimeout(() => {
        setVisibleLines(0);
        setRestartKey((k) => k + 1);
      }, 4000);
      return () => clearTimeout(t);
    }

    const lineInterval = setInterval(() => {
      setVisibleLines((prev) => (prev < CODE_LINES.length ? prev + 1 : prev));
    }, 400);

    return () => clearInterval(lineInterval);
  }, [restartKey, visibleLines]);

  return (
    <div className="code-editor-mockup">
      <div className="editor-titlebar">
        <div className="titlebar-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="titlebar-filename">portfolio.ts</span>
      </div>
      <div className="editor-tabs">
        <span className="tab active">portfolio.ts</span>
      </div>
      <div className="editor-content">
        <div className="line-numbers">
          {CODE_LINES.map((_, i) => (
            <span key={i} className={visibleLines > i ? 'visible' : ''}>
              {i + 1}
            </span>
          ))}
        </div>
        <div className="code-lines">
          {CODE_LINES.map((line, i) => (
            <div
              key={i}
              className={`code-line ${visibleLines > i ? 'visible' : ''} ${cursorLine === i ? 'cursor-line' : ''}`}
            >
              <span className={`token ${line.type}`}>{line.text || ' '}</span>
              {cursorLine === i && <span className="cursor" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CodeEditorMockup;
