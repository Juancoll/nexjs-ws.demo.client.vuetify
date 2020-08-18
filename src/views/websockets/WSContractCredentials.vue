<template lang="pug">
    div(style="text-align: left;")
        h2 @nexjs/ws - Credential Contract
        ul
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
export default class WSCredentialContractComponent extends Vue {
    url = 'http://localhost:3000';

    constructor() {
        super();
        console.log('[WSCredentialContractComponent] constructor()');
    }

    mounted(): void {
        console.log('[WSCredentialContractComponent] mounted()');
        wsapi.credentialsContract.onUpdate.on(() =>
            console.log('[credentialContract] onUpdate'),
        );
        wsapi.credentialsContract.onDataUpdate.on((data) =>
            console.log('[credentialContract] onDataUpdate', data),
        );
    }
    destroyed(): void {
        console.log('[WSCredentialContractComponent] destroyed()');
        wsapi.credentialsContract.onUpdate.off();
        wsapi.credentialsContract.onDataUpdate.off();
    }

    async subscribe(): Promise<void> {
        try {
            console.log('[WSCredentialContractComponent] subscribe request');
            await wsapi.credentialsContract.onUpdate.sub(
                'user-credentials-001',
            );
            await wsapi.credentialsContract.onDataUpdate.sub(
                'user-credentials-002',
            );
            console.log('[WSCredentialContractComponent] subscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async unsubscribe(): Promise<void> {
        try {
            console.log('[WSCredentialContractComponent] unsubscribe request');
            await wsapi.credentialsContract.onUpdate.unsub();
            await wsapi.credentialsContract.onDataUpdate.unsub();
            console.log('[WSCredentialContractComponent] unsubscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async print(): Promise<void> {
        try {
            console.log('[WSCredentialContractComponent] print() request');
            await wsapi.credentialsContract.print('user-credentials-003');
            console.log('[WSCredentialContractComponent] print() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async notify(): Promise<void> {
        try {
            console.log('[WSCredentialContractComponent] notify() request');
            await wsapi.credentialsContract.notify();
            console.log('[WSCredentialContractComponent] notify() response');
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
