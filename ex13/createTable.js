const db = require('./db');

async function setupDb() {
  try {
    await db.none(
      `DROP TABLE IF EXISTS planets;

      CREATE TABLE planets(
        id SERIAL NOT NULL PRIMARY KEY,
        name TEXT NOT NULL
      );`
 );
    console.log('Table "planets" created successfully');
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    pgp.end(); 
  }
}

setupDb(); 
