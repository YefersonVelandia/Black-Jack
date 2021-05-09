

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K']

const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tipos) {
            deck.push( i + tipo);      
        }
        
    }

    console.log(deck);

    deck = _.shuffle(deck);

    console.log(deck);

    return deck;
}

crearDeck();

const pedirCarta = () =>{

	if (deck.lenght === 0) {
		throw 'No hay cartas en la baraja';
	}
	const carta = deck.pop();

	console.log(deck);
	console.log(carta);
	return carta;
}

const valorCarta = (carta) =>{
	const valor = carta.substring(0, carta.length -1);

	return (isNaN(valor)) ? 
			(valor === 'A') ? 11 : 10
			: valor * 1;
}
// const valorCarta = (carta) => {
// 	const valor = carta.substring(0, carta.length -1);
// 	let puntos = 0;

// 	if(isNaN(valor)){

// 		puntos = (valor === 'A') ? 11 ; 10;

// 	}else{
// 		puntos = valor * 1;  //para que retorne el valor como numerico
// 	}
// }