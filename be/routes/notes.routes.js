import express from 'express';

const router = express.Router();

router.get('/api/notes', (req, res) => {
  res.status(200).send('Hello World!!!');
});

router.post('/api/notes', (req, res) => {
  res.status(201).send('Post Request');
});

router.put('/api/notes/:id', (req, res) => {
  res.status(200).send('Put Request');
});

router.delete('/api/notes/:id', (req, res) => {
  res.status(200).send('Delete Request');
});

export default router;