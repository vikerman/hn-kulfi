import { html } from 'lit';

export function head() {
  return html`<title>About • Kulfi Hacker News</title>`;
}

export function render() {
  return html`
    <h1>About this site</h1>

    <p>This is a simple Hacker News clone, built with Kulfi.</p>

    <p>
      Kulfi aims to be a framework for building high performance web
      applications using HTML and web components.
    </p>

    <p>
      This example was copied from the Svelte version at
      <a href="https://github.com/sveltejs/hn.svelte.dev"
        >https://github.com/sveltejs/hn.svelte.dev/</a
      >
    </p>

    <p>
      We're using
      <a href="https://github.com/davideast/hnpwa-api">hnpwa-api</a> as a
      backend. The app is hosted on
      <a href="https://cloud.google.com/run/">Cloud Run</a>, using
      <a href="https://www.cloudflare.com/">Cloudflare</a> for the CDN.
    </p>
  `;
}
