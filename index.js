
const { mongoConnect } = require('./fundgoal.fun/backend/dist/packages/mongodb/index.js');
const { app } = require('./fundgoal.fun/backend/dist/server.js');

async function startServer() {
  try {
    await mongoConnect();
    app.listen(3000, '0.0.0.0', () => {
      console.log('Server running on port 3000');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
