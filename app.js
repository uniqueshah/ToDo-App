const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("ul-list");

button.onclick = () => {
  const inputValue = input.value;
  if (input.value == "") {
    alert("Type something to add!");
  } else {
    const li = document.createElement("li");
    li.innerText = inputValue;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    li.append(deleteButton);
    const hr = document.createElement("hr");
    list.append(li);
    list.append(hr);
    input.value = "";
    deleteButton.onclick = () => {
      li.remove();
      hr.remove();
    };
  }
};
