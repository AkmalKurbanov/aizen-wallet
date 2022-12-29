const WRAP = 4;
const $items = $('.payment-system__list-item');

for (let i = 0; i < $items.length; i += WRAP) {
  $items.slice(i, i + WRAP).wrapAll('<div class="payment-system__list-wrap">');
}