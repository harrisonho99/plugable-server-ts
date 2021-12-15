import { config } from 'dotenv';
import { join } from 'path';

function setENV() {
  config({ path: join(__dirname, '.env') });
}

export {setENV}
