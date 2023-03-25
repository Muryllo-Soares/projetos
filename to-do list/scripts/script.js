const localStorageName = "to-do-list-key";

function newTask() {
  let input = document.getElementById("input-new-task");

  //validation

  if (!input.value) {
    alert("Digite algo para inserir em sua lista");
  } else {
    // increment to localStorage
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    values.push({
      name: input.value
    });
    localStorage.setItem(localStorageName, JSON.stringify(values));
    showValues();
  }
  //else if()
}

function showValues() {
  let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
  let list = document.getElementById("to-do-list");
  list.innerHTML = "";
  for (let i = 0; i < values.length; i++) {
    list.innerHTML += `<li>${values[i]["name"]}<button id = "btn-ok" onclick = "removeItem("${values[i]["name"]}")">ok</button></li>`;
  }
}

function removeItem(data) {
  console.log(data);
}
showValues();
