import { registerService } from '@/services/registerService';
import { Environment } from './Environment';

const env = new Environment();
env.create();
env.check();
env.print();

export { env };
registerService('env', env);
