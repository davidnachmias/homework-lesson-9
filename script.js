// 1
function changeColorForDiv() {
  let div = document.getElementById("screen");
  let cancelButton = document.getElementById("cancel");
  let changeColorButton = document.getElementById("change-color");
  let timeoutId;

  changeColorButton.addEventListener("click", function () {
    changeColorButton.disabled = true;
    timeoutId = setTimeout(() => {
      div.style.backgroundColor = "blue";
      changeColorButton.disabled = false;
    }, 2000);
  });
  cancelButton.addEventListener("click", function () {
    clearTimeout(timeoutId);
    changeColorButton.disabled = false;
    div.style.backgroundColor = "white";
  });
}

changeColorForDiv();

// 2
let time = 10;
const timerElement = document.getElementById("timer");

function countdown() {
  time--;
  timerElement.textContent = time;
  if (time > 0) {
    setTimeout(countdown, 1000);
  } else {
    alert("times up!")
  }
}

countdown();

// 3
function costumIndexOf(string, char) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      return i;
    }
    
  }
  try {
    if (!isNaN(char)) throw new Error("char is number");
    if (char !== char.toLowerCase()) throw new Error("char is a upper letter")
    if (string.length === 0) throw new Error("empty char")
    
  } catch (error) {
    console.warn(error);
  }
  return -1
}

 result = costumIndexOf("", "d")
 console.log(result)

//  4
async function getJason(){
  try {
    const url ="https://jsonplaceholder.typicode.com/users"
    const response = await fetch(url)
    const users = await response.json()
    const userList = document.getElementById("user-list")
    users.forEach(user => {
      const listItem = document.createElement("li")
      listItem.textContent = `name : ${user.name} city: ${user.address.city}`
      userList.appendChild(listItem)
    });
  } catch (error) {
    console.warn(error)
  }
}

getJason()

