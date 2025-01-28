/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A", "Joker"];

// Genera un número aleatorio
function randomCard() {
  let randomResult = Math.floor(Math.random() * cards.length);
  return cards[randomResult];
}

// Se selecciona una carta con simbolo aleatorio
function showRandomCard() {
  // Array con los contenedores de las cartas
  let cardContainers = ["card1-container", "card2-container", "card3-container", "card4-container"];
  
  // Ocultamos todas las cartas
  cardContainers.forEach(card => {
    document.getElementById(card).style.display = "none";
  });

  // Seleccionamos una carta aleatoria
  let randomSymbol = Math.floor(Math.random() * cardContainers.length);
  let randomCardContainer = cardContainers[randomSymbol];
  
  // Se obtiene la carta aleatoria
  let selectedCard = randomCard();
  
  // Si se elige la carta del "Joker", pasan cositas.
  if (selectedCard === "Joker") {
    // Mostramos la carta seleccionada aleatoriamente
    document.getElementById(randomCardContainer).style.display = "block";

    //  La letra sera más pequeña
    let cardNumberId = `numberOfCard${randomSymbol + 1}`;
    let cardNumberElement = document.getElementById(cardNumberId);
    cardNumberElement.innerText = selectedCard;
    cardNumberElement.style.fontSize = "5.5rem";

    // Se ocultan los símbolos para el Joker
    let symbols = document.querySelectorAll(`#${randomCardContainer} .fa-solid`);
    symbols.forEach(symbol => {
      symbol.style.display = "none";
    });

    return;
  }

  // Si no es un Joker...
  document.getElementById(randomCardContainer).style.display = "block";

  // Se actualiza el número de la carta
  let cardNumberId = `numberOfCard${randomSymbol + 1}`;
  let cardNumberElement = document.getElementById(cardNumberId);
  cardNumberElement.innerText = selectedCard;
  cardNumberElement.style.fontSize = ""; // Restauramos el tamaño predeterminado

  // Se muestran los símbolos
  let symbols = document.querySelectorAll(`#${randomCardContainer} .fa-solid`);
  symbols.forEach(symbol => {
    symbol.style.display = ""; // Restauramos la visibilidad predeterminada
  });
}

// Se llama la función
showRandomCard();
