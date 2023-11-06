const keyDisplay = document.getElementById("keyDisplay");
const keyCodeDisplay = document.getElementById("keyCodeDisplay");

document.addEventListener("keydown", (event) => {
  keyCodeDisplay.style.display = "block";

  keyDisplay.innerHTML = `You pressed : <span id="pressed-key">${event.key}</span>`;
  keyCodeDisplay.innerHTML = `<span id="keyCodeText">keycode :</span><span> ${event.keyCode}</span>`;

  event.preventDefault();
});
