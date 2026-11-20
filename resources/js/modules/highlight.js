/**
 * Syntax highlighting with a curated set of languages (keeps the chunk small).
 * Add more from highlight.js/lib/languages/* as needed.
 */
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import php from 'highlight.js/lib/languages/php';
import xml from 'highlight.js/lib/languages/xml';
import yaml from 'highlight.js/lib/languages/yaml';
import markdown from 'highlight.js/lib/languages/markdown';

hljs.registerLanguage('bash', bash);
hljs.registerLanguage('css', css);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);
hljs.registerLanguage('php', php);
hljs.registerLanguage('html', xml);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('yaml', yaml);
hljs.registerLanguage('markdown', markdown);
hljs.registerAliases(['antlers', 'blade'], { languageName: 'html' });
hljs.registerAliases(['sh', 'shell', 'zsh'], { languageName: 'bash' });

export default function highlight() {
    document.querySelectorAll('pre code').forEach((block) => hljs.highlightElement(block));
}
