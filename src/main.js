import { createApp } from 'vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

import App from './App.vue';

import Container from './components/ui/Container.vue';

const app = createApp(App);

app.component('container', Container);

app.mount('#app');
