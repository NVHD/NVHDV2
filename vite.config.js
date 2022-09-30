// vite.config.js
import {sveltekit} from '@sveltejs/kit/vite'
import {searchForWorkspaceRoot} from 'vite'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        '/studio'
      ]
    }
  }
}

export default config
