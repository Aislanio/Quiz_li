const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanages");

module.exports = {
	index(req,res){
		return res.render("index")
	},
	perguntas(req,res){
		return res.render("perguntas")
	},
	 async ranked(req,res){
		try{
				const db = await Database;	
			const orphanages = await db.all("SELECT * FROM orphanages");
			return res.render("Ranked",{orphanages})
		} catch(erro){
			console.log("erro");
			return res.send("Erro no banco de dados")
		}
		
	},
	 async saveOrphanage(req,res){
		const fields = req.body;
		console.log(fields)
		try{
			//SALVAR UM orphanage
			const db = await Database;
			await saveOrphanage(db,{
				name: fields.name,
				about: fields.about,
			});

			// redirecionamento
			return res.redirect('/ranked');
		}catch(erro){
			console(erro);
			return res.send("Erro no banco de dados");
		}
		
	}
}