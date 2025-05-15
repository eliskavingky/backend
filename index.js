
const { mongoConnect } = require('./fundgoal.fun/backend/dist/packages/mongodb');
const { app } = require('./fundgoal.fun/backend/dist');

mongoConnect()
  .then(() => {
    app.listen(3000, '0.0.0.0', () => {
      console.log('Server running on port 3000');
    });
  })
  .catch(console.error);
