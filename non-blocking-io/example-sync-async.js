const asyncExample = require('./async-example');
const syncExample = require('./sync-example');

asyncExample.handler();
// syncExample.handler();
for (let i=0; i<100; i++) {
  console.log(`counting => ${i}`);
}

console.log('Process finished');