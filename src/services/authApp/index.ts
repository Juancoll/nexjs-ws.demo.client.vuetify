import { registerService } from '@/services/registerService';

import { wsapi } from '@/services/wsapi';
import { WSAuthApp } from './WSAuthApp';
export const authApp = new WSAuthApp(wsapi);

// import { httpapi } from '@/services/httpapi';
// import { HttpLocalAuthApp } from './HttpLocalAuthApp';
// export const authApp = new HttpLocalAuthApp(httpapi);

// import { httpapi } from '@/services/httpapi';
// import { HttpJwtAuthApp } from './HttpJwtAuthApp';
// export const authApp = new HttpJwtAuthApp(httpapi);

registerService('authApp', authApp);
