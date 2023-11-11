const emojiUl = document.getElementById("emojiUl");
const createli = (emoji) => {
  const emojidiv = document.createElement("div");
  emojidiv.classList.add("emoji");
  emojidiv.innerHTML = emoji.emoji;

  const aliasesdiv = document.createElement("div");
  aliasesdiv.classList.add("aliases");
  aliasesdiv.innerHTML = emoji.aliases.join(", ");

  const descriptiondiv = document.createElement("div");
  descriptiondiv.classList.add("description");
  descriptiondiv.innerHTML = emoji.description;

  const li = document.createElement("li");
  li.append(emojidiv, aliasesdiv, descriptiondiv);

  return li;
};

const renderemojiUl = (emojiarray) => {
  emojiUl.innerHTML = "";
  emojiarray.forEach((emoji) => {
    const li = createli(emoji);
    emojiUl.append(li);
  });
};

renderemojiUl(emojiList);

const searchbox = document.getElementById("searchinput");
searchbox.addEventListener("keyup", (e) => {
  const searchkey = e.target.value.toLowerCase();
  const filteredemojilist = emojiList.filter(
    (emoji) =>
      emoji.description.toLowerCase().includes(searchkey) ||
      emoji.aliases.toString().toLowerCase().includes(searchkey)
  );
  renderemojiUl(filteredemojilist);
});
