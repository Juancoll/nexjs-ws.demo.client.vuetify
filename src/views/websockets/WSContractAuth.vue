<template lang="pug">
    div(style="text-align: left")
        h2 @nexjs/ws - Auth Contract
        ul
            li
                button(@click="register") register 
                input(type="text" :value="registerEmail" )
                input(type="text" :value="registerPassword" )
            li
                button(@click="login") login
                input(type="text" :value="loginEmail")
                input(type="text" :value="loginPassword")
            li
                button(@click="logout") logout
            li
                button(@click="subscribe") subscribe
                button(@click="unsubscribe") unsubscribe
            li
                button(@click="print") send 
                span demo.print()            
            li
                button(@click="notify") send 
                span demo.notify()
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { wsapi } from '@/services/wsapi';

@Component
export default class WSAuthContractComponent extends Vue {
    registerEmail = 'juan@any.com';
    registerPassword = '123456';

    loginEmail = 'juan@any.com';
    loginPassword = '123456';

    constructor() {
        super();
        console.log('[WSAuthContractComponent] constructor()');
    }

    //#region [ Vue ]
    mounted(): void {
        console.log('[WSAuthContractComponent] mounted()');
        wsapi.authContract.onUpdate.on(() =>
            console.log('[credentialContract] onUpdate'),
        );
        wsapi.authContract.onDataUpdate.on((data) =>
            console.log('[credentialContract] onDataUpdate', data),
        );
    }
    destroyed(): void {
        console.log('[WSAuthContractComponent] destroyed()');
        wsapi.authContract.onUpdate.off();
        wsapi.authContract.onDataUpdate.off();
    }
    //#endregion

    async subscribe(): Promise<void> {
        try {
            console.log('[WSAuthContractComponent] subscribe request');
            await wsapi.authContract.onUpdate.sub('user-credentials-001');
            await wsapi.authContract.onDataUpdate.sub('user-credentials-002');
            console.log('[WSAuthContractComponent] subscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async unsubscribe(): Promise<void> {
        try {
            console.log('[WSAuthContractComponent] unsubscribe request');
            await wsapi.authContract.onUpdate.unsub();
            await wsapi.authContract.onDataUpdate.unsub();
            console.log('[WSAuthContractComponent] unsubscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async print(): Promise<void> {
        try {
            console.log('[WSAuthContractComponent] print() request');
            await wsapi.authContract.print();
            console.log('[WSAuthContractComponent] print() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async notify(): Promise<void> {
        try {
            console.log('[WSAuthContractComponent] notify() request');
            await wsapi.authContract.notify();
            console.log('[WSAuthContractComponent] notify() response');
        } catch (err) {
            console.warn(err);
        }
    }
}
</script>
<style lang="scss" scoped>
button {
    width: 100px;
    height: 28px;
    color: #ed1e79;
    background-color: transparent;
    border: #ed1e79;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
}
input {
    height: 25px;
    border: #ed1e79;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
    margin-right: 5px;
}
h2 {
    color: gray;
}
</style>
