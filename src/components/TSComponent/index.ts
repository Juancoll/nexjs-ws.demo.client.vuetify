import './style.scss';

import { Component, Vue } from 'vue-property-decorator';

@Component({
    template: require('./template.pug'),
})
export default class TSComponent extends Vue {


    constructor() {
        super();
        console.log('[TSComponent] constructor()');
    }

    mounted(): void {
        console.log('[TSComponent] mounted()');
    }
    destroyed(): void {
        console.log('[TSComponent] destroyed()');
    }

}