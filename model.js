class TodoItemModel {
    constructor(caption, iscompleted) {
      this.caption = caption;
      this.iscompleted = iscompleted;
    }
    toggle() {
      this.iscompleted = !this.iscompleted;
    }
  }
  
  class AppModel {
    constructor() {
      this.todoCollection = [];
      this.filterType = "all";
    }
    addTodoItem(todoItem) {
      this.todoCollection.push(todoItem);
      console.log(this.todoCollection);
    }
    delTodoItem(index) {
      this.todoCollection.splice(index, 1);
      this.render();
    }
  
    render() {
      document.getElementById("ul").innerHTML = "";
      let filtertodocollection = this.todoCollection;
  
      let count = this.todoCollection.length;
      console.log(filtertodocollection);
      if (count == 0) {
        document.getElementById("c").innerHTML = count + " items left   "; //UI Part/VIEW
      }
      for (let i in filtertodocollection) {
        if (this.todoCollection[i].iscompleted == true) {
          count = count - 1;
        }
  
        let newLi = document.createElement("li");
        newLi.classList.add("listy");
  
        let check = document.createElement("div");
        check.classList.add("checkbox");
  
        var itemText = document.createElement("div");
        itemText.innerText = this.todoCollection[i].caption;
        itemText.classList.add("item-text");
  
        let del = document.createElement("i");
        del.classList.add("fa-solid");
        del.classList.add("fa-xmark");
  
        if (this.todoCollection[i].iscompleted == true) {
          // console.log(i);
          check.style.border = "2px solid green";
          itemText.style.textDecoration = "line-through";
  
          var tickicon = document.createElement("i");
          tickicon.classList.add("fa-solid");
          tickicon.classList.add("fa-check");
  
          tickicon.style.textAlign = "center";
          tickicon.style.color = "green";
  
          tickicon.style.fontSize = "20px";
  
          check.innerHTML = "";
          check.appendChild(tickicon);
        }
  
        newLi.appendChild(check);
        newLi.appendChild(itemText);
        newLi.appendChild(del);
  
        document.getElementById("c").innerHTML = count + " items left";
  
        // //    filtering Part:
        if (
          this.filterType == "active" &&
          this.todoCollection[i].iscompleted == false
        ) {
          // console.log("he")
          document.getElementById("ul").appendChild(newLi);
        } else if (
          this.filterType == "completed" &&
          this.todoCollection[i].iscompleted == true
        ) {
          // console.log("hi1")
          document.getElementById("ul").appendChild(newLi);
        } else if (this.filterType == "all") {
          // console.log("hi2")
          document.getElementById("ul").appendChild(newLi);
        }
       //done

       if(this.filterType=="active"){
         document.getElementById("active").style.border="2px solid #e9c2c2";
         document.getElementById("all").style.border="none";
         document.getElementById("completed").style.border="none";
       }else if(this.filterType=="all"){
        document.getElementById("all").style.border="2px solid #e9c2c2";
        document.getElementById("active").style.border="none";
        document.getElementById("completed").style.border="none";
       }else if(this.filterType=="completed"){
        document.getElementById("completed").style.border="2px solid #e9c2c2";
        document.getElementById("active").style.border="none";
        document.getElementById("all").style.border="none";
       }




        //done
  
        del.addEventListener("click", () => {
          this.delTodoItem(i);
        });
  
        check.addEventListener("click", (e) => {
          this.todoCollection[i].toggle();
          this.render();
        });
      }
    }
  }
  