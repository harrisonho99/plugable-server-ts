import { join } from 'path';
import { databaseConf } from './index.type';
import { setENV } from './envConf';
import { MongoClientOptions } from 'mongodb';
const config = {
  init: function () {
    setENV();
  },
  port: 3100,
  get getPort(): number {
    return this.port;
  },
  set setPort(port: number) {
    this.port = port;
  },
  appName: 'Messenger',
  log: {
    fileName: 'messenger_runtime.log',
    get path(): string {
      return join(__dirname, 'log', this.fileName);
    },
  },
  database: {
    mongodb: {
      URI: 'mongodb://localhost:27017',
      options: {
       keepAlive : true,
       maxPoolSize : 100,
       minPoolSize: 5,
      } as MongoClientOptions,
    },
  } as databaseConf,
};

export { config };
