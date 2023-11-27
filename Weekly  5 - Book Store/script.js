const ul = document.getElementById("list_ul");
const api = "https://books-backend.p.goit.global/books/category-list";
let cat_data = [];
const right_container = document.getElementById("right_container");
async function getcategories() {
  try {
    const response = await fetch(api);
    cat_data = await response.json();
    appendcategories(cat_data);
  } catch (error) {
    console.log(error);
  }
}

function appendcategories(data) {
  data.forEach((cat) => {
    const li = document.createElement("li");
    li.classList.add("category_name");
    li.innerHTML = `${cat.list_name}`;
    li.addEventListener("click", function () {
      // Your event handling code goes here
      getcategorydata(li.innerText);
    });
    ul.append(li);
  });
}
getcategories();

async function getcategorydata(category) {
  try {
    const response = await fetch(
      `https://books-backend.p.goit.global/books/category?category=${category}`
    );
    const data = await response.json();
    right_container.innerHTML = "";
    const heading = document.createElement("h1");
    heading.classList.add("category_heading");
    heading.innerText = category;
    right_container.append(heading);
    const collector = document.createElement("div");
    collector.classList.add("collector");
    right_container.append(collector);

    data.forEach((book) => {
      appendcard(book, collector);
    });
  } catch (error) {
    console.log(error);
  }
}

function appendcard(book, collector) {
  const card = document.createElement("div");
  card.classList.add("card");
  const img = document.createElement("img");
  img.setAttribute("src", `${book.book_image}`);
  const book_overlay = document.createElement("div");
  book_overlay.classList.add("books_overlay");
  const quick_view = document.createElement("p");
  quick_view.classList.add("books_overlay-text");
  quick_view.innerText = "quick view";
  book_overlay.append(quick_view);
  const book_name = document.createElement("span");
  book_name.classList.add("book_name");
  book_name.innerText = `${book.title}`;
  const author_name = document.createElement("span");
  author_name.classList.add("author_name");
  author_name.innerText = `${book.author}`;
  card.append(img, book_overlay, book_name, author_name);
  collector.append(card);
  console.log(book);
  card.addEventListener("click", () => {
    card_info(book);
  })
}

function card_info (book) {
  const backdrop = document.querySelector("#backdrop");
  const book_image = document.querySelector(".modal-info__image");
  book_image.setAttribute("src", `${book.book_image}`);
  const book_name = document.querySelector(".modal-info__title");
  book_name.innerText = `${book.title}`;
  const book_author = document.querySelector(".modal-info__author");
  book_author.innerText = `${book.author}`;
  const Amazon = document.getElementById("amazon");
  Amazon.setAttribute("href", `${book.buy_links[0].url}`)
  const apple = document.getElementById("apple");
  apple.setAttribute("href", `${book.buy_links[1].url}`);

  backdrop.style.display = "block";
  }

  function closefunction() {
    document.getElementById("backdrop").style.display = "none";
  }

