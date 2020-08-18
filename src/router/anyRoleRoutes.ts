import { IRouteMetadata } from '@/lib/router';

import { RouteConfig } from 'vue-router';

import HomeView from '@/views/Home.vue';
import WSConnectionView from '@/views/websockets/WSConnection.vue';
import WSContractAuth from '@/views/websockets/WSContractAuth.vue';
import WSContractBase from '@/views/websockets/WSContractBase.vue';
import WSContractCredentials from '@/views/websockets/WSContractCredentials.vue';

export const routes: RouteConfig[] = [
    {
        path: '/any',
        name: 'any',
        component: HomeView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-home',
            iconColor: 'primary',
            title: 'Home',
            subtitle: 'any branch - home',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws',
        name: 'default-ws',
        component: WSConnectionView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-flash',
            iconColor: 'primary',
            title: 'Websockets',
            subtitle: 'WS Connection',
        } as IRouteMetadata,
        children: [
            {
                path: '/default/ws/contracts/Base',
                name: 'default-ws-contracts-base',
                component: WSContractBase,
                meta: {
                    showInToolbar: false,
                    showInDrawer: true,
                    icon: 'mdi-file-document',
                    iconColor: 'secondary',
                    title: 'Contract Base',
                    subtitle: 'basics features',
                    parent: 'default-ws',
                } as IRouteMetadata,
            },
            {
                path: '/default/ws/contracts/auth',
                name: 'default-ws-contracts-auth',
                component: WSContractAuth,
                meta: {
                    showInToolbar: false,
                    showInDrawer: true,
                    icon: 'mdi-file-document',
                    iconColor: 'secondary',
                    title: 'Contract Auth',
                    subtitle: 'Require Authentication',
                    parent: 'default-ws',
                } as IRouteMetadata,
            },
            {
                path: '/default/ws/contracts/credentials',
                name: 'default-ws-contracts-credentials',
                component: WSContractCredentials,
                meta: {
                    showInToolbar: false,
                    showInDrawer: true,
                    icon: 'mdi-file-document',
                    iconColor: 'secondary',
                    title: 'Contract Credentials',
                    subtitle: 'Require Credentials',
                    parent: 'default-ws',
                } as IRouteMetadata,
            },
        ],
    },
];
