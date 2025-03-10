import { serve } from "std/http/server.ts";
import { logger } from '@/middleware/logger.ts';

// Configuración básica
const PORT = parseInt(Deno.env.get('PORT') || '8000');

// Middleware de logging
const withLogging = async (req: Request): Promise<Response> => {
  const start = Date.now();
  const response = await handleRequest(req);
  const ms = Date.now() - start;
  console.log(`${req.method} ${req.url} - ${ms}ms`);
  return response;
};

// Manejador principal de requests
async function handleRequest(req: Request): Promise<Response> {
  const url = new URL(req.url);
  
  if (url.pathname === "/" && req.method === "GET") {
    return new Response('Boilerplate API is running!', {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response('Not Found', { status: 404 });
}

// Iniciar el servidor
console.log(`Server running on http://localhost:${PORT}`);
await serve(withLogging, { port: PORT }); 