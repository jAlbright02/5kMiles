// db.js
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: 'postgres://postgres:yuw537CvacqngdeDm1PjzR3cNIitviE1lzWzita85sYJAPIz1Ta2RZRL3Syny5sx@78.47.143.65:5432/postgres',
});

export default pool;
