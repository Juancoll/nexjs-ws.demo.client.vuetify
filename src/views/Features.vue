<template lang="pug">
    div.flex.v-container.full
        div.flex.v-container.items.h-center.v-center
            div
                img(alt="Vue logo" v-bind:src="logo")
                div.flex.v-container
                    v-btn.primary( @click="send") send to status bar
                    v-btn.secondary(@click="showNotifications") show notification 
            div
                TSComponent
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { events, EventKeys as K } from '@/services/events';
import moment from 'moment';
import TSComponent from '@/components/TSComponent';

@Component({
    components: { TSComponent },
})
export default class FeaturesView extends Vue {
    public logo = require('@/assets/icons/icon_256.png');
    public counter = 0;

    constructor() {
        super();
        console.log('[FeaturesView] constructor()');
    }

    mounted(): void {
        console.log('[FeaturesView] mounted()');
    }
    destroyed(): void {
        console.log('[FeaturesView] destroyed()');
    }

    public send(): void {
        events.$emit(
            K.toolbar.left,
            `Hello from Home view counter ${this.counter++}`,
        );
    }
    public showNotifications(): void {
        this.$notify({
            group: 'top',
            title: `Device Timeout ${moment().calendar()}`,
            type: 'success',
            text: `Welcome from notification center`,
        });
        this.$notify({
            group: 'bottom',
            title: `Device Timeout ${moment().calendar()}`,
            type: 'error',
            text: `Welcome from notification center`,
        });
    }
}
</script>
<style lang="scss" scoped>
.v-btn {
    margin: 1px;
}
</style>
