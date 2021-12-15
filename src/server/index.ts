import { loadPlugin } from '../plugins';
import { Server } from './express/Server';

async function entry() {
  const [client, port] = await loadPlugin();

  const server = new Server(client, port);

  server.listen();
}

export { entry };
