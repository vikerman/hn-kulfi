import { Item } from '../common/item.js';

import { head as _head, render as _render } from './[list]/[page].js';

// Reuse methods from [list]/[page]

export { styles } from './[list]/[page].js';

export function head() {
  return _head({ list: 'top', page: '1' });
}

export function render(_params: {}, items: Item[]) {
  return _render({ list: 'top', page: '1' }, items);
}
