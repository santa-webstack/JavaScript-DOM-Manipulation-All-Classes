let app = document.querySelector("#app");

let names = ["nusrat", "jahan", "santa"];

let DOMScript = names.map((name) => {
  let li = document.createElement("li");
  li.textContent = name; // ✅ variable use korbe, string na
  return li;
});

app.append(...DOMScript);

//prepend 

let apps = document.querySelector("#apps");

let lang = ["Afiya", "Nusrat", "Santa"];

let Details = lang.map((language) => {
  let li = document.createElement("li");
  li.innerHTML = language; // ✅ variable use korbe, string na
  return li;
});

apps.append(...Details);
