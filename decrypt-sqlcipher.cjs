const sqlite3 = require('@journeyapps/sqlcipher').verbose();
const fs = require('fs');
const path = require('path');

// The key found in libkeygen.so
const SECRET_KEY = '0f106b7a-39c9-4523-a189-d150870868fb';

// Source database path
const encryptedDbPath = path.join(__dirname, 'avto_test_encrypted.db');
const outputDbPath = path.join(__dirname, 'avto_test_decrypted.db');
const outputJsonPath = path.join(__dirname, 'questions.json');

console.log('Attempting to decrypt database with key:', SECRET_KEY);
console.log('Database path:', encryptedDbPath);

// Copy to a temporary working copy first
fs.copyFileSync(encryptedDbPath, outputDbPath);

// Open the encrypted database
const db = new sqlite3.Database(outputDbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    return;
  }
  console.log('Database opened successfully');
  
  // Set the encryption key using PRAGMA
  db.serialize(() => {
    // Try different key formats
    const keyFormats = [
      `PRAGMA key = '${SECRET_KEY}';`,
      `PRAGMA key = "${SECRET_KEY}";`,
      `PRAGMA key = "x'${Buffer.from(SECRET_KEY).toString('hex')}'";`,
    ];
    
    db.run(`PRAGMA key = '${SECRET_KEY}'`, (err) => {
      if (err) {
        console.error('Error setting key:', err.message);
      } else {
        console.log('Key set successfully');
      }
      
      // Try to read tables
      db.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
        if (err) {
          console.error('Error reading tables (key might be wrong):', err.message);
          
          // Try with different cipher settings
          console.log('\nTrying with different cipher configurations...');
          tryDifferentConfigs(db);
        } else {
          console.log('Tables found:', tables);
          exportData(db, tables);
        }
      });
    });
  });
});

function tryDifferentConfigs(db) {
  // SQLCipher 4 default settings
  const configs = [
    { cipher: 'aes-256-cbc', kdf_iter: 256000, page_size: 4096 },
    { cipher: 'aes-256-cbc', kdf_iter: 64000, page_size: 1024 },
    { cipher: 'aes-256-cbc', kdf_iter: 4000, page_size: 1024 }, // SQLCipher 3 defaults
  ];
  
  let configIndex = 0;
  
  function tryNextConfig() {
    if (configIndex >= configs.length) {
      console.log('\nAll configurations failed. The key might be processed differently.');
      db.close();
      return;
    }
    
    const config = configs[configIndex];
    console.log(`\nTrying config ${configIndex + 1}:`, config);
    
    const db2 = new sqlite3.Database(encryptedDbPath);
    db2.serialize(() => {
      db2.run(`PRAGMA key = '${SECRET_KEY}'`);
      db2.run(`PRAGMA cipher_page_size = ${config.page_size}`);
      db2.run(`PRAGMA kdf_iter = ${config.kdf_iter}`);
      db2.run(`PRAGMA cipher_hmac_algorithm = HMAC_SHA512`);
      db2.run(`PRAGMA cipher_kdf_algorithm = PBKDF2_HMAC_SHA512`);
      
      db2.all("SELECT name FROM sqlite_master WHERE type='table'", (err, tables) => {
        if (err) {
          console.log(`Config ${configIndex + 1} failed:`, err.message);
          db2.close();
          configIndex++;
          tryNextConfig();
        } else {
          console.log('SUCCESS! Tables found:', tables);
          exportData(db2, tables);
        }
      });
    });
  }
  
  db.close();
  tryNextConfig();
}

function exportData(db, tables) {
  const allData = {};
  let completed = 0;
  
  tables.forEach((table) => {
    db.all(`SELECT * FROM "${table.name}"`, (err, rows) => {
      if (err) {
        console.error(`Error reading ${table.name}:`, err.message);
      } else {
        console.log(`${table.name}: ${rows.length} rows`);
        allData[table.name] = rows;
      }
      
      completed++;
      if (completed === tables.length) {
        // Save to JSON
        fs.writeFileSync(outputJsonPath, JSON.stringify(allData, null, 2));
        console.log(`\nData exported to ${outputJsonPath}`);
        db.close();
      }
    });
  });
}
