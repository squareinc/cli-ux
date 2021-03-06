import {cli} from '../src'

const wait = (ms = 400) => new Promise(resolve => setTimeout(resolve, ms))

async function run() {
  cli.action.start('doing a thing')
  await wait()
  let input = await cli.confirm('yes or no')
  await wait()
  cli.log(`you entered: ${input}`)
}
run().catch(err => cli.error(err))
