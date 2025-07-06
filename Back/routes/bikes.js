import { Router } from 'express';

const bikesRouter = Router();

bikesRouter.get('/', (req, res) => {
    return res.status(200).json([{make: 'Yamaha', model: 'FZ6N', year: '2006'}]);
});

export default bikesRouter;
