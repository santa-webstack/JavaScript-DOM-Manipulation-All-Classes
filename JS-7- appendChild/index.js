let menu = document.querySelector("#menu");
function CreateMenu(name){
    let li = document.createElement("li");
    li.textContent = name;
    return li;
}

menu.appendChild(CreateMenu("nusrat"));
menu.appendChild(CreateMenu("jahan"));
menu.appendChild(CreateMenu("santa"));