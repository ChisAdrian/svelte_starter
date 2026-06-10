import { mount } from 'svelte'
import './ui-utils.css'
import './css-valeo.css'
import './scrollfix.css'

import App from './App.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
