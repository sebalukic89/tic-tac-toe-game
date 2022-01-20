let editedPlayer = 0;

const players = [
  {
    name: '',
    symbol: 'X',
  },
  {
    name: '',
    symbol: 'O',
  },
];

const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');

const editPlayerOneBtnElement = document.getElementById('edit-player-1-btn');
const editPlayerTwoBtnElement = document.getElementById('edit-player-2-btn');
const cancelConfigButtonElement = document.getElementById('cancel-config-btn');

editPlayerOneBtnElement.addEventListener('click', openPlayerConfig);
editPlayerTwoBtnElement.addEventListener('click', openPlayerConfig);

cancelConfigButtonElement.addEventListener('click', closePlayerConfig);
backdropElement.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
