// A one-off script to toggle comments.
// This doesn't need a full fledged web component with hydration, re-rendering etc. etc.
document.body.addEventListener('click', ev => {
  const els = ev.composedPath();
  // See if the event is meant to toggle comments
  // TODO: Make this a generic system like https://github.com/google/jsaction.
  for (const el of els) {
    if (
      (el as HTMLElement).getAttribute &&
      (el as HTMLElement).getAttribute('data-action') === 'toggleComment'
    ) {
      const article = (el as HTMLElement).parentElement;
      if (!article) {
        return;
      }

      // Toggle hidden class on the parent article
      if (article.classList.contains('hidden')) {
        article.classList.remove('hidden');
      } else {
        article.classList.add('hidden');
      }
      break;
    }
  }
});
