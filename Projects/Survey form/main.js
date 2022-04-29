let submitListener = document.getElementById('submitListener');

submitListener.addEventListener('submit', function (event) {
  event.preventDefault();

  let firstName = document.getElementById('first-name').value;

  console.log(firstName);
});
