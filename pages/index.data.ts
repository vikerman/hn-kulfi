// Reuse data function from /[list]/[page]
import { data as _data } from './[list]/[page].data.js';

export async function data() {
  return _data({ list: 'top', page: '1' });
}
