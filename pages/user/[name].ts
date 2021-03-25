/* eslint-disable lit/no-invalid-html */
import { html } from 'lit';
import { User } from '../../common/user.js';

export function head() {
  // TODO: There is a bug here in lit ssr if params.name is used here.
  return html`<title>User - Svelte Hacker News</title>`;
}

export function render(params: { name: string }, user: User) {
  return html`<h1>${params.name}</h1>

    <div>
      <p>
        ...joined <strong>${user.created}</strong>, and has
        <strong>${user.karma}</strong> karma
      </p>

      <p>
        <a href="https://news.ycombinator.com/submitted?id=${user.id}"
          >submissions</a
        >
        /
        <a href="https://news.ycombinator.com/threads?id=${user.id}"
          >comments</a
        >
        /
        <a href="https://news.ycombinator.com/favorites?id=${user.id}"
          >favourites</a
        >
      </p>

      <!-- TODO: properly sanitize and display the HTML in about -->
      ${user.about
        ? html`<div class="about">
            <p>${user.about}</p>
          </div> `
        : ''}
    </div>`;
}
