import { entry } from './server/index';
import Log from './tools/log';

async function main(...funcs: Function[]) {
  funcs.forEach((func) => func());
}

main(entry).catch((err) => {
  Log.traceErr(err);
  process.exit(1);
});
