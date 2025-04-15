// Data untuk kartu (pasangan emoji)
const cardValues = ['👲🏿', '🤓', '👳‍♂️', '🎅', '🛌', '🦼', '☪', '🤡'];

// Duplikat pasangan kartu
let cards = [...cardValues, ...cardValues];
let openCards = [];
let matchedCards = [];

// Shuffle kartu secara acak
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Membuat elemen kartu dengan emoji
function createCard(cardValue) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.textContent = cardValue;
  card.dataset.value = cardValue;
  card.addEventListener('click', handleCardClick);
  return card;
}

// Menampilkan kartu di papan permainan
function displayBoard() {
  const board = document.getElementById('gameBoard');
  board.innerHTML = '';
  cards.forEach(cardValue => {
    const card = createCard(cardValue);
    board.appendChild(card);
  });
}

// Fungsi untuk menangani klik pada kartu
function handleCardClick(event) {
  const clickedCard = event.target;
  if (openCards.length === 2 || clickedCard.classList.contains('open') || matchedCards.includes(clickedCard)) {
    return;
  }

  clickedCard.classList.add('open');
  openCards.push(clickedCard);

  // Jika dua kartu sudah terbuka, cek apakah mereka cocok
  if (openCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

// Cek apakah dua kartu yang terbuka cocok
function checkMatch() {
  const [card1, card2] = openCards;
  if (card1.dataset.value === card2.dataset.value) {
    matchedCards.push(card1, card2);
    openCards = [];
  } else {
    card1.classList.remove('open');
    card2.classList.remove('open');
    openCards = [];
  }

  if (matchedCards.length === cards.length) {
    setTimeout(() => {
      alert('Selamat, kamu menang!');
    }, 500);
  }
}

// Menyusun ulang papan permainan (shuffle dan tampilkan kartu)
function restartGame() {
  shuffle(cards);
  matchedCards = [];
  openCards = [];
  displayBoard();
}

// Event listener untuk tombol restart
document.getElementById('restartButton').addEventListener('click', restartGame);

// Mulai permainan
restartGame();
