import handler from './chat.js';
import fs from 'fs';

// load env
const env = fs.readFileSync('.env.local', 'utf-8');
env.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if(k) process.env[k.trim()] = v.join('=').trim();
});

const req = {
  method: 'POST',
  body: {
    messages: [{ role: 'user', content: 'What is your tech stack?' }],
    systemPrompt: 'You are a helpful AI.'
  }
};

const res = {
  status: (code) => {
    console.log('STATUS:', code);
    return res;
  },
  json: (data) => {
    console.log('JSON:', JSON.stringify(data, null, 2));
  }
};

console.log("Testing handler...");
handler(req, res).catch(console.error);
