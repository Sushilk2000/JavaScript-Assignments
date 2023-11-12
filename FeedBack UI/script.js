const button = document.getElementById("btn");
const ratingarr = document.querySelectorAll(".rating");
const container = document.getElementById("container");

let selectedRating = "";

ratingarr.forEach((ratingval) => {
  ratingval.addEventListener("click", (event) => {
    removeactive();
    selectedRating =
      event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

button.addEventListener("click", () => {
  if (selectedRating !== "") {
    container.innerText = "";
    const thankyou = document.createElement("strong");
    thankyou.innerText = "Thank You";
    container.append(thankyou);
    const br = document.createElement("br");
    container.append(br);
    container.append(br);
    const feedback = document.createElement("strong");
    feedback.innerText = "feedback: " + selectedRating;
    const p = document.createElement("p");
    p.innerText = "We'll use your feedback to improve our customer support.";
    container.append(feedback, p);
  }
});

function removeactive() {
  ratingarr.forEach((rating) => {
    rating.classList.remove("active");
  });
}
