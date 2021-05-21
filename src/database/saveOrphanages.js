function saveOrphanages(db,orphanages){
	return db.run(`
			INSERT INTO orphanages (
			name,
			about
			
		) VALUES (
			"${orphanages.name}",
			"${orphanages.about}"
		)
	`);
	

};


module.exports = saveOrphanages;