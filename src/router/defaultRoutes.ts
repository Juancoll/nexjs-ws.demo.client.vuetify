import { IRouteMetadata } from '@/lib/router';

import HomeView from '@/views/Home.vue';
import AboutView from '@/views/About.vue';

import WSConnectionView from '@/views/websockets/WSConnection.vue';
import WSContractAuth from '@/views/websockets/WSContractAuth.vue';
import WSContractBase from '@/views/websockets/WSContractBase.vue';
import WSContractCredentials from '@/views/websockets/WSContractCredentials.vue';

import { RouteConfig } from 'vue-router';

export const routes: RouteConfig[] = [
    {
        path: '/default',
        name: 'default',
        component: HomeView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-home',
            iconColor: 'primary',
            title: 'Home',
            subtitle: 'default branch - home',
        } as IRouteMetadata,
    },
    {
        path: '/default/about',
        name: 'default-about',
        component: AboutView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-home',
            iconColor: 'primary',
            title: 'About',
            subtitle: 'default branch - About',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws',
        name: 'default-ws',
        component: WSConnectionView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-power-socket',
            iconColor: 'primary',
            title: 'Websockets',
            subtitle: 'Connection and authentication',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws/contracts/auth',
        name: 'default-ws-contracts-auth',
        component: WSContractAuth,
        meta: {
            showInToolbar: false,
            showInDrawer: true,
            icon: 'mdi-power-socket',
            iconColor: 'primary',
            title: 'WS Contract Auth',
            subtitle: '...',
            parent: 'default-ws',
        } as IRouteMetadata,
    },
];
