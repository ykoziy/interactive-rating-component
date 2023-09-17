const headerIcon = '<div class="thank-you-img"></div>';
const mainText = `<h2>Thank you!</h2>
  <p>
    We appreciate you taking the time to give a rating. If
    you ever need more support, don’t hesitate to get in touch!
  </p>`;

const submitButton = document.getElementById('submit');
const cardElement = document.getElementsByClassName('card')[0];
const ratingElement = document.getElementsByClassName('rating-choices')[0];
const mainTextElement = document.getElementsByClassName('text-main')[0];
const headerElement = document.getElementsByClassName('header')[0];
const choicesMenu = document.getElementsByClassName('rating-choices')[0];

let ratingChoice = null;

const clearChoice = () => {
  const choices = document.querySelectorAll('.choice');
  choices.forEach((choice) => {
    choice.removeAttribute('id');
  });
};

choicesMenu.addEventListener('click', (event) => {
  const isChoiceDiv = event.target.classList.contains('choice');
  if (!isChoiceDiv) {
    return;
  }
  const choiceDiv = event.target;
  ratingChoice = event.target.textContent;
  clearChoice();
  choiceDiv.setAttribute('id', 'selected');
});

submitButton.addEventListener('click', () => {
  ratingElement.classList.add('hidden');
  submitButton.classList.add('hidden');
  headerElement.classList.add('centered');
  insertAfter(choicePillDialog(ratingChoice), headerElement);
  mainTextElement.classList.add('center-text');
  mainTextElement.innerHTML = mainText;
  headerElement.innerHTML = headerIcon;
});

const choicePillDialog = (userRatingChoice = '1') => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('user-rating');
  newDiv.classList.add('centered');
  newDiv.innerText = `You selected ${userRatingChoice} out of 5`;
  return newDiv;
};

const insertAfter = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};
