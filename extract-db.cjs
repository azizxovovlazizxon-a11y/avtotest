const Database = require('better-sqlite3');
const fs = require('fs');

// Try database.db first
try {
  const db = new Database('./database.db');
  
  // Get all table names
  const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('Tables in database.db:', tables.map(t => t.name));
  
  // For each table, show schema and sample data
  tables.forEach(table => {
    console.log(`\n=== Table: ${table.name} ===`);
    
    // Get column info
    const columns = db.prepare(`PRAGMA table_info(${table.name})`).all();
    console.log('Columns:', columns.map(c => c.name).join(', '));
    
    // Get row count
    const count = db.prepare(`SELECT COUNT(*) as count FROM ${table.name}`).get();
    console.log('Row count:', count.count);
    
    // Get sample rows
    const rows = db.prepare(`SELECT * FROM ${table.name} LIMIT 3`).all();
    console.log('Sample data:', JSON.stringify(rows, null, 2));
  });
  
  db.close();
} catch (e) {
  console.log('Error with database.db:', e.message);
}

// Try encrypted database
console.log('\n\n=== Checking avto_test_encrypted.db ===');
try {
  const db2 = new Database('./avto_test_encrypted.db');
  const tables2 = db2.prepare("SELECT name FROM sqlite_master WHERE type='table'").all();
  console.log('Tables:', tables2.map(t => t.name));
  
  tables2.forEach(table => {
    console.log(`\n=== Table: ${table.name} ===`);
    const columns = db2.prepare(`PRAGMA table_info(${table.name})`).all();
    console.log('Columns:', columns.map(c => c.name).join(', '));
    
    const count = db2.prepare(`SELECT COUNT(*) as count FROM ${table.name}`).get();
    console.log('Row count:', count.count);
    
    const rows = db2.prepare(`SELECT * FROM ${table.name} LIMIT 2`).all();
    console.log('Sample:', JSON.stringify(rows, null, 2));
  });
  
  db2.close();
} catch (e) {
  console.log('Error with encrypted db:', e.message);
}
