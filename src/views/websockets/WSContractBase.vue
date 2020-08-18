<template lang="pug">
    div(style="text-align: left")
        h2 @nexjs/ws - Base Contract
        ul
            li
                button(@click="subscribe") subscribe
                button(@click="unsubscribe") unsubscribe
            li
                button(@click="print") send 
                span demo.print()
            li
                button(@click="delay") send  
                span demo.delay()
            li
                button(@click="notify") send  
                span demo.notify()        
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
