// src/components/Introduction.tsx
import React from 'react';
import CodeEditorMockup from './CodeEditorMockup';
import '../assets/styles/Introduction.scss';

const Introduction: React.FC = () => {
  return (
    <div className="introduction-page">
      <div className="introduction-layout">
        <div className="introduction-editor">
          <CodeEditorMockup />
        </div>
        <div className="introduction-content">
          <h1>Introduction</h1>
          <p>
          I’m a Computer Science graduate focused on building reliable and scalable software systems that solve real-world problems. I work across backend development, AI-driven systems, and full-stack applications, with a focus on clean architecture and thoughtful engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
