<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="./assets/icons/icon_32.png"
                    transition="scale-transition"
                    width="40"
                />

                <v-img
                    alt="Vuetify Name"
                    class="shrink mt-1 hidden-sm-and-down"
                    contain
                    min-width="100"
                    src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
                    width="100"
                />
            </div>

            <v-spacer></v-spacer>

            <v-btn
                href="https://github.com/vuetifyjs/vuetify/releases/latest"
                target="_blank"
                text
            >
                <span class="mr-2">Latest Release</span>
                <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
        </v-app-bar>

        <v-main>
            <HelloWorld />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { RouteConfig } from 'vue-router';

import { env } from '@/services/env';
import router from '@/router';
import { RouterTools, BranchEventArgs } from '@/lib/router';

import { authApp } from '@/services/authApp';
import { IAuthUser } from '@/lib/authApp';

@Component
export default class RootView extends Vue {
    //#region [ data ]
    public logo = require('@/assets/icons/icon_256.png');
    public title = 'wsapi demo';
    public showDrawer = false;
    public footer = {
        // eslint-disable-next-line quotes
        left: "<span style='color:red'><b>STATUS</b></span>",
        center: '',
        right: '&copy; ne)( group',
    };
    public userValidRoles: string[] = [];
    public showUserMenu = true;
    public showRolesInMenu = false;
    public drawerEnabled = false;
    public drawerRoutes: RouteConfig[] = [];
    public toolbarRoutes: RouteConfig[] = [];
    public auth = authApp;
    //#endregion

    //#region  [ computed ]
    public get mode(): string {
        const mode = env.vars.mode as string;
        if (mode == 'production') {
            return '';
        }
        return `(${mode})`;
    }
    //#endregion

    constructor() {
        super();
        console.log('[App.vue] constructor');
    }

    //#region  [ methods ]
    goToRoute(route: RouteConfig): void {
        router.pushIfNotCurrent(route.path);
    }
    toggleDrawer(): void {
        this.showDrawer = !this.showDrawer;
    }
    resize(): void {
        this.$set(
            this.footer,
            'center',
            JSON.stringify({ x: window.innerWidth, y: window.innerHeight }),
        );
    }
    logout(): void {
        authApp.logout();
    }
    login(): void {
        router.pushIfNotCurrent('/auth/login');
    }
    changeRole(role: string): void {
        router.updateRole(role);
    }
    //#endregion

    //#region [ handlers ]
    private onUpdateUser(user?: IAuthUser | null) {
        router.updateUser(user);
        this.userValidRoles = !user ? [] : router.userValidRoles;
        this.setUserMenuVisibilities();
    }
    private onRouterBranchChange(e: BranchEventArgs) {
        const routes = e.to.routes;
        this.drawerRoutes = RouterTools.flatRoutes(routes).filter(
            (x: RouteConfig) => x.meta && x.meta.showInDrawer,
        );
        this.toolbarRoutes = RouterTools.flatRoutes(routes).filter(
            (x: RouteConfig) => x.meta && x.meta.showInToolbar,
        );
    }
    //#endregion

    //#region  [ private ]
    private setUserMenuVisibilities() {
        this.showRolesInMenu =
            router.useAuth &&
            router.useRoles &&
            authApp.isAuth &&
            this.userValidRoles.length > 1;
    }
    //#endregion

    //#region [ Vue ]
    mounted(): void {
        const self = this;
        router.onRouteChange.sub(() => {
            self.showUserMenu = router.useAuth && !router.isAuthRoute;
            self.drawerEnabled =
                router.isAuthRoute && !router.useDefault
                    ? false
                    : self.drawerRoutes.length > 0
                    ? true
                    : false;
        });

        authApp.onAuthenticate.sub(this.onUpdateUser);
        router.onBranchChange.sub(this.onRouterBranchChange);

        this.resize();
        this.onUpdateUser(authApp.user);
    }

    destroyed(): void {
        authApp.onAuthenticate.unsub(this.onUpdateUser);
        router.onBranchChange.unsub(this.onRouterBranchChange);
    }
    //#endregion
}
</script>
