import express from 'express';
import connection from './db.js';
import router from './route.js';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173' // Update this to match your front-end URL
}));

app.use(express.json()); // Use built-in middleware for JSON parsing
app.use('/pankaj', router);

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});

connection();


