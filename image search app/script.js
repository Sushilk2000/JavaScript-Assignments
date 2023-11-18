const form = document.getElementById("form");
const search_input = document.getElementById("search-input");
const result_container = document.getElementById("imagecontainer");
const showmore = document.getElementById("showmorebtn");
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
let page = 1;
let inputData = "";

async function searchImages() {
  inputData = search_input.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (error) {
    console.log(error);
  }

  if (page === 1) {
    result_container.innerHTML = "";
  }
  const results = data.results;
  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("search-result");
    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    result_container.appendChild(imageWrapper);
  });
  page++;

  if (page > 1) {
    showmore.style.display = "block";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showmore.addEventListener("click", () => {
  searchImages();
});
