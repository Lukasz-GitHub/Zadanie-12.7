// KOMUNIKACJA Z API
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
    'X-Client-Id': '3248',
    'X-Auth-Token': 'f5748c597c18944819bde5e5e374e67c'
};

// OGÓLNA FUNKCJA
fetch(baseUrl + '/board', {
        headers: myHeaders
    })
    .then(function (resp) {
        return resp.json();
    })
    .then(function (resp) {
        setupColumns(resp.columns);
    });

//TWORZENIE KOLUMN
function setupColumns(columns) {
    columns.forEach(function (column) {
        var col = new Column(column.id, column.name);
        board.addColumn(col);
        setupCards(col, column.cards);
    });
}

//TWORZENIE KART
function setupCards(col, cards) {
    cards.forEach(function (card) {
        var cardObj = new Card(card.id, card.name);
        col.addCard(cardObj);
    });
}

function generateTemplate(name, data, basicElement) {
    var template = document.getElementById(name).innerHTML;
    var element = document.createElement(basicElement || 'div');

    Mustache.parse(template);
    element.innerHTML = Mustache.render(template, data);

    return element;
}