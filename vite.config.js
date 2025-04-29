// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [ViteSvgr()],
//   assetsInclude: ['**/*.glb'],
// })

import ViteSvgr from 'vite-plugin-svgr';

export default {
  plugins: [ViteSvgr()],
};
