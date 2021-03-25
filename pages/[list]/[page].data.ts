const VALID_LISTS = new Set(['news', 'newest', 'show', 'ask', 'jobs']);

export async function data(params: { list: string; page: string }) {
  const list =
    // eslint-disable-next-line no-nested-ternary
    params.list === 'top'
      ? 'news'
      : params.list === 'new'
      ? 'newest'
      : params.list;

  if (!VALID_LISTS.has(list)) {
    // TODO: Return 404 status.
    return {};
  }

  const page = +params.page;
  const res = await fetch(`https://api.hnpwa.com/v0/${list}/${page}.json`);
  return res.json();
}
