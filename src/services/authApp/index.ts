import { registerService } from '@/services/registerService';

import { wsapi } from '@/services/wsapi';
import { WSAuthApp } from './WSAuthApp';

export const authApp = new WSAuthApp(wsapi);


registerService('authApp', authApp);