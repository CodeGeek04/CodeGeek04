// components/MarkdownRender.jsx

import React from "react";
import ReactMarkdown from "react-markdown";
import MathJax from "react-mathjax";
import RemarkMathPlugin from "remark-math";

function MarkdownRender({ children, ...props }: { children: any; props: any }) {
  const newProps = {
    ...props,
    remarkPlugins: [RemarkMathPlugin],
    components: {
      ...props.components,
      math: (props: { value: any }) => <MathJax.Node formula={props.value} />,
      inlineMath: (props: { value: any }) => (
        <MathJax.Node inline formula={props.value} />
      ),
    },
  };

  return (
    <MathJax.Provider input="tex">
      <ReactMarkdown {...newProps}>{children}</ReactMarkdown>
    </MathJax.Provider>
  );
}

export default MarkdownRender;
