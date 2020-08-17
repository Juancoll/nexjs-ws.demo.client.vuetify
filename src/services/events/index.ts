import { Component, Vue } from 'vue-property-decorator';
import { registerService } from '../registerService';

@Component({})
export class Events extends Vue {
}

export * from './EventKeys';
export let events = new Events();
registerService('events', events);
