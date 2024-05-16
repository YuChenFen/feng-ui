import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    build: {
        outDir: 'dist/umd',
        lib: {
            entry: './index.ts',
            name: 'FengUI',
            fileName: 'index',
            formats: ['umd'],
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                },
                // assetFileNames: (assetInfo) => {
                //     if (assetInfo.name === 'style.css') return 'index.css';
                //     return assetInfo.name!;
                // },
            },
        }
    }
})