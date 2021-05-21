const Database= require('sqlite-async');

function execute(db){
	return db.exec(`
		CREATE TABLE IF NOT EXISTS orphanages (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name text,
			about text

		);
	`)
};

module.exports = Database.open(__dirname + "/database.sqlite").then(execute);