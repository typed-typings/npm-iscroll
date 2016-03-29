import test = require('blue-tape');

import IScroll = require('iscroll');

test('Iscroll', (t) => {
  const instance = new IScroll('body');
  t.not(instance, null, 'new on body');
  t.end();
});
