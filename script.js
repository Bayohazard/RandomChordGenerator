function randomizeCheckboxes() {
  const checkboxes = document.getElementsByName("chord");
  const randomNumber = Math.floor(Math.random() * checkboxes.length) + 1;

  for (var i = 0; i < randomNumber; i++) {
    randomIndex = Math.floor(Math.random() * checkboxes.length);
    checkboxes[randomIndex].checked = !checkboxes[randomIndex].checked;
  }
}

function clearCheckboxes() {
  const checkboxes = document.getElementsByName("chord");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });

}