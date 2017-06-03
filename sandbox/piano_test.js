const { asyncify } = require('asyncbox');
const Piano = require('../instruments/piano');
const Promise = require('bluebird');

async function run () {
  let p = new Piano({name: 'test'});
  await p.start();
  try {
    await p.playScale();
  } finally {
    await p.stop();
  }
}

if (require.main === module) {
  asyncify(run);
}
