import { Router } from 'express';

const registerRouter = Router();

registerRouter.post('/', (req, res) => {
  const { username, email, password } = req.body;

  if (username && email && password) {
    console.log('gucci');
    return res.status(200).json({ res: req.body, success: true });
  }
  res.status(500).json({ error: 'Whoopsie' });
});

export default registerRouter;
