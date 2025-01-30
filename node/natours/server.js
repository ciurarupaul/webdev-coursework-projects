// everything unrelated with express

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// controversial below   ->   some believe db connection MUST have a catch
process.on('uncaughtException', (err) => {
  console.log('Uncaught exception...');
  console.log(err.name, err.message);

  // MUST crash app in this case
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

// needs to only happen once, available everywhere

// <------ CONNECT TO DB ----->

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
  console.log('DB connection successful!');
});

// <----- LISTEN FOR CHANGES ----->

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`App is running on port ${port}...`);
});

// safety net, controversial even

process.on('unhandledRejection', (err) => {
  console.log('Uncaught rejection...');
  console.log(err.name, err.message);

  // give the server time to close remaining running processes
  server.close(() => {
    process.exit(1); // this only - abruptly stops all processes
  });
});
