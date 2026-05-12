let menu = document.querySelector("#menu");

let cloneNode = menu.cloneNode(true);
cloneNode.id = "menu";  // নতুন id

document.body.appendChild(cloneNode);


//replace chaild
//let menu = document.querySelector("#menu");
//let li = document.createElement("li");

//li.textContent = "home";

//menu.replaceChild(li, menu.firstElementChild);


//remove child
//let menu = document.querySelector("#menu");
//menu.removeChild(menu.firstElementChild);