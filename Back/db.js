// db.js
import pkg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pkg;

dotenv.config();

// Connect to postgres
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
