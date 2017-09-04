var buildTableCell = function(episodio, STATUS) {
    var tr = document.createElement('tr');
    var tmp = document.createElement('td');
    tmp.textContent = episodio;

    var statusChange = document.createElement('td');
    statusChange.setAttribute('class', 'series');

    var btn = document.createElement('button');
    btn.setAttribute('class', 'btn btn-sm btn-dark dropdown-toggle dropdown-toggle-split');
    btn.setAttribute('data-toggle', 'dropdown');
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');   
    btn.textContent = STATUS;

    var div = document.createElement('div');
    div.setAttribute('class', 'dropdown-menu');
    div.setAttribute('aria-labelledby', 'dropdownMenu2');

    var assistir = document.createElement('button');
    assistir.setAttribute('class', 'dropdown-item');
    assistir.setAttribute('type', 'button');
    assistir.setAttribute('onclick', 'localStorage.setItem("nomeStatus", this.textContent), setStatus()');
    assistir.textContent = 'Assistir';

    var assistindo = document.createElement('button');
    assistindo.setAttribute('class', 'dropdown-item');
    assistindo.setAttribute('type', 'button');
    assistindo.setAttribute('onclick', 'localStorage.setItem("nomeStatus", this.textContent), setStatus()');
    assistindo.textContent = 'Assistindo';

    var assistido = document.createElement('button');
    assistido.setAttribute('class', 'dropdown-item');
    assistido.setAttribute('type', 'button');
    assistido.setAttribute('onclick', 'localStorage.setItem("nomeStatus", this.textContent), setStatus()');
    assistido.textContent = 'Assistido';

    div.appendChild(assistir);
    div.appendChild(assistindo);
    div.appendChild(assistido);
    statusChange.appendChild(btn);
    statusChange.appendChild(div);
    tr.appendChild(tmp);
    tr.appendChild(statusChange);    
    return document.querySelector('tbody').appendChild(tr);
}

var temp = localStorage.getItem("series");
temp = JSON.parse(temp);

var setStatus = function (){
    localStorage.getItem('nomeStatus');
}   


var j;
var serieName = localStorage.getItem('nomeSerie');

for (var i = 0; i < temp.length; i++) {
    if (temp[i].nome === serieName)j = i;   
}

var eps = temp[j].episodios.split(',');

for(var i = 0; i < eps.length; i++){
   buildTableCell(eps[i], temp[j].status);
}

document.querySelector('h2').textContent = localStorage.getItem('nomeSerie').toUpperCase();
document.querySelector('title').textContent = localStorage.getItem('nomeSerie').toUpperCase();