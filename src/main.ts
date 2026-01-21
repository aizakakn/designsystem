import { createApp } from 'vue';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';
import App from './App.vue';
import { createVuetifyTheme } from './plugins/vuetify-theme';
import './styles/tokens.css'


const app = createApp(App);

// Vuetifyテーマをデザイントークンから作成
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: createVuetifyTheme(),
  },
});

app.use(vuetify);
app.mount('#app');
