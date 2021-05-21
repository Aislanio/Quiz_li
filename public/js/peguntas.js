document.addEventListener('contextmenu', event => event.preventDefault());
let contador_htl = document.querySelector("#contador");
let acertos = 0;
let questao = 0;
const title = document.querySelector("h1");
const respos = document.querySelectorAll("main div label span");
console.log(title);
const perguntas = ["Quem era o filho mais velho da familia citada e qual a série ele fazia ?","Qual é contexto historico do livro ?","Qual a cidade que Kurt e sua familia morava ?","Qual era o nome dos filhos de Franz","Quantos anos Franz tinha ?","Qual era o nome da esposa de Franz ?","Qual era o sobrenome de Franz ?","Qual node do primeiro Capitulo ?","Qual o verso que Franz lê no final do Capitulo?","o que Lotte usou para guarda sua boneca ?"]
const respostas = [
	{
		resposta_pricipal:"Kurt,ele estava na 3 série",
		resposta_1:"Gerd, ele estava na 7 série",
		resposta_2:"Felipe,ele estava na 5 série",
		resposta_3:" Suzi,ele estava na 1 série",
		resposta_4:"Maylan, ele estava na 9 série,"

	},
	{
		
		resposta_1:"De 2025,inicio da Terceira Guerra Mundial",
		resposta_2:"De 2018,inicio dos Terraplanistas",
		resposta_pricipal:"De 1939,inicio da Segunda Guerra Mundial",
		resposta_3:"1914,inicio da Primeira Guerra Mundial",
		resposta_4:"1930,inicio da Revolução"

	},
	{
		
		resposta_1:"Berlim",
		resposta_pricipal:"Frankfurt",
		resposta_2:"Hamburgo",
		resposta_3:" Munique",
		resposta_4:"Lehde"

	},
	{
		
		resposta_1:"Ariel,tarsis,Gustavo",
		resposta_2:"Vagner,Kléber,Simon",
		resposta_3:" Tom,Fagner,Albert ",
		resposta_4:"Herbert,Trump,lenio",
		resposta_pricipal:"Kurt,Gerd,Lotte",

	},
	{
		
		resposta_1:"35",
		resposta_2:"50",
		resposta_3:" 30 ",
		resposta_pricipal:"40",
		resposta_4:"49"

	},
	{
		
		resposta_1:"petala",
		resposta_2:"henei",
		resposta_3:"silva",
		resposta_pricipal:"Hebme",
		resposta_4:"elena"

	},
	{
		
		resposta_1:"merit",
		resposta_2:"Carlos",
		resposta_3:"henrique",
		resposta_pricipal:"Hansel",
		resposta_4:"marcos"

	},
	{
		
		resposta_pricipal:"Convocação",
		resposta_1:"Iluminação",
		resposta_2:"Esperença",
		resposta_3:"Força",
		resposta_4:"Avante"

	},
	{
		
		resposta_pricipal:"Salmos: 91: 5 a 11",
		resposta_1:"leviticos 91: 5 a 11",
		resposta_2:"Apocalipse: 20",
		resposta_3:"Gênesis: 10",
		resposta_4:"Daniel: 30:10 a 15"

	},
	{
		
		resposta_1:"A mocilha dela",
		resposta_pricipal:"A mocilha de comida de Franz",
		resposta_2:"A mocilha da mãe",
		resposta_3:"A mocilha de Ariel",
		resposta_4:"A mocilha de Kurt"

	},


];
let i = 0;
window.onload = onload_even();

function proximo(){
	contador_htl.innerHTML = questao +1;
	if (perguntas.length === questao) {
 		document.querySelector("#name").value = localStorage.getItem(name);
 		document.querySelector("#about").value = acertos;	
		document.formulario.submit();
	}	
	let radios = document.querySelectorAll('input');
	let resutado;
	for (let i = 0; i < radios.length; i++){
		if (radios[i].type === 'radio' && radios[i].checked) {
        	// get value, set checked flag or do whatever you need to
        	resultado = radios[i].value; 
        	console.log(resultado);
        };
    }
    const marcado = document.getElementById(resultado);
    const label = marcado.parentNode;
    const span_labe = label.children[0].innerText;
    const final = respostas[questao];
    if (span_labe === final.resposta_pricipal){
    	label.classList.add("bandstand");
    	++acertos;
    	console.log("fp");
    	proixmo_questao();
    }else if(span_labe != final.resposta_pricipal){
    	label.classList.add("wrong");
    	proixmo_questao();
    }

	
		function proixmo_questao(){
			title.innerHTML = perguntas[questao];
			for (let [key,value] of Object.entries(final)) {
	    		respos[i].innerHTML = value;
	    		console.log(respos[i]);
	    		i++;
			};
			questao++;
			i=0;

			document.querySelectorAll("label").forEach((index)=>{
			 	
			 	index.classList.remove('wrong');
				index.classList.remove('bandstand');
			
			});
	}	

};
function onload_even(){
	contador_htl.innerHTML = questao + 1;
	title.innerHTML = perguntas[questao];
	const final = respostas[questao];
		for (let [key, value] of Object.entries(final)) {
    		respos[i].innerHTML = value;
    		i++;
		};
		i=0;
}
