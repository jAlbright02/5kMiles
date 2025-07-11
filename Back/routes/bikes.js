import { Router } from 'express';
import pool from '../db.js';

const bikesRouter = Router();

bikesRouter.get('/', async (req, res) => {
    try {
        const dbRes = await pool.query('SELECT * FROM bikes');
        res.json(dbRes.rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('DB Error')
    }
});

export default bikesRouter;
