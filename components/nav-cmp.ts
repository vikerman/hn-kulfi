import 'kulfi/hydrate-support.js';

import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { bind } from 'kulfi/bind.js';

@customElement('nav-cmp')
export class NavCmp extends LitElement {
  static styles = css`
    nav {
      /* background-color: rgba(255, 102, 0, 0.05); */
      border-bottom: 1px solid #ff6600;
      color: var(--fg-light);
      font-weight: 300;
      padding: 0 1em;
    }
    .icon {
      display: block;
      width: 1em;
      height: 1em;
      float: left;
      font-size: 2em;
      position: relative;
      top: 0.4em;
      box-sizing: border-box;
      margin: 0 0.5em 0 0;
    }
    ul {
      margin: 0;
      padding: 0;
    }
    ul::after {
      content: '';
      display: block;
      clear: both;
    }
    li {
      display: block;
      float: left;
    }
    .about {
      float: right;
    }
    .selected {
      position: relative;
      display: inline-block;
      color: var(--fg);
    }
    .selected::after {
      position: absolute;
      content: '';
      width: calc(100% - 1em);
      height: 2px;
      background-color: #ff6600;
      display: block;
      bottom: 0;
    }
    a {
      color: inherit;
      text-decoration: none;
      padding: 1em 0.5em;
      display: block;
      font-weight: 500;
    }
    @media (min-width: 400px) {
      .icon {
        margin: 0 0.5em 0 0;
      }
      li {
        display: inline-block;
      }
    }
  `;

  @property()
  path = '';

  connectedCallback() {
    super.connectedCallback!();
    bind('LOCATION', this, 'path');
  }

  private isSelected(p: string) {
    if (p === 'top' && this.path === '/') {
      return 'selected';
    }
    // Return selected if first part of segment match.
    const segments = this.path.split('/');
    return segments.length > 1 && segments[1] === p ? 'selected' : '';
  }

  render() {
    return html`<nav>
      <img
        alt="Kulfi Hacker News logo"
        class="icon"
        src="/static/favicon.png"
      />
      <ul>
        <li><a href="/" class="${this.isSelected('top')}">top</a></li>
        <li><a href="/new/1" class="${this.isSelected('new')}">new</a></li>
        <li><a href="/show/1" class="${this.isSelected('show')}">show</a></li>
        <li><a href="/ask/1" class="${this.isSelected('ask')}">ask</a></li>
        <li><a href="/jobs/1" class="${this.isSelected('jobs')}">jobs</a></li>

        <li class="about">
          <a class="${this.isSelected('about')}" href="/about">about</a>
        </li>
      </ul>
    </nav>`;
  }
}
