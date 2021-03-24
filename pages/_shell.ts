import { html } from 'lit';

import '../components/nav-cmp.js';
import '../components/theme-selector.js';

export function render(path: string) {
  return html`
    <nav-cmp path=${path}></nav-cmp>
    <main>
      <!--PAGE-->
    </main>
    <theme-selector></theme-selector>
    <script async type="module" src="/js/components/nav-cmp.js"></script>
    <script async type="module" src="/js/components/theme-selector.js"></script>
  `;
}
