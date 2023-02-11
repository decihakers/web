let form = document.querySelector("form");
let input = document.querySelector("#text");
let btn = document.querySelector("button");
let msgBox = document.getElementById("msgBox");

function createMsg(text, img) {
  let msg = document.createElement("div");
  msg.className = "send";
  // photo
  let photo = document.createElement("div");
  photo.className = "photo";
  photo.innerHTML = `<img src="${img}" alt="person" />`;
  msg.appendChild(photo);
  // msg
  let content = document.createElement("div");
  content.className = "content";
  content.appendChild(document.createTextNode(text));
  msg.appendChild(content);
  // appent to msgBox
  msgBox.appendChild(msg);
}

btn.onclick = function (e) {
  if (input.value !== "") {
    createMsg(input.value, "/assets/user.png");
    input.value = "";
  }
  e.preventDefault();
};
