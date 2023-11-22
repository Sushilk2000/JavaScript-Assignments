const container = document.getElementById("container");
const count = 10;
let isready = false;
let loadedimages = 0;
const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=${count}`;

let data = [];
async function getimages() {
  try {
    const response = await fetch(apiUrl);
    data = await response.json();
    displayimages(data);
  } catch (error) {
    console.log(error);
  }
}
function imageloaded() {
  loadedimages++;
  if (loadedimages === count) {
    isready = true;
  }
}

function displayimages() {
  const length = data.length;
  loadedimages = 0;

  data.forEach((image) => {
    const imagebox = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", image.urls.regular);
    img.addEventListener("load", imageloaded);
    imagebox.append(img);
    container.append(imagebox);
  });
}
getimages();

window.addEventListener("scroll", (event) => {
  if (
    window.scrollY + window.innerHeight >= document.body.offsetHeight &&
    isready
  ) {
    isready = false;
    getimages();
  }
});
