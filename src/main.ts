import { createApp, ref } from 'vue';
import './assets/style.css';
import links from './assets/links.json';

createApp({
    setup() {
        const logoToggle = ref(false);
        return {
            logoToggle,
            links,
        };
    }
}).mount('#app');