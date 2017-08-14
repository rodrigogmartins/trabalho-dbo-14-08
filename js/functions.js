var buildButton = function(nome){
	var htmlBTN = document.createElement('button');
	htmlBTN.setAttribute('class', 'btn btn-primary buttons');
	htmlBTN.setAttribute('href', 'series.html');

	htmlBTN.innerHTML = nome;
	return document.getElementById('series').appendChild(htmlBTN);
}