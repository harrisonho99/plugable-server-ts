import { MongoClientOptions } from 'mongodb';
type databaseConf = {
  mongodb: {
    URI: string;
    options: MongoClientOptions;
  };
};

export { databaseConf };
