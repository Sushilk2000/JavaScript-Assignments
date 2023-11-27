const all_cat = document.querySelector("li");
all_cat.addEventListener("click", () => {
  fetchallcat();
});

async function fetchallcat() {
  try {
    const response = await fetch(api);
    const ans = await response.json();
    console.log(ans);
    right_container.innerText = "";
    const all_cat_heading_div = document.createElement("div");
    all_cat_heading_div.classList.add("all_categories_main_heading");
    const all_cat_heading = document.createElement("h1");
    all_cat_heading.classList.add("main_title");
    all_cat_heading.innerText = "Best Seller Books";
    all_cat_heading_div.append(all_cat_heading);
    right_container.append(all_cat_heading_div);
    getcatdata(ans);
  } catch (err) {
    console.log(err);
  }
}
function getcatdata(data) {
  data.forEach((cat) => {
    const cat_name = cat.list_name;
    fetchcatdata(cat_name);
  });
}
async function fetchcatdata(category) {
  try {
    const response = await fetch(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    const data = await response.json();
    make_category_container(data, category);
  } catch (err) {
    console.log(err);
  }
}

function make_category_container(category_data, category_name) {
  const container = document.createElement("div");
  container.classList.add("categorycollector");
  const cata_heading = document.createElement("div");
  cata_heading.classList.add("all_categories_cat_heading");
  cata_heading.innerText = `${category_name}`;
  const card_collector = document.createElement("div");
  card_collector.classList.add("collector");
  const showmorebtndiv = document.createElement("div");
  showmorebtndiv.classList.add("showmorebtndiv");
  const showmorebtn = document.createElement("button");
  showmorebtn.innerText = "Show More";
  showmorebtn.classList.add("showmorebtn");
  showmorebtn.addEventListener("click", () => {
    getcategorydata(category_name);
  });
  showmorebtndiv.append(showmorebtn);
  container.append(cata_heading, card_collector, showmorebtndiv);
  right_container.append(container);
  for (let s = 0; s < 5; s++) {
    const book = category_data[s];
    appendcard(book, card_collector);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  fetchallcat();
});
