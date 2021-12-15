import { MongoClient } from 'mongodb';
import { config } from './config';
import { mongoDBConnector } from './database/mongodb';

async function loadPlugin(): Promise<[MongoClient, number]> {
  config.init();
  const mongodb = await mongoDBConnector(config.database);
  return [mongodb, config.getPort];
}

export { loadPlugin };
