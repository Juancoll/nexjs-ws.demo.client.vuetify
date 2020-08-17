import './style.scss';

import { Component, Vue } from 'vue-property-decorator';
import { events, EventKeys as K } from '@/services/events';
import moment from 'moment';

@Component({
    template: require('./template.pug'),
})
export default class HomeView extends Vue {
    public logo = require('@/assets/icons/icon_256.png');

    public send() {
        events.$emit(K.toolbar.left, 'Hello from Home view');
    }
    public showNotifications() {
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
