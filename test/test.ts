import { expect, tap } from 'tapbundle';
import * as commonlog from '../ts/index';

tap.test('first test', async () => {
  console.log('Since this is an interface package, there is nothing to test dynamically :)');
});

tap.start();
