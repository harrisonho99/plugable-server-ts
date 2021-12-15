import { createLogger } from 'bunyan';
import chalk from 'chalk';

const log = console.log;
const dir = console.dir;

const streamLog = createLogger({ name: 'Logger', stream: process.stdout });

const blue = (...str: any[]) => {
  log(chalk.blue(...str));
};
const red = (...str: any[]) => {
  log(chalk.red(...str));
};
const green = (...str: any[]) => {
  log(chalk.green(...str));
};

const blueBright = (...str: any[]) => {
  log(chalk.blueBright(...str));
};
const cyan = (...str: any[]) => {
  log(chalk.cyan(...str));
};
const trace = (...str: any[]) => {
  dir(str);
};
const traceErr = (...str: any[]) => {
  streamLog.error(JSON.stringify(str));
  trace(str);
};
export default {
  info: streamLog.info.bind(streamLog),
  err: streamLog.error.bind(streamLog),
  warn: streamLog.warn.bind(streamLog),
  trace,
  blue,
  red,
  green,
  cyan,
  blueBright,
  traceErr,
};
