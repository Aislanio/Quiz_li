const Database = require("./db");
const saveOrphanages = require('./saveOrphanages');

Database.then(async db =>{
	 //inseri dados na tabela
	await saveOrphanages(db,{
		name:"lar dos meninos",
		about:"10"
		

	})
	
	//consultar dados na tabela
	/*const selectedOrphanages = await db.all("SELECT * FROM orphanages");
	console.log(selectedOrphanages);	
	// //consultar somente  1 orfanato pelo id
	const orphanage = await db.all('SELECT * FROM orphanages WHERE id ="4"`);
	console.log(orphanage)

	*/
	// //deletar dado da tabela 
	// console.log(await db.run('DELETE FROM orphanages WHERE id = "4"'))
	// console.log(await db.run('DELETE FROM orphanages WHERE id = "5"'))

})