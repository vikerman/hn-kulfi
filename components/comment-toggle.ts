import { customElement } from 'lit/decorators.js';

@customElement('comment-toggle')
export class CommentToggle extends HTMLElement {
  // A client only no-render custom element that just
  // looks for toggle element and article and toggles required classes.
  connectedCallback() {
    const toggleEl = this.querySelector('.meta-bar');
    const article = this.querySelector('article');
    if (!toggleEl || !article) {
      return;
    }
    toggleEl.addEventListener('click', e => {
      if (e.composedPath().some(n => (n as HTMLElement).tagName === 'A')) {
        return;
      }
      if (article.classList.contains('hidden')) {
        article.classList.remove('hidden');
      } else {
        article.classList.add('hidden');
      }
    });
  }
}
