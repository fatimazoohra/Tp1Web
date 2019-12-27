		
		let para = document.querySelector('#contenu .para span');
		//if by id without .
		//var para = document.getElementById('#para');
		// para.innerText='hello world!';
		para.removeAttribute('name');
		para.setAttribute('name', "spn2");
		console.log(para);//innerHTML