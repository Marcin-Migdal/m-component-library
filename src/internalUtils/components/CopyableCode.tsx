import React, { CSSProperties, useState } from "react";

type CopyableCodeProps = {
  id?: string;
  value: string;
  style?: CSSProperties;
};

export const CopyableCode = ({ value, id, style = {} }: CopyableCodeProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 500);
    } catch (err) {
      // fallback or error handling
    }
  };

  return (
    <code
      id={id}
      onClick={handleCopy}
      style={{
        whiteSpace: "nowrap",
        cursor: "pointer",
        background: copied ? "#e0ffe0" : undefined,
        borderRadius: 4,
        padding: "2px 6px",
        transition: "background 0.2s",
        userSelect: "all",
        color: "var(--primary-text-color_300)",
        textAlign: "start",
        ...style,
      }}
      title={copied ? "Copied!" : "Click to copy"}
    >
      {copied ? "Copied!" : value}
    </code>
  );
};
