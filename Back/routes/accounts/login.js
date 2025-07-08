import { Router } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const loginRouter = Router();

loginRouter.post('/', (req, res) => {
  const { user, password } = req.body;

  if (user === process.env.CATS_EM && password === process.env.CATS_PASS) {
    return res.status(200).json({ pass: 'titch' });
  }

  //hardcoded right now, will be db soon
  // if (user === 'admin' && password === '1234') {
  //   res.cookie('adminToken', 'your_secure_token_here', {
  //     httpOnly: true,
  //     secure: true,
  //     sameSite: 'strict',
  //   });
  //   return res.status(200).json({ success: true });
  // }

  // ^ Example for later 

  res.status(401).json({ error: 'Invalid credentials' });
});

export default loginRouter;
