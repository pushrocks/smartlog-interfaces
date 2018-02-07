import { expect, tap } from 'tapbundle'
import * as commonlog from '../ts/index'

tap.test('first test', async () => {
  console.log(commonlog.standardExport)
})

tap.start()
