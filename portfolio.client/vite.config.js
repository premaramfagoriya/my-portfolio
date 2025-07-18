import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import child_process from 'child_process';

const isLocal = process.env.NODE_ENV !== 'production';

let httpsOptions = undefined;
let proxy = undefined;

if (isLocal) {
    const baseFolder =
        process.env.APPDATA !== undefined && process.env.APPDATA !== ''
            ? `${process.env.APPDATA}/ASP.NET/https`
            : `${process.env.HOME}/.aspnet/https`;

    const certificateName = "portfolio.client";
    const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
    const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

    if (!fs.existsSync(baseFolder)) {
        fs.mkdirSync(baseFolder, { recursive: true });
    }

    if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
        if (child_process.spawnSync('dotnet', [
            'dev-certs', 'https',
            '--export-path', certFilePath,
            '--format', 'Pem', '--no-password'
        ], { stdio: 'inherit' }).status !== 0) {
            console.warn('⚠️ Warning: Could not create HTTPS certificate. Proceeding without HTTPS.');
        }
    }

    if (fs.existsSync(certFilePath) && fs.existsSync(keyFilePath)) {
        httpsOptions = {
            key: fs.readFileSync(keyFilePath),
            cert: fs.readFileSync(certFilePath)
        };
    }

    const target = process.env.ASPNETCORE_HTTPS_PORT
        ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
        : process.env.ASPNETCORE_URLS
            ? process.env.ASPNETCORE_URLS.split(';')[0]
            : 'https://localhost:7128';

    proxy = {
        '^/weatherforecast': {
            target,
            secure: false
        }
    };
}

// Final export
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        https: httpsOptions,
        proxy: proxy,
        port: parseInt(process.env.DEV_SERVER_PORT || '49264'),
    }
});
