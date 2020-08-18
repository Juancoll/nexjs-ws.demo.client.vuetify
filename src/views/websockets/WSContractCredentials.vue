<template lang="pug">
    div.full.flex.v-container
        v-card
            h1 Credentials Contract
            h3 Pub/Sub Protocol (Hub module)   
            v-row
                v-col 
                    v-btn(@click="subscribe") subscribe
                v-col 
                    v-btn(@click="unsubscribe") unsubscribe
                    
            h3 Req/Res Protocol (Rest Module))           
            v-row
                v-col 
                    v-btn(@click="print") print
                v-col 
                    v-btn(@click="notify") notify     
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
.v-card {
    margin: 10px;
    padding: 20px;
    width: Calc(100% - 20px);
}
.v-btn {
    margin: 5px;
    width: 100%;
}
</style>
