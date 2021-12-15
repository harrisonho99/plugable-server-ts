import { MongoClient } from 'mongodb';
import { databaseConf } from '../../config/index.type';
import { initConnectionPool } from './initConnectionPool';

async function mongoDBConnector(databaseConfig: databaseConf): Promise<MongoClient> {
  const mongodb = await initConnectionPool(databaseConfig);
  return mongodb;
}

export { mongoDBConnector };
