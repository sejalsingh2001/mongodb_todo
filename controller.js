let obj1 = new AppModel();

let input = document.getElementById("input");

input.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    let obj2 = new TodoItemModel(input.value, false);

    obj1.addTodoItem(obj2);
    input.value = "";
    obj1.render();
  }
});
//tabs part active,completed
document.getElementById("all").addEventListener("click", function (e) {
  obj1.filterType = "all";
  obj1.render();
});

document.getElementById("active").addEventListener("click", function (e) {
  // console.log("hel")
  obj1.filterType = "active";
  obj1.render();
});

document.getElementById("completed").addEventListener("click", function (e) {
  obj1.filterType = "completed";
  // e.target.style.color="red";

  // console.log("he33l")
  obj1.render();
});
//clear completed button
document.getElementById("clear").addEventListener("click", () => {
  obj1.todoCollection = obj1.todoCollection.filter((item) => !item.iscompleted);
  obj1.render();
});

document.getElementById("completed").addEventListener("click", function (e) {
 
  e.target.style.border="1px soliod red";

  // console.log("he33l")
  obj1.render();
});