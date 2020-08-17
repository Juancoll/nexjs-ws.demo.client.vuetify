import { IRouteMetadata } from '@/lib/router';

import HomeView from '@/views/home/index';

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
        path: '/default/ws/doc',
        name: 'default-ws-doc',
        component: HomeView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-file-document-box',
            iconColor: 'primary',
            title: 'WS Doc',
            subtitle: 'documentation',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws/main',
        name: 'default-ws-main',
        component: HomeView,
        meta: {
            showInToolbar: true,
            showInDrawer: true,
            icon: 'mdi-power-socket',
            iconColor: 'primary',
            title: 'WS Main',
            subtitle: 'Connection and authentication',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws/services/demo',
        name: 'default-ws-services-demo',
        component: HomeView,
        meta: {
            showInToolbar: false,
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'primary',
            title: 'WS demo',
            subtitle: 'Demo ws service',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws/services/custom',
        name: 'default-ws-services-custom',
        component: HomeView,
        meta: {
            showInToolbar: false,
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'primary',
            title: 'WS custom',
            subtitle: 'Custom ws service',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws/services/db',
        name: 'default-ws-services-db',
        component: HomeView,
        meta: {
            showInToolbar: false,
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'primary',
            title: 'WS db',
            subtitle: 'Db ws service',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws/services/jobs',
        name: 'default-ws-services-jobs',
        component: HomeView,
        meta: {
            showInToolbar: false,
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'primary',
            title: 'WS jobs',
            subtitle: 'Jobs ws service',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws/services/orgs',
        name: 'default-ws-services-orgs',
        component: HomeView,
        meta: {
            showInToolbar: false,
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'primary',
            title: 'WS orgs',
            subtitle: 'Orgs ws service',
        } as IRouteMetadata,
    },
    {
        path: '/default/ws/services/users',
        name: 'default-ws-services-users',
        component: HomeView,
        meta: {
            showInToolbar: false,
            showInDrawer: true,
            icon: 'mdi-power-plug',
            iconColor: 'primary',
            title: 'WS users',
            subtitle: 'Users ws service',
        } as IRouteMetadata,
    },
];
