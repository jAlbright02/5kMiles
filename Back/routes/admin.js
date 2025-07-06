import { Router } from 'express';

const adminRouter = Router();

adminRouter.post('/', (req, res) => {
  const { user, password } = req.body;

  //hardcoded right now, will be db soon
  if (user === 'admin' && password === '1234') {
    res.cookie('adminToken', 'your_secure_token_here', {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
    });
    return res.status(200).json({ message: 'Logged in' });
  }

  //hardcoded right now, will be db soon
  if (user === '' && password === '') {
    return res.status(200).json({ message: 'Logged in' });
  }

  res.status(401).json({ error: 'Invalid credentials' });
});

export default adminRouter;
