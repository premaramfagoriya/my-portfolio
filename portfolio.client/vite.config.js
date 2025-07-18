import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // Only needed for local dev proxy (optional)
    server: {
        proxy: {
            '/weatherforecast': {
                target: 'https://localhost:7128',
                secure: false
            }
        },
        port: 5173
    }
});
