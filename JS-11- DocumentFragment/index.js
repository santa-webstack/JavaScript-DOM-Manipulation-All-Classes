let menu = document.querySelector("#menu");

let lang = ['Phython', 'JavaScript', 'php', 'C', 'C++'];

let fragment = document.createDocumentFragment();// new DocumentFragment()

lang.forEach((language) =>{
    let li = document.createElement("li");
    li.textContent = language
    fragment.appendChild (li);

})

menu.appendChild(fragment)


