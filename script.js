var randomNumber = Math.floor(Math.random() * 100) + 1;
var attempts = 0;

function checkGuess() {
  var guessInput = document.getElementById('guessInput');
  var guess = parseInt(guessInput.value);
  var message = document.getElementById('message');

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.innerHTML = 'Por favor, introduce un número válido entre 1 y 100.';
  } else {
    attempts++;

    if (guess === randomNumber) {
      message.innerHTML = '¡Felicidades! ¡Has adivinado el número en ' + attempts + ' intentos!';
      guessInput.disabled = true;
    } else if (guess < randomNumber) {
      message.innerHTML = 'El número es más alto. Intenta nuevamente.';
    } else {
      message.innerHTML = 'El número es más bajo. Intenta nuevamente.';
    }
  }

  guessInput.value = '';
  guessInput.focus();
}
