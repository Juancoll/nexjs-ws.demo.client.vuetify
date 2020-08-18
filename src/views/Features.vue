<template lang="pug">
    div.flex.v-container.full
        div.flex.v-container.items.h-center.v-center
            div
                img(alt="Vue logo" v-bind:src="logo")
                div.flex.v-container
                    v-btn.primary( @click="send") send to status bar
                    v-btn.secondary(@click="showNotifications") show notification 
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { events, EventKeys as K } from '@/services/events';
import moment from 'moment';

@Component
export default class HomeView extends Vue {
    public logo = require('@/assets/icons/icon_256.png');

    public send(): void {
        events.$emit(K.toolbar.left, 'Hello from Home view');
    }
    public showNotifications(): void {
        this.$notify({
            group: 'top',
            title: `Device Timeout ${moment().calendar()}`,
            type: 'success',
            text: `TEST ERROR`,
        });
        this.$notify({
            group: 'bottom',
            title: `Device Timeout ${moment().calendar()}`,
            type: 'error',
            text: `TEST ERROR`,
        });
    }
}
</script>
<style lang="scss" scoped>
.v-btn {
    margin: 1px;
}
</style>
