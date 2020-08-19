export interface IEnvironment {
    mode: string;
    i18n: {
        locale: string;
        fallback_local: string;
    };
    wsapi: {
        url: string;
        path: string;
        nsp: string;
    };
    defaults: {
        user: {
            email: string;
            password: string;
        };
    };
}

export class Environment {
    vars: IEnvironment;
    constructor() {
        this.vars = {} as IEnvironment;
    }
    create(): void {
        this.vars = {
            mode: this.var('VUE_APP_MODE'),
            i18n: {
                locale: this.var('VUE_APP_I18N_LOCALE'),
                fallback_local: this.var('VUE_APP_I18N_FALLBACK_LOCALE'),
            },
            wsapi: {
                url: this.var('VUE_APP_WSAPI_URL'),
                path: this.var('VUE_APP_WSAPI_PATH'),
                nsp: this.var('VUE_APP_WSAPI_NSP'),
            },
            defaults: {
                user: {
                    email: this.var('VUE_APP_DEFAULT_USER_EMAIL'),
                    password: this.var('VUE_APP_DEFAULT_USER_PASSWORD'),
                },
            },
        };
    }
    check(): void {
        this.checkExists('VUE_APP_MODE');
        this.checkExists('VUE_APP_I18N_LOCALE');
        this.checkExists('VUE_APP_I18N_FALLBACK_LOCALE');
    }
    print(): void {
        // console.log('[Environment Variables]', this.vars);
    }

    private checkExists(name: string): void {
        if (!process.env[name]) {
            throw new Error(`Environment variable '${name}' not found`);
        }
    }
    private var(name: string): string {
        return process.env[name] as string;
    }
}
