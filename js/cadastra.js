var btn = document.getElementsByTagName('button')[0];
btn.onclick = function(e){
	var nome = document.getElementById('nome').value;
	var temp = document.getElementById('temp').value;

	var erro = false;
	erro = (nome.trim() == "" && temp.trim() == "" && temp.indexOf(T) != 0 && temp.indexOf(EP) != 3);
	if(erro == false){
		if(localStorage.getItem('serie').indexOf(nome) == -1){
			var series = localStorage.getItem('serie');
			series+=' '+nome;
			localStorage.setItem('serie', series);
			localStorage.setItem('ep', temp);
			buildButton(nome);
		} else {
			var temps = localStorage.getItem('ep');
			temps+=' '+temp;
			localStorage.setItem('ep', temps);
		}
		document.getElementById('nome').value = document.getElementById('temp').value = '';
	} else if(erro == true){
		alert("Verifique se todos os campos foram preenchidos corretamente e tente novamente.");
	}	
	e.preventDefault();
}