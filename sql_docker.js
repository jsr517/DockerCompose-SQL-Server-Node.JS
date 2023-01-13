// check readme file for mor details.

const sql = require('mssql');

const config = {
    server: 'localhost',
    port: 1433,
    user: 'sa',
    password: 'your_password',
    database: 'your_database',
};

async function runQuery(query) {
    try {
        const pool = await sql.connect(config);
        const result = await pool.request().query(query);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

runQuery("SELECT * FROM your_table");
