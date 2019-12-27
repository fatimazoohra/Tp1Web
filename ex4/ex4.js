

// s truc =55;
// console.log(truc);
// var truc;
// let age =20;
// console.log(`jai ${age} ans`);
// let x = 'hgh'+"nnn"; console.log(x);
// let a=7;
// a==9?console.log('a=9'):console.log('a=7');
// var affichage = document.getElementById('message');

// var a="1";
// var b="2";
// var c=a+b;
// affichage.innerText="le type de a est " +typeof(a) + ", le type de b est  "+typeof(b)+ " , le type de c est  "+typeof(c);

// a =parseInt(a);
// affichage.innerText="le nvtype de a est " +typeof(a);

// b =parseInt(b);
// affichage.innerText="le nv type de b est " +typeof(b);
// c=a+b;
// affichage.innerText=c;

// let x=2;
// switch(x){
// case 1 : console.log(x+1); break;
// case 3 : console.log(x+2); break;
// case 2 : console.log(x+3); break;
// default : console.log(x+9);
// }


// if(true){
// 	var i=2;
// }
// console.log(i);



// let f= function(){ console.log(i); };
// f();


// function decompt(n){
// 	if(n>0){
// 	console.log(n);
// 	return decompt(n-1);
// 	}
// }
// decompt(5);
// function utilisateur(a,b,c){
// 	this.nom = a;
// 	this.prenom = b;
// 	this.age = c;
// 	this.bonjour = function(){ console.log(this.nom+', '+this.prenom+' ,'+this.age);}
// }

// let u = new utilisateur("bouhnach","fati", 21);
// console.log(u()); //not working



// let personne = {
// 	nom:"fati",
// 	age:21,
// 	direBonjr:function(){ console.log("bonjour"); }
// }
// personne.direBonjr();




//  tab = new Array(12,'gaga',25);
// console.log(typeof(tab));
// tab[3] = 'hhh';
// tab.pop();
// tab.unshift('unshift');
// console.log(tab);
// var s ="je suis une etudiante";
// tab = s.split(" ");
// console.log(tab);
// console.log(tab.join(' '));




// function etudiant(a,b){
// 	this.nom = a;
// 	this.prenom = b;
// 	this.notes = [];
// 	this.ajouterNote = function(){
// 		this.notes.push(Math.random()*20);
// 	};
// }
// var etud = new etudiant("bouhnach", "fati");
// console.log(etud);
// etud.ajouterNote();
// etud.ajouterNote();
// etud.ajouterNote();
// etud.ajouterNote();
// for (var key in etud) {
// 	console.log(`${key}, ${etud[key]}`);
// }



// var Etudiant = {
// 	nom : "bouhnach" ,
// 	prenom : "fatima zohra" ,
// 	age : 21
// };
// Etudiant.note = 18;
// for (var key in Etudiant) {
// 	console.log(`${key} : ${Etudiant[key]}`);
// }



// function calcul(){
// 	var a=2;
// 	var b=5;
// 	console.log("in calcul");
// 	function somme(){
// 		var s=a+b;
// 		return s;
// 	}
// 	return somme;
// }
// var r = calcul();
// console.log(r);
// console.log(r());



// function pixel(px){
// 	var base = 16;
// 	function calcul(){
// 		return px/base;
// 	}
// 	return calcul;
// }
// var essai = pixel(20);
// console.log('20 a la base 16 est ', essai());



// console.log(window.document.url);

var div = document.querySelector('div');
while(div.firstChild){
	div.removeChild(div.firstChild);
}
console.log(div);

