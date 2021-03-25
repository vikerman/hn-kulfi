import { css, html, TemplateResult } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { Item } from '../../common/item.js';

export const styles = css`
  h1 {
    font-weight: 500;
  }
  .item {
    border-bottom: 1em solid rgba(0, 0, 0, 0.1);
    margin: 0 -2em 2em -2em;
    padding: 0 2em 2em 2em;
  }
  html.dark .item {
    border-bottom: 1em solid rgba(255, 255, 255, 0.1);
  }
  .main-link {
    display: block;
    text-decoration: none;
  }
  small {
    display: block;
    font-size: 14px;
  }
  .meta {
    font-size: 0.8em;
    font-weight: 300;
    color: var(--fg-light);
  }
  .comments > :global(.comment):first-child {
    border-top: none;
  }
  .comment {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
  html.dark .comment {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .meta-bar {
    padding: 1em 0;
    cursor: pointer;
    background: 100% 50% no-repeat url(/static/icons/fold.svg);
    background-size: 1em 1em;
  }
  .hidden .meta-bar {
    background-image: url(/static/icons/unfold.svg);
  }
  .comment .children {
    padding: 0 0 0 1em;
    margin: 0;
  }
  .hidden .body,
  .hidden .children {
    display: none;
  }
  @media (min-width: 720px) {
    .comment .children {
      padding: 0 0 0 2em;
    }
  }
  li {
    list-style: none;
  }
  .meta {
    display: block;
    font-size: 14px;
    color: var(--fg-light);
  }
  .comment a {
    color: var(--fg-light);
  }
  /* prevent crazy overflow layout bug on mobile */
  .body * {
    overflow-wrap: break-word;
  }
  .comment pre {
    overflow-x: auto;
  }
`;

export function head() {
  // TODO: There is a bug here in lit ssr if params.id is used here in title.
  return html`<title>Svelte Hacker News</title>`;
}

function comment(c: Item): TemplateResult {
  if (!c.deleted) {
    return html`
      <article class="comment">
        <div class="meta-bar" data-action="toggleComment">
          <span class="meta"
            ><a href="/user/${c.user}">${c.user}</a> ${c.time_ago}</span
          >
        </div>

        <div class="body">${unsafeHTML(c.content)}</div>

        ${c.comments.length > 0
          ? html`<ul class="children">
              ${c.comments.map(child => html`<li>${comment(child)}</li>`)}
            </ul>`
          : ''}
      </article>
    `;
  }
  return html``;
}

export function render(params: { id: string }, item: Item) {
  return html`<div>
      <article class="item">
        <a class="main-link" href="${item.url}">
          <h1>${item.title}</h1>
          ${item.domain != null ? html`<small>${item.domain}</small>` : ''}
        </a>

        <p class="meta">
          ${item.points} points by
          <a href="/user/${item.user}">${item.user}</a> ${item.time_ago}
        </p>

        ${item.content ? html`${item.content}` : ''}
      </article>

      <div class="comments">
        ${item.comments ? item.comments.map(i => comment(i)) : ''}
      </div>
    </div>
    <script async type="module" src="/js/scripts/toggleComment.js"></script> `;
}
