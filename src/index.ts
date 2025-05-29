
// import express from 'express';
// import bodyParser from 'body-parser';
// import dotenv from 'dotenv';
// import { PrismaClient } from '@prisma/client';

// dotenv.config();

// const app = express();
// const prisma = new PrismaClient();

// app.use(bodyParser.json());

// app.get('/', async (req, res) => {
//   res.send('Bitespeed Identity Reconciliation API is running.');
// });
//  app.post('/', (req, res) => {
//   res.send('POST request to / received successfully!');
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

import express from 'express'; 
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(bodyParser.json());

app.get('/', async (req, res) => {
  res.send('Bitespeed Identity Reconciliation API is running.');
});

// Add POST /identify route here
app.post('/identify', (req, res) => {
  const { email, phoneNumber } = req.body;

  res.json({
    contact: {
      primaryContatctId: 1,
      emails: [email],
      phoneNumbers: [phoneNumber],
      secondaryContactIds: []
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
