var buildMenuItem = function(nome) {
    let a = document.createElement('a');
    a.setAttribute('href', 'info.html');
    a.setAttribute('class', 'dropdown-item');
    a.setAttribute('onclick', 'localStorage.setItem("nomeSerie", this.textContent)');
    a.textContent = nome;
    return document.querySelector('#labelsSeries').appendChild(a)
}

var series = [];

if (series != '') {
    var temp = localStorage.getItem("series");
    temp = JSON.parse(temp);
    document.querySelector('#labelsSeries').textContent = '';
    for (var i = 0; i < temp.length; i++) {
        buildMenuItem(temp[i].nome);
    }
}

document.querySelector('#send').addEventListener('click', function(){
    var serie = document.querySelector('#nome').value.trim();
    var temporada = document.querySelector('#temporada').value.trim().toUpperCase();
        
    var verifica = false;

    if (serie && temporada) {
        if (series != '') {
            for (var i = 0; i < series.length; i++) {
                if (series[i].nome === serie){
                    series[i].episodios += (',' + temporada);
                    verifica = true;
                }
            }
        } 
        if (!verifica)series.push({nome: serie, episodios: temporada, status: 'Assistir'});

        localStorage.setItem('series', JSON.stringify(series));
        temp = localStorage.getItem("series");
        temp = JSON.parse(temp);
        document.querySelector('#labelsSeries').textContent = '';

        for (var i = 0; i < temp.length; i++) {
            buildMenuItem(temp[i].nome);
        }
    
        document.querySelector('#nome').value = document.querySelector('#temporada').value = '';
        alert('Sucesso! Série adicionada com êxito.');
    } else {
        document.querySelector('#nome').value = document.querySelector('#temporada').value = '';        
        alert('Verifique se todos os campos foram preenchidos corretamente.');
    }
});