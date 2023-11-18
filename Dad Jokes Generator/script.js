const generatorbtn = document.getElementById("generatorbtn");
const joke_container = document.getElementById("joke_container");
let limit = 10;
let count = 1;
let jokearray = "";
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/dadjokes?limit=" + limit,
  headers: { "X-Api-Key": "jBevPsXtdq4iCYkCLCXmQQ==jpfJZ1VrML75SuFG" },
  contentType: "application/json",
  success: function (result) {
    jokearray = result;
    console.log(result);
  },
  error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
});

generatorbtn.addEventListener("click", (event) => {
  if (count >= limit) {
    count = 1;
  }
  joke_container.innerText = "";
  joke_container.innerText += jokearray[count].joke;
  count++;
});
