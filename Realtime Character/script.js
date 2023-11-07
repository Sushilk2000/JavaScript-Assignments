const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-char");
const remainingCounterEl = document.getElementById("remaining-char");

textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

updateCounter()

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
