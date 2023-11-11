const tablebody = document.getElementById("tablebody");
const input = document.getElementById("searchinput");

function renderall(rows) {
  tablebody.innerHTML = "";
  rows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.classList.add("row");
    const fullname = row.first_name + " " + row.last_name;
    const fullnametd = document.createElement("td");
    fullnametd.classList.add("column");
    fullnametd.innerHTML = fullname;

    const email = document.createElement("td");
    email.classList.add("column");
    email.innerHTML = row.email;

    const gender = document.createElement("td");
    gender.classList.add("column");
    gender.innerHTML = row.gender;

    tr.append(fullnametd, email, gender);
    tablebody.append(tr);
  });
}

renderall(fake_data);

input.addEventListener("keyup", (e) => {
  const searchKey = e.target.value.toLowerCase();

  const filtedtable = fake_data.filter(
    (row) =>
      row.first_name.toLowerCase().includes(searchKey) ||
      row.last_name.toLowerCase().includes(searchKey) ||
      row.email.toLowerCase().includes(searchKey) ||
      row.gender.toLowerCase().includes(searchKey) ||
      row.first_name
        .toLowerCase()
        .concat(" ")
        .concat(row.last_name.toLowerCase())
        .includes(searchKey)
  );
  renderall(filtedtable);
});
