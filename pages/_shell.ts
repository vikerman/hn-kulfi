import { html } from 'lit';

import '../components/nav-cmp.js';
import '../components/theme-selector.js';

export function render() {
  return html`
    <nav-cmp></nav-cmp>
    <main>
      <!--PAGE-->
    </main>
    <theme-selector></theme-selector>
    <script async type="module" src="/js/components/nav-cmp.js"></script>
    <script async type="module" src="/js/components/theme-selector.js"></script>
  `;
}
