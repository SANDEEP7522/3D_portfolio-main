// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [ViteSvgr()],
//   assetsInclude: ['**/*.glb'],
// })

import { defineConfig } from "vite";
import ViteSvgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [ViteSvgr()],
  assetsInclude: ["**/*.glb"], // Add any other asset types you might need
});
