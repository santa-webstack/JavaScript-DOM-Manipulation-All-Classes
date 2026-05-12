//let div = document.createElement("div");
//div.id = "SantaID"
//div.className ="SantaClass"

//div.innerHTML = "<p> this is a p tag </p>";

//let text = document.createTextNode("inner text the div" );
//div.appendChild(text)

//let h1 = document.createElement("h1");
//h1.textContent = "inner h1 tag text";
//div.appendChild(h1)
//document.body.appendChild(div)

 let ul = document.createElement("ul");
 ul.id = "menu";
  let li1 = document.createElement("li");
  li1.textContent = "Home";
  ul.appendChild(li1);

   let li2 = document.createElement("li");
   li2.textContent = "About";
   ul.appendChild(li2);

   let li3 = document.createElement("li");
   li3.textContent = "Mark";
   ul.appendChild(li3);

  document.body.appendChild(ul);

  let script = document.createElement("script");
  script.src = "index.js";
  document.body.appendChild(script);

