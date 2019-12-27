	function sum(args)
	{
		var s = 0;
		var i;
		for(i=0; i< args.length ;i++){
			s+=args[i];			
		}
		alert('la somme des elements est: '+s+' .');	
	}
	var num = prompt("donner le nombre des entiers que vous voulez calculer leurs somme:");
	var incr=0;
	var j;
	var tableau=[];
	do{
		incr++;
		var entier = prompt("donner l'entier "+incr+":");
		entier = parseInt(entier);
		tableau.unshift(entier);
		console.log(tableau);	
	}while(incr < num);
	sum(tableau);