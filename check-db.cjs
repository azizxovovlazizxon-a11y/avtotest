const Database = require('better-sqlite3');

try {
  const db = new Database('./database_v108.db');
  
  // Get all tables
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('Tables:', tables);
  
  // Get row counts for each table
  tables.forEach(t => {
    try {
      const count = db.prepare(`SELECT COUNT(*) as c FROM "${t.name}"`).get();
      console.log(`${t.name}: ${count.c} rows`);
      
      // Show first few rows
      const rows = db.prepare(`SELECT * FROM "${t.name}" LIMIT 3`).all();
      console.log('Sample:', JSON.stringify(rows, null, 2));
    } catch (e) {
      console.log(`Error with ${t.name}:`, e.message);
    }
  });
  
  db.close();
} catch (e) {
  console.log('Error:', e.message);
}
