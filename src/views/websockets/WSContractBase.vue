<template lang="pug">
    v-card
        h1  @nexjs Websocket Connection
        v-alert(outlined  type="warning"  border="left") Press F12 to open the browser Console. 
        v-row
            v-col 
                v-btn(@click="subscribe") subscribe
            v-col 
                v-btn(@click="unsubscribe") unsubscribe
        v-row
            v-col 
                v-btn(@click="print") print
            v-col 
                v-btn(@click="delay") delay
            v-col 
                v-btn(@click="notify") notify        
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { wsapi } from '@/services/wsapi';

@Component
export default class WSBaseContractComponent extends Vue {
    url = 'http://localhost:3000';

    constructor() {
        super();
        console.log('[WSBaseContractComponent] constructor()');
    }

    mounted(): void {
        console.log('[WSBaseContractComponent] mounted()');
        wsapi.baseContract.onUpdate.on(() =>
            console.log('[baseContract] onUpdate'),
        );
        wsapi.baseContract.onDataUpdate.on((data) =>
            console.log('[baseContract] onDataUpdate', data),
        );
    }
    destroyed(): void {
        console.log('[WSBaseContractComponent] destroyed()');
        wsapi.baseContract.onUpdate.off();
        wsapi.baseContract.onDataUpdate.off();
    }

    async subscribe(): Promise<void> {
        try {
            console.log('[WSBaseContractComponent] subscribe request');
            await wsapi.baseContract.onUpdate.sub();
            await wsapi.baseContract.onDataUpdate.sub();
            console.log('[WSBaseContractComponent] subscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async unsubscribe(): Promise<void> {
        try {
            console.log('[WSBaseContractComponent] unsubscribe request');
            await wsapi.baseContract.onUpdate.unsub();
            await wsapi.baseContract.onDataUpdate.unsub();
            console.log('[WSBaseContractComponent] unsubscribe response');
        } catch (err) {
            console.warn(err);
        }
    }

    async print(): Promise<void> {
        try {
            console.log('[WSBaseContractComponent] print() request');
            await wsapi.baseContract.print();
            console.log('[WSBaseContractComponent] print() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async delay(): Promise<void> {
        try {
            console.log('[WSBaseContractComponent] delay() request');
            await wsapi.baseContract.delay(2000);
            console.log('[WSBaseContractComponent] delay() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async notify(): Promise<void> {
        try {
            console.log('[WSBaseContractComponent] notify() request');
            await wsapi.baseContract.notify();
            console.log('[WSBaseContractComponent] notify() response');
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
