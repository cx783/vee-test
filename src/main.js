import { defineRule } from 'vee-validate'
import { required } from '@vee-validate/rules'

import { createApp } from 'vue'
import App from './App.vue'

defineRule('required', required)

createApp(App).mount('#app')
