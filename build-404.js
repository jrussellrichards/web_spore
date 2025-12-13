import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
    const distDir = path.resolve(__dirname, 'dist');
    const index = path.join(distDir, 'index.html');
    const notFound = path.join(distDir, '404.html');

    if (fs.existsSync(index)) {
        fs.copyFileSync(index, notFound);
        console.log('✅ Success: Copied dist/index.html to dist/404.html');
    } else {
        console.error('❌ Error: dist/index.html not found. Make sure to run build first.');
        process.exit(1);
    }
} catch (error) {
    console.error('❌ Error creating 404.html:', error);
    process.exit(1);
}
