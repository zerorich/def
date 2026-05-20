const app = require('./app');
const env = require('./config/env');
const { connectDB } = require('./config/db');

async function start() {
  try {
    await connectDB();
    const server = app.listen(env.port, () => {
      // eslint-disable-next-line no-console
      console.log(`[server] Listening on http://localhost:${env.port} (${env.nodeEnv})`);
    });

    const shutdown = (signal) => () => {
      // eslint-disable-next-line no-console
      console.log(`[server] ${signal} received, shutting down...`);
      server.close(() => process.exit(0));
    };
    process.on('SIGINT', shutdown('SIGINT'));
    process.on('SIGTERM', shutdown('SIGTERM'));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('[server] Failed to start:', err);
    process.exit(1);
  }
}

start();
