<template lang="pug">
    div(style="text-align: left;")
        h2 @nexjs/ws - Connection
        ul
            li
                button(@click="connect") connect
                button(@click="disconnect") disconnect
                input(type="text" :value="url")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { wsapi } from '@/services/wsapi';

@Component
export default class WSConnectionComponent extends Vue {
    url = 'http://localhost:3000';

    constructor() {
        super();
        console.log('[WSConnectionComponent] constructor()');
    }

    mounted(): void {
        console.log('[WSConnectionComponent] mounted()');
    }
    destroyed(): void {
        console.log('[WSConnectionComponent] destroyed()');
    }

    async connect(): Promise<void> {
        try {
            console.log('[WSConnectionComponent] connect() request');
            await wsapi.ws.connectAsync(this.url, '/wsapi', '');
            console.log('[WSConnectionComponent] connect() response');
        } catch (err) {
            console.warn(err);
        }
    }

    async disconnect(): Promise<void> {
        try {
            console.log('[WSConnectionComponent] disconnect() request');
            await wsapi.ws.disconnect();
            console.log('[WSConnectionComponent] disconnect() response');
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
