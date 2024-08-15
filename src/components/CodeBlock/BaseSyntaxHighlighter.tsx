import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import ts from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import css from "react-syntax-highlighter/dist/esm/languages/prism/css";
import scss from "react-syntax-highlighter/dist/esm/languages/prism/scss";
import python from "react-syntax-highlighter/dist/esm/languages/prism/python";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import powershell from "react-syntax-highlighter/dist/esm/languages/prism/powershell";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import tsx from "react-syntax-highlighter/dist/esm/languages/prism/tsx";
import markdown from "react-syntax-highlighter/dist/esm/languages/prism/markdown";
import {
  Javascript,
  Scss,
  Typescript,
  Python,
  Css,
  Bash,
  Mdx,
  Php,
} from "../Icons";
import { FaReact } from "react-icons/fa6";
import { SiPowershell } from "react-icons/si";

export const LanguageIconMap: Record<string, any> = {
  javascript: <Javascript className="size-[16px]" />,
  jsx: <FaReact className="text-[#61dafb] size-[16px]" key={1} />,
  tsx: <FaReact className="text-[#61dafb] size-[16px]" key={1} />,
  js: <Javascript className="size-[16px]" />,
  typescript: <Typescript className="size-[16px]" />,
  ts: <Typescript className="size-[16px]" />,
  python: <Python className="size-[16px]" />,
  php: <Php className="w-[20px] h-[11px]" />,
  sass: <Scss className="size-[16px]" />,
  css: <Css className="size-[16px]" />,
  bash: <Bash className="size-[16px]" />,
  powershell: <SiPowershell className="size-[16px]" />,
  md: <Mdx className="size-[20px]" />,
  mdx: <Mdx className="size-[20px]" />,
};

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", ts);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("ts", ts);
SyntaxHighlighter.registerLanguage("css", css);
SyntaxHighlighter.registerLanguage("scss", scss);
SyntaxHighlighter.registerLanguage("tsx", ts);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("php", php);
SyntaxHighlighter.registerLanguage("powershell", powershell);
SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("jsx", jsx);
SyntaxHighlighter.registerLanguage("tsx", tsx);
SyntaxHighlighter.registerLanguage("mdx", markdown);
SyntaxHighlighter.registerLanguage("md", markdown);

export default SyntaxHighlighter;

export const hljsOverrideStyles = {
  "hljs-comment": {
    color: "#A6ACCD",
    fontStyle: "initial",
  },
  "hljs-keyword": {
    color: "#C792EA",
  },
  "hljs-built_in": {
    color: "#89DDFF",
  },
  "hljs-name": {
    color: "#89DDFF",
  },
  "hljs-selector-tag": {
    color: "#89DDFF",
  },
  "hljs-tag": {
    color: "#89DDFF",
  },
  "hljs-string": {
    color: "#C3E88D",
  },
  "hljs-attr": {
    color: "#C792EA",
  },
  "hljs-addition": {
    color: "#F07178",
  },
  "hljs-literal": {
    color: "#F07178",
  },
  "hljs-section": {
    color: "#F07178",
  },
  "hljs-template-tag": {
    color: "#F07178",
  },
  "hljs-template-variable": {
    color: "#F07178",
  },
  "hljs-title": {
    color: "#F07178",
  },
  "hljs-type": {
    color: "#F07178",
  },
  "hljs-selector-class": {
    color: "#FFCB6B",
  },
  "hljs-number": {
    color: "#FFCB6B",
  },
};
