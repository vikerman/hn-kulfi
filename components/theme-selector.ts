import 'kulfi/hydrate-support.js';

import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('theme-selector')
export class ThemeSelector extends LitElement {
  static styles = css`
    button {
      position: fixed;
      right: 1em;
      bottom: 1em;
      width: 2em;
      height: 2em;
      text-indent: -9999px;
      background-color: transparent;
      border: none;
      opacity: 0.4;
    }
    .nice {
      outline: none;
    }
    svg {
      position: absolute;
      width: 100%;
      height: 100%;
      right: 0;
      bottom: 0;
    }
    path {
      fill: var(--fg);
      transition: opacity 0.6s;
    }
    .light {
      opacity: 0;
    }
    .dark {
      opacity: 1;
    }
  `;

  private nice = false;

  @property()
  theme = 'light';

  toggle() {
    const h = document.querySelector('html');
    if (h == null) {
      return;
    }
    h.classList.remove(this.theme);
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    h.classList.add(this.theme);
    // TODO: Store the client side settings in localStorage.
  }

  render() {
    return html`
      <button
        aria-label="Toggle theme"
        title="Toggle theme"
        class="nice"
        @click=${this.toggle}
      >
        toggle theme

        <svg viewBox="0 0 24 24">
          <path
            d="M12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z"
          />
        </svg>
        <svg viewBox="0 0 24 24" class="${this.theme}">
          <path
            d="M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z"
          />
        </svg>
      </button>
    `;
  }
}
