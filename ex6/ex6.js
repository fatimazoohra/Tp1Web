var chiffre = getrandom(10);
   //console.log(chiffre);
var	nbEssai = 0;  
   do{
   	var choix = prompt("choisissez un chiffre entre 0 et 10 :");
   	nbEssai+=1;
   }while(guess(choix)==false);

   function guess(choix)
   {
   	var b;
   	if(choix == chiffre){
   		alert('vous avez trouvé le chiffre :), vous avez tenter'+nbEssai+'fois');
   		b= true; 			
   	}
   	else{
         if(choix < chiffre)
   			   { alert(':( essayez une autre fois, le chiffre est plus grand que votre choix ');}
         else{ alert(':( essayez une autre fois, le chiffre est plus petit que votre choix ');}
   		b= false;
   	}
   	return b;
   }

	function getrandom(max)
   {
   	return Math.floor(Math.random()*Math.floor(max));
   }

   