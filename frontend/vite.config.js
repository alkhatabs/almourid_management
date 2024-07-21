import path from 'path'; // Correctly import the path module
import vue from '@vitejs/plugin-vue'; // Import Vue plugin
import react from '@vitejs/plugin-react'; // Import React plugin
import { defineConfig, loadEnv } from 'vite'; // Import Vite functions

export default ({ mode }) => {
  // Load environment variables
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // Determine proxy URL based on environment variable
  const proxy_url =
    process.env.VITE_DEV_REMOTE === 'remote'
      ? process.env.VITE_BACKEND_SERVER
      : 'http://almourid.ddns.net:8888/api/';

  // Define Vite configuration
  const config = {
    plugins: [vue(), react()], // Use both Vue and React plugins if needed
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // Set up alias for imports
      },
    },
    server: {
      port: 3000, // Set server port
      proxy: {
        '/api': {
          target: proxy_url, // Set proxy target URL
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };

  // Return the defined configuration
  return defineConfig(config);
};
