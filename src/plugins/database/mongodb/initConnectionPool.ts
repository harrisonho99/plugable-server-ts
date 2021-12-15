import { MongoClient } from 'mongodb';
import { databaseConf } from '../../config/index.type';
import Log from '../../../tools/log';

async function initConnectionPool(dbConfig: databaseConf): Promise<MongoClient> {
  try {
    const client = new MongoClient(dbConfig.mongodb.URI, dbConfig.mongodb.options);
    await client.connect();
    await client.db("admin").command({ping : 1})
    Log.green("Connect Mongodb success!")
    return client;
  } catch (error) {
    Log.traceErr(error)
    process.exit(1);
  }
}

export {initConnectionPool}