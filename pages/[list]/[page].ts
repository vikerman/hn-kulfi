import { css, html } from 'lit';
import { Item } from '../../common/item.js';

const PAGE_SIZE = 30;

export function head(params: { list: string; page: string }) {
  return html`<title>Kulfi Hacker News</title>
    <meta
      name="description"
      content="Latest Hacker News stories in the ${params.list} category"
    />`;
}

export const styles = css`
  article {
    position: relative;
    padding: 0 0 0 4em;
    margin: 0 0 1.5em 0;
  }
  h2 {
    font-size: 1em;
    font-weight: 500;
    margin: 0 0 0.5em 0;
    color: var(--fg);
  }
  h2 a {
    text-decoration: none;
  }
  p {
    font-size: 0.8em;
    color: var(--fg-light);
    margin: 0;
    font-weight: 300;
  }
  small {
    color: var(--fg-light);
    font-weight: 300;
  }
  .index {
    position: absolute;
    font-size: 1.6em;
    font-weight: 200;
    color: var(--fg-light);
    left: 0.2em;
    top: 0;
    text-align: right;
    width: 0.75em;
    line-height: 1;
  }
`;

function itemSummary(item: Item, index: number) {
  return html`
    <article>
      <h2>
        <a href=${item.domain ? item.url : `/item/${item.id}`}
          >${item.title}
          ${item.domain != null ? html`<small>(${item.domain})</small>` : ''}</a
        >
      </h2>

      ${item.type === 'job'
        ? html`<p>${item.time_ago}</p>`
        : html`
            <p>
              ${item.points} points by
              <a href="/user/${item.user}">${item.user}</a>
              ${item.time_ago} |
              <a href="/item/${item.id}"
                >${item.comments_count}
                ${item.comments_count === 1 ? 'comment' : 'comments'}</a
              >
            </p>
          `}
      <span class="index">${index}</span>
    </article>
  `;
}

export function render(params: { list: string; page: string }, items: Item[]) {
  const start = 1 + (+params.page - 1) * PAGE_SIZE;
  const next = `/${params.list}/${+params.page + 1}`;

  return html`
    ${items.map((item, i) => (item ? itemSummary(item, start + i) : ``))}
    <a class="more" href=${next}>More...</a>
  `;
}
