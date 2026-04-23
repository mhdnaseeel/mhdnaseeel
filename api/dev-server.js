/**
 * Local dev server for API routes.
 * Run with: node api/dev-server.js
 * This simulates Vercel serverless functions locally.
 *
 * Usage: In one terminal run `npm run dev`, in another run `node api/dev-server.js`
 */

import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local manually (no dotenv needed)
const loadEnv = () => {
  try {
    const envPath = resolve(__dirname, '../.env.local');
    const content = readFileSync(envPath, 'utf-8');
    content.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split('=');
      if (key && valueParts.length > 0) {
        process.env[key.trim()] = valueParts.join('=').trim();
      }
    });
    console.log('✅ Loaded .env.local');
  } catch {
    console.log('⚠️  No .env.local found. Using existing env vars.');
  }
};

loadEnv();

const PORT = 3001;

const server = createServer(async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === '/api/chat' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const parsedBody = JSON.parse(body);

        // Create a mock req/res for the handler
        const mockReq = { method: 'POST', body: parsedBody };
        let statusCode = 200;
        let responseBody = {};

        const mockRes = {
          status(code) { statusCode = code; return this; },
          json(data) { responseBody = data; }
        };

        // Import and call the handler
        const { default: handler } = await import('./chat.js?' + Date.now());
        await handler(mockReq, mockRes);

        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(responseBody));
      } catch (err) {
        console.error('Dev server error:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    });
    return;
  }

  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`🚀 API dev server running at http://127.0.0.1:${PORT}`);
  console.log(`   Handles: POST /api/chat`);
  console.log(`   Proxy target from Vite: http://localhost:5173`);
});
