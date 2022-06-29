const userNameInput = document.getElementById('nameInput');
const inputButton = document.getElementById('inputButton');
const answerName = document.getElementById('answer');

function getSpiritAnimal() {
  const spiritAnimal = [
    'The Bengal Cat',
    'The Black Bear',
    'The Calico Cat',
    'The Canada Jay',
    'The Capuchin Monkey',
    'The Clouded Leopard',
    'The Copperhead Snake',
    'The Crested Caracara',
    'The Dromedary Camel',
    'The German Shepherd',
  ];
  if (!userNameInput.value || userNameInput.value.trim().length === 0) {
    answerName.innerHTML = 'Please enter your name';
    return;
  }
  const randomIndex = Math.floor(Math.random() * spiritAnimal.length);
  answerName.innerHTML = `${userNameInput.value} - ${spiritAnimal[randomIndex]}`;
}

inputButton.addEventListener('click', getSpiritAnimal);
